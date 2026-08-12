const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = import.meta.env.STRAPI_API_TOKEN;

/**
 * Helper to build nested query strings for Strapi APIs (similar to qs library output)
 */
function buildQueryString(params, prefix = '') {
  const queryParts = [];
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const value = params[key];
      const name = prefix ? `${prefix}[${key}]` : key;
      if (typeof value === 'object' && value !== null) {
        queryParts.push(buildQueryString(value, name));
      } else if (value !== undefined && value !== null) {
        queryParts.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
      }
    }
  }
  return queryParts.filter(Boolean).join('&');
}

/**
 * Fetch helper for Strapi REST API
 */
export async function fetchAPI(path, query = {}) {
  const queryString = buildQueryString(query);
  const url = `${STRAPI_URL}/api/${path}${queryString ? `?${queryString}` : ''}`;
  
  const headers = {
    'Content-Type': 'application/json',
  };
  
  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const response = await fetch(url, { headers });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch API from Strapi at ${url}: ${response.statusText}`);
  }

  return response.json();
}
