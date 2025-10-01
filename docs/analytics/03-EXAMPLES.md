# 💡 Ejemplos Prácticos - Analytics Dashboard

## 📝 Casos de Uso Reales

Aquí encontrarás ejemplos prácticos de cómo usar el sistema de analytics en diferentes escenarios.

---

## 1. 🖱️ Trackear Clics en Botones

### Ejemplo: Botón de Contacto
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

export default function ContactButton() {
  const { track } = useAnalytics();
  
  const handleClick = () => {
    track('Contact Button Clicked', 'click', {
      location: 'Hero Section',
      buttonText: 'Contáctanos'
    });
    
    // Tu lógica normal del botón
    window.location.href = '/contacto';
  };
  
  return (
    <button onClick={handleClick} className="btn-primary">
      Contáctanos
    </button>
  );
}
```

### Ejemplo: Botones de Redes Sociales
```tsx
function SocialButtons() {
  const { track } = useAnalytics();
  
  const trackSocial = (network: string) => {
    track(`${network} Link Clicked`, 'click', {
      category: 'Social Media',
      network
    });
  };
  
  return (
    <div>
      <a href="https://facebook.com/..." onClick={() => trackSocial('Facebook')}>
        Facebook
      </a>
      <a href="https://twitter.com/..." onClick={() => trackSocial('Twitter')}>
        Twitter
      </a>
      <a href="https://linkedin.com/..." onClick={() => trackSocial('LinkedIn')}>
        LinkedIn
      </a>
    </div>
  );
}
```

---

## 2. 📋 Trackear Formularios

### Ejemplo: Formulario de Contacto
```tsx
import { useTrackFormSubmit } from '@/hooks/useAnalytics';

