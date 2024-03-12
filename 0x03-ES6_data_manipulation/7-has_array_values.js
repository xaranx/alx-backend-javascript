/* eslint-disable no-plusplus */
export default function hasValuesFromArray(set, arr) {
  if (!Array.isArray(arr)) return false;
  for (let i = 0; i < arr.length; ++i) {
    if (!set.has(arr[i])) return false;
  }
  return true;
}
