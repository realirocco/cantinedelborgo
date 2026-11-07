const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Inizializza Google Analytics 4 (gtag.js).
 * Non fa nulla se VITE_GA_MEASUREMENT_ID non è configurato
 * (es. build di CI o test e2e senza la variabile).
 */
export function initAnalytics(): void {
  if (!MEASUREMENT_ID || typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  // gtag.js di Google processa come comandi SOLO gli oggetti `arguments`
  // ([object Arguments], con `callee`): un array semplice viene ignorato.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments as unknown as unknown[]);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());

  // Le page view vengono inviate manualmente a ogni cambio rotta,
  // per tracciare correttamente la navigazione SPA di IonTabs.
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false });
}

/**
 * Invia una page view per la rotta corrente.
 * No-op se analytics non è inizializzato.
 */
export function trackPageView(path: string): void {
  if (!MEASUREMENT_ID || !window.gtag) return;
  window.gtag('event', 'page_view', { page_path: path });
}
