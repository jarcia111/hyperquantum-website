import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Analytics data storage
const ANALYTICS_FILE = path.join(__dirname, '../data/analytics.json');

// Ensure data directory exists
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize analytics file if it doesn't exist
if (!fs.existsSync(ANALYTICS_FILE)) {
  fs.writeFileSync(ANALYTICS_FILE, JSON.stringify({ visits: [], events: [] }, null, 2));
}

export interface VisitData {
  id: string;
  timestamp: string;
  path: string;
  referrer: string;
  userAgent: string;
  ip: string;
  country?: string;
  city?: string;
  device: string;
  browser: string;
  os: string;
  screenResolution?: string;
  language: string;
  sessionId: string;
}

export interface EventData {
  id: string;
  timestamp: string;
  sessionId: string;
  eventType: string;
  eventName: string;
  path: string;
  metadata?: Record<string, any>;
}

export interface AnalyticsData {
  visits: VisitData[];
  events: EventData[];
}

// Helper to parse User Agent
function parseUserAgent(ua: string) {
  const device = /mobile|tablet|android|iphone|ipad/i.test(ua) ? 'mobile' : 'desktop';
  
  let browser = 'Unknown';
  if (ua.includes('Chrome')) browser = 'Chrome';
  else if (ua.includes('Safari')) browser = 'Safari';
  else if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Edge')) browser = 'Edge';
  
  let os = 'Unknown';
  if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Mac')) os = 'macOS';
  else if (ua.includes('Linux')) os = 'Linux';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iOS')) os = 'iOS';
  
  return { device, browser, os };
}

// Read analytics data
function readAnalytics(): AnalyticsData {
  try {
    const data = fs.readFileSync(ANALYTICS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading analytics:', error);
    return { visits: [], events: [] };
  }
}

// Write analytics data
function writeAnalytics(data: AnalyticsData): void {
  try {
    fs.writeFileSync(ANALYTICS_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing analytics:', error);
  }
}

// Track a visit
export function trackVisit(req: any): void {
  const analytics = readAnalytics();
  
  const { device, browser, os } = parseUserAgent(req.headers['user-agent'] || '');
  
  const visit: VisitData = {
    id: `visit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: new Date().toISOString(),
    path: req.body.path || '/',
    referrer: req.body.referrer || req.headers.referer || 'direct',
    userAgent: req.headers['user-agent'] || '',
    ip: req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress || '',
    device,
    browser,
    os,
    screenResolution: req.body.screenResolution || '',
    language: req.body.language || req.headers['accept-language']?.split(',')[0] || '',
    sessionId: req.body.sessionId || '',
  };
  
  analytics.visits.push(visit);
  
  // Keep only last 10000 visits to avoid file growing too large
  if (analytics.visits.length > 10000) {
    analytics.visits = analytics.visits.slice(-10000);
  }
  
  writeAnalytics(analytics);
}

// Track an event
export function trackEvent(req: any): void {
  const analytics = readAnalytics();
  
  const event: EventData = {
    id: `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: new Date().toISOString(),
    sessionId: req.body.sessionId || '',
    eventType: req.body.eventType || 'custom',
    eventName: req.body.eventName || '',
    path: req.body.path || '/',
    metadata: req.body.metadata || {},
  };
  
  analytics.events.push(event);
  
  // Keep only last 10000 events
  if (analytics.events.length > 10000) {
    analytics.events = analytics.events.slice(-10000);
  }
  
  writeAnalytics(analytics);
}

// Get analytics summary
export function getAnalyticsSummary(days: number = 7) {
  const analytics = readAnalytics();
  const now = new Date();
  const startDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
  
  // Filter by date range
  const recentVisits = analytics.visits.filter(v => 
    new Date(v.timestamp) >= startDate
  );
  
  const recentEvents = analytics.events.filter(e => 
    new Date(e.timestamp) >= startDate
  );
  
  // Calculate metrics
  const totalVisits = recentVisits.length;
  const uniqueVisitors = new Set(recentVisits.map(v => v.sessionId)).size;
  
  // Page views by path
  const pageViews: Record<string, number> = {};
  recentVisits.forEach(v => {
    pageViews[v.path] = (pageViews[v.path] || 0) + 1;
  });
  
  // Device breakdown
  const deviceBreakdown: Record<string, number> = {};
  recentVisits.forEach(v => {
    deviceBreakdown[v.device] = (deviceBreakdown[v.device] || 0) + 1;
  });
  
  // Browser breakdown
  const browserBreakdown: Record<string, number> = {};
  recentVisits.forEach(v => {
    browserBreakdown[v.browser] = (browserBreakdown[v.browser] || 0) + 1;
  });
  
  // OS breakdown
  const osBreakdown: Record<string, number> = {};
  recentVisits.forEach(v => {
    osBreakdown[v.os] = (osBreakdown[v.os] || 0) + 1;
  });
  
  // Referrer breakdown
  const referrerBreakdown: Record<string, number> = {};
  recentVisits.forEach(v => {
    const referrer = v.referrer === 'direct' ? 'Direct' : new URL(v.referrer).hostname || v.referrer;
    referrerBreakdown[referrer] = (referrerBreakdown[referrer] || 0) + 1;
  });
  
  // Daily visits
  const dailyVisits: Record<string, number> = {};
  recentVisits.forEach(v => {
    const date = new Date(v.timestamp).toISOString().split('T')[0];
    dailyVisits[date] = (dailyVisits[date] || 0) + 1;
  });
  
  // Top events
  const eventBreakdown: Record<string, number> = {};
  recentEvents.forEach(e => {
    eventBreakdown[e.eventName] = (eventBreakdown[e.eventName] || 0) + 1;
  });
  
  return {
    totalVisits,
    uniqueVisitors,
    totalEvents: recentEvents.length,
    pageViews,
    deviceBreakdown,
    browserBreakdown,
    osBreakdown,
    referrerBreakdown,
    dailyVisits,
    eventBreakdown,
    recentVisits: recentVisits.slice(-50), // Last 50 visits
  };
}

// Get real-time data (last 24 hours)
export function getRealTimeData() {
  return getAnalyticsSummary(1);
}
