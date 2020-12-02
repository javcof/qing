export function uniq(value) {
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
