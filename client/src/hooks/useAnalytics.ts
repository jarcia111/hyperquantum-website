import { useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'wouter';

// Check if backend is available (not in static hosting like GitHub Pages)
const isBackendAvailable = (): boolean => {
  // En GitHub Pages o hosting estático sin backend, retorna false
  // Esto previene errores 405 en producción
  if (typeof window === 'undefined') return false;
  
  // Deshabilitado para GitHub Pages (sin backend)
  return false;
  
  // Si migras a Vercel/Railway con backend, usa:
  // return window.location.hostname.includes('vercel.app') || 
  //        window.location.hostname.includes('railway.app') ||
  //        window.location.hostname === 'localhost';
};

// Generate a session ID that persists during the browser session
function getSessionId(): string {
  if (typeof window === 'undefined' || !window.sessionStorage) return '';
  
  let sessionId = sessionStorage.getItem('analytics_session_id');
  
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  
  return sessionId;
}

// Track a page visit
async function trackPageVisit(path: string) {
  // No hacer nada si no hay backend disponible
  if (!isBackendAvailable()) {
    console.log('[Analytics] Backend no disponible - tracking deshabilitado');
    return;
  }

  try {
    const sessionId = getSessionId();
    
    await fetch('/api/analytics/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        path,
        referrer: document.referrer,
        sessionId,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
      }),
    });
  } catch (error) {
    console.error('Failed to track visit:', error);
  }
}

// Track a custom event
export async function trackEvent(eventName: string, eventType: string = 'custom', metadata?: Record<string, any>) {
  // No hacer nada si no hay backend disponible
  if (!isBackendAvailable()) {
    console.log('[Analytics] Backend no disponible - event tracking deshabilitado');
    return;
  }

  try {
    const sessionId = getSessionId();
    
    await fetch('/api/analytics/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        eventType,
        eventName,
        path: window.location.pathname,
        metadata,
      }),
    });
  } catch (error) {
    console.error('Failed to track event:', error);
  }
}

// Hook to track page views automatically
export function useAnalytics() {
  const [location] = useLocation();
  const previousLocation = useRef<string | null>(null);

  useEffect(() => {
    // Track page view when location changes
    if (location !== previousLocation.current) {
      trackPageVisit(location);
      previousLocation.current = location;
    }
  }, [location]);

  // Return track event function for manual tracking
  const track = useCallback((eventName: string, eventType?: string, metadata?: Record<string, any>) => {
    trackEvent(eventName, eventType, metadata);
  }, []);

  return { track };
}

// Track specific interactions
export function useTrackClicks(elementName: string) {
  return useCallback(() => {
    trackEvent(`${elementName} clicked`, 'click');
  }, [elementName]);
}

export function useTrackFormSubmit(formName: string) {
  return useCallback(() => {
    trackEvent(`${formName} submitted`, 'form_submit');
  }, [formName]);
}

export function useTrackScroll(sectionName: string) {
  return useCallback(() => {
    trackEvent(`${sectionName} viewed`, 'scroll');
  }, [sectionName]);
}
