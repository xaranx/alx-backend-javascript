/**
 * Updates value of items to 100 if value is 1.
 *
 * @param {Map.<string, number>} items map of random stuff
 */
export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) throw new Error('Cannot process');

  for (const [k, v] of items.entries()) {
    if (v === 1) {
      items.set(k, 100);
    }
  }
}
