export default function cleanSet(set, startStr) {
  if (!(set instanceof Set) || typeof startStr !== 'string') return '';

  return Array.from(set).reduce((acc, el, idx) => {
    let prefix = acc;
    if (startStr.trim() && el && el.startsWith(startStr)) {
      if (idx > 0) { prefix += '-'; }
      return prefix + el.slice(startStr.length);
    }
    return acc;
  }, '');
}
