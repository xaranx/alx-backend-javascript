export const weakMap = new WeakMap();

/**
 * query an endpoint and cache number of endpoint hits.
 * @param {Object.<string, string>} endpoint object representing an endpoint.
 */
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const v = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, v);
    if (v >= 5) throw new Error('Endpoint load is high');
    return;
  }
  weakMap.set(endpoint, 1);
}
