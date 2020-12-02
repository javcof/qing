export function bubbleSort(value) {
  let results = value.slice(),
    len = results.length;

  while (--len) {
    for (let i = 0, j = 1; i < len; i++, j++) {
      if (results[i].charCodeAt() > results[j].charCodeAt()) {
        let temp = results[i];
        results[i] = results[j];
        results[j] = temp;
      }
    }
  }
  return results;
}
