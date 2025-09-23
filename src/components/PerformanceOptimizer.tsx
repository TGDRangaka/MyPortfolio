import { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = ['/home.png', '/icon.png', '/logo.png'];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Lazy load non-critical images
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src!;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Optimize font loading
    const optimizeFonts = () => {
      const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]') as HTMLLinkElement;
      if (fontLink) {
        fontLink.setAttribute('rel', 'preload');
        fontLink.setAttribute('as', 'style');
        fontLink.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
      }
    };

    // Add service worker for caching (if not already present)
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {
          // Service worker registration failed, but that's okay
        });
      }
    };

    preloadCriticalResources();
    lazyLoadImages();
    optimizeFonts();
    registerServiceWorker();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