export default function ContactForm() {
  const trackSubmit = useTrackFormSubmit('Contact Form');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track el envío
    trackSubmit();
    
    // Tu lógica de envío
    const formData = new FormData(e.target as HTMLFormElement);
    await fetch('/api/contact', {
      method: 'POST',
      body: formData
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nombre" />
      <input type="email" name="email" placeholder="Email" />
      <textarea name="message" placeholder="Mensaje" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### Ejemplo: Trackear Campos Individuales
```tsx
function NewsletterForm() {
  const { track } = useAnalytics();
  
  const trackFieldFocus = (field: string) => {
    track(`Field Focused: ${field}`, 'interaction', {
      form: 'Newsletter',
      field
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    track('Newsletter Signup', 'form_submit', {
      source: 'Footer'
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        onFocus={() => trackFieldFocus('email')}
        placeholder="Tu email"
      />
      <button type="submit">Suscribirse</button>
    </form>
  );
}
```

---

## 3. 📜 Trackear Scroll y Engagement

### Ejemplo: Secciones Visitadas
```tsx
import { useEffect, useRef } from 'react';
import { trackEvent } from '@/hooks/useAnalytics';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            trackEvent('Hero Section Viewed', 'scroll');
            hasTracked.current = true;
          }
        });
      },
      { threshold: 0.5 } // 50% visible
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={sectionRef} className="hero">
      <h1>Bienvenido a HyperQuantum</h1>
    </div>
  );
}
```

### Ejemplo: Profundidad de Scroll
```tsx
function useScrollDepth() {
  const { track } = useAnalytics();
  const tracked = useRef({ '25': false, '50': false, '75': false, '100': false });
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      
      if (scrolled >= 25 && !tracked.current['25']) {
        track('Scroll Depth: 25%', 'scroll');
        tracked.current['25'] = true;
      }
      if (scrolled >= 50 && !tracked.current['50']) {
        track('Scroll Depth: 50%', 'scroll');
        tracked.current['50'] = true;
      }
      if (scrolled >= 75 && !tracked.current['75']) {
        track('Scroll Depth: 75%', 'scroll');
        tracked.current['75'] = true;
      }
      if (scrolled >= 100 && !tracked.current['100']) {
        track('Scroll Depth: 100%', 'scroll');
        tracked.current['100'] = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [track]);
}
```

---

## 4. 🎥 Trackear Videos e Imágenes

### Ejemplo: Reproducción de Video
```tsx
function VideoPlayer({ videoUrl }: { videoUrl: string }) {
  const { track } = useAnalytics();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handlePlay = () => {
    track('Video Started', 'media', {
      videoUrl,
      timestamp: videoRef.current?.currentTime || 0
    });
  };
  
  const handlePause = () => {
    track('Video Paused', 'media', {
      videoUrl,
      timestamp: videoRef.current?.currentTime || 0
    });
  };
  
  const handleEnded = () => {
    track('Video Completed', 'media', {
      videoUrl
    });
  };
  
  return (
    <video
      ref={videoRef}
      src={videoUrl}
      onPlay={handlePlay}
      onPause={handlePause}
      onEnded={handleEnded}
      controls
    />
  );
}
```

### Ejemplo: Click en Imágenes
```tsx
function ImageGallery({ images }: { images: string[] }) {
  const { track } = useAnalytics();
  
  const handleImageClick = (imageIndex: number) => {
    track('Image Clicked', 'click', {
      imageIndex,
      imageUrl: images[imageIndex]
    });
  };
  
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          onClick={() => handleImageClick(index)}
          alt={`Gallery image ${index + 1}`}
        />
      ))}
    </div>
  );
}
```

---

## 5. 🔗 Trackear Enlaces Externos

### Ejemplo: Enlaces Salientes
```tsx
function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  const { track } = useAnalytics();
  
  const handleClick = () => {
    track('External Link Clicked', 'click', {
      destination: href,
      linkText: children?.toString() || ''
    });
  };
  
  return (
    <a 
      href={href} 
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
```

---

## 6. ⏱️ Trackear Tiempo en Página

### Ejemplo: Time on Page
```tsx
function usePageTimer() {
  const { track } = useAnalytics();
  const startTime = useRef(Date.now());
  
  useEffect(() => {
    return () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      track('Page Exit', 'timing', {
        timeSpent,
        path: window.location.pathname
      });
    };
  }, [track]);
}

// Uso en cualquier página
function MyPage() {
  usePageTimer();
  
  return <div>Contenido de la página</div>;
}
```

---

## 7. 🛒 Trackear Acciones de E-commerce

### Ejemplo: Agregar al Carrito
```tsx
function ProductCard({ product }: { product: Product }) {
  const { track } = useAnalytics();
  
  const handleAddToCart = () => {
    track('Add to Cart', 'ecommerce', {
      productId: product.id,
      productName: product.name,
      price: product.price,
      category: product.category
    });
    
    // Tu lógica de carrito
    addToCart(product);
  };
  
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
}
```

### Ejemplo: Checkout Completado
```tsx
function CheckoutSuccess({ orderId, total }: { orderId: string; total: number }) {
  const { track } = useAnalytics();
  
  useEffect(() => {
    track('Purchase Completed', 'ecommerce', {
      orderId,
      total,
      currency: 'USD'
    });
  }, [orderId, total, track]);
  
  return <div>¡Gracias por tu compra!</div>;
}
```

---

## 8. 🔍 Trackear Búsquedas

### Ejemplo: Barra de Búsqueda
```tsx
function SearchBar() {
  const { track } = useAnalytics();
  const [query, setQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    track('Search Performed', 'search', {
      query,
      resultsCount: searchResults.length
    });
    
    // Tu lógica de búsqueda
    performSearch(query);
  };
  
  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
```

---

## 9. 📱 Trackear Interacciones Móviles

### Ejemplo: Detección de Touch
```tsx
function MobileMenu() {
  const { track } = useAnalytics();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
    
    track(isOpen ? 'Mobile Menu Closed' : 'Mobile Menu Opened', 'interaction', {
      device: 'mobile'
    });
  };
  
  return (
    <>
      <button onClick={handleToggle}>☰</button>
      {isOpen && <nav>...</nav>}
    </>
  );
}
```

---

## 10. 🎯 Trackear Conversiones

### Ejemplo: Lead Magnet
```tsx
function DownloadEbook() {
  const { track } = useAnalytics();
  
  const handleDownload = () => {
    track('Ebook Downloaded', 'conversion', {
      ebookName: 'Guía de Computación Cuántica',
      source: 'Landing Page'
    });
    
    // Descargar archivo
    window.open('/downloads/ebook.pdf', '_blank');
  };
  
  return (
    <button onClick={handleDownload}>
      Descargar Ebook Gratis
    </button>
  );
}
```

---

## 🎨 Visualizar Datos en el Dashboard

Una vez que implementes estos tracking events, verás en tu dashboard:

### Tab "Eventos"
```
Button Clicked                    250 veces
Contact Form Submitted             45 veces
Hero Section Viewed               180 veces
Video Started                      32 veces
External Link Clicked              67 veces
Add to Cart                        23 veces
Purchase Completed                  8 veces
```

### Insights que Puedes Obtener
- ¿Qué botones se hacen clic más?
- ¿Qué secciones generan más engagement?
- ¿Cuántas personas completan formularios?
- ¿Qué videos son más populares?
- ¿Cuál es la tasa de conversión?

---

## 📊 Ejemplos de Análisis

### 1. Funnel de Conversión
```
Visitantes Landing Page:  1000
↓
Hero Section Viewed:       800  (80%)
↓
Contact Button Clicked:    200  (20%)
↓
Form Submitted:             80  (8%)
```

### 2. Análisis de Engagement
```
Scroll 25%:   90% de visitantes
Scroll 50%:   70% de visitantes
Scroll 75%:   45% de visitantes
Scroll 100%:  20% de visitantes
```

### 3. Mejor Hora del Día
```
00:00 - 06:00:   50 visitas
06:00 - 12:00:  200 visitas
12:00 - 18:00:  450 visitas  ← Pico
18:00 - 24:00:  300 visitas
```

---

## 🚀 Tips Pro

### 1. Segmentación
Agrega metadata útil para segmentar después:
```tsx
track('Button Clicked', 'click', {
  section: 'Hero',
  variant: 'primary',
  experimentId: 'A/B-Test-001'
});
```

### 2. User Journey
Combina eventos para entender el recorrido:
```tsx
// Página de inicio
track('Page Loaded', 'pageview');

// Usuario scrollea
track('Section Viewed', 'scroll', { section: 'Features' });

// Usuario hace clic
track('CTA Clicked', 'click', { cta: 'Get Started' });

// Usuario se registra
track('Signup Completed', 'conversion');
```

### 3. A/B Testing
```tsx
const variant = Math.random() > 0.5 ? 'A' : 'B';

track('Experiment Viewed', 'experiment', {
  experimentName: 'Hero CTA Test',
  variant
});
```

---

## ✅ Checklist de Implementación

Para cada página/componente importante, pregúntate:

- [ ] ¿Se trackea la visita automática? (✅ Ya implementado)
- [ ] ¿Hay botones/CTAs que debo trackear?
- [ ] ¿Hay formularios que debo trackear?
- [ ] ¿Hay secciones importantes para el scroll tracking?
- [ ] ¿Hay videos o media que debo trackear?
- [ ] ¿Hay enlaces externos importantes?
- [ ] ¿Hay conversiones que medir?

---

*Con estos ejemplos puedes empezar a trackear cualquier interacción en tu sitio y obtener insights valiosos sobre tus usuarios.* 🚀
