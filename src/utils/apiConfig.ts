/**
 * TANmz — API Configuration
 *
 * Centraliza o endereço do backend usado pelo Tutor TANmz.
 *
 * IMPORTANTE:
 * - Mantém VITE_API_BASE_URL como prioridade quando configurado.
 * - Mantém o endpoint Cloud Run para Android/Capacitor.
 * - No navegador, usa o mesmo backend Cloud Run para que
 *   /api/tutor também funcione quando o TANmz estiver publicado
 *   como site estático.
 */

const TANMZ_API_BASE_URL =
  'https://ais-dev-27s4bayaxs7p5sihepa35e-336913437714.europe-west2.run.app';

export function getApiBaseUrl(): string {
  /*
   * Durante SSR/build sem window, não tentar detectar navegador.
   */
  if (typeof window === 'undefined') {
    return TANMZ_API_BASE_URL;
  }

  /*
   * 1. Variável de ambiente tem prioridade.
   *
   * Exemplo:
   * VITE_API_BASE_URL=https://meu-backend.com
   */
  const environmentBaseUrl =
    import.meta.env.VITE_API_BASE_URL;

  if (
    typeof environmentBaseUrl === 'string' &&
    environmentBaseUrl.trim() !== ''
  ) {
    return environmentBaseUrl
      .trim()
      .replace(/\/+$/, '');
  }

  /*
   * 2. Android / Capacitor / ficheiro local.
   *
   * Continua usando o backend Cloud Run que já estava
   * configurado no projeto.
   */
  const protocol = window.location.protocol;

  const isCapacitor =
    protocol === 'capacitor:' ||
    protocol === 'file:';

  if (isCapacitor) {
    return TANMZ_API_BASE_URL;
  }

  /*
   * 3. Navegador web.
   *
   * ALTERAÇÃO PRINCIPAL:
   *
   * Antes:
   * return '';
   *
   * Isso fazia:
   * /api/tutor
   *
   * Agora:
   * https://...run.app/api/tutor
   *
   * Assim o navegador também consegue chegar ao backend
   * do Tutor.
   */
  return TANMZ_API_BASE_URL;
}

/**
 * Constrói o endereço completo de uma API.
 *
 * Exemplo:
 *
 * getApiEndpoint('/api/tutor')
 *
 * resulta em:
 *
 * https://ais-dev-...run.app/api/tutor
 */
export function getApiEndpoint(path: string): string {
  const base = getApiBaseUrl();

  const normalizedPath = path.startsWith('/')
    ? path
    : `/${path}`;

  return `${base}${normalizedPath}`;
}
