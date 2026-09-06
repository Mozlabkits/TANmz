/**
 * API configuration helper.
 * When running inside Android Capacitor webview (protocol capacitor:// or file://),
 * points to the backend server endpoint. When running in web browser, uses relative path.
 */
export function getApiBaseUrl(): string {
  if (typeof window === 'undefined') return '';
  
  // Explicit environment variable if configured
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL.replace(/\/$/, '');
  }

  // Detect Android Capacitor or local file runtime
  const isCapacitor = window.location.protocol === 'capacitor:' || window.location.protocol === 'file:';
  if (isCapacitor) {
    // Current Cloud Run production endpoint of the TANmz applet
    return 'https://ais-dev-27s4bayaxs7p5sihepa35e-336913437714.europe-west2.run.app';
  }

  return '';
}

export function getApiEndpoint(path: string): string {
  const base = getApiBaseUrl();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}
