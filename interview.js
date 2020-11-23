function uniq(value) {
  let results = [];

  if (Array.isArray(value) && value.length === 0) {
    return results;
  }

  value.forEach((item) => {
    if (!results.includes(item)) {
      results.push(item);
    }
  });
  return results;
}

function bubbleSort(value) {
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

// input: ['2', 'b', '9', 'a', '7', '3', '4', 'b', '6', '4']
// output: ["2", "3", "4", "6", "7", "9", "a", "b"]
