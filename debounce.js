function debounce(fn, wait) {
  let timerId;
  let lastThis;
  let lastArgs;

  function startTimer() {
    timerId = setTimeout(function() {
      fn.apply(lastThis, lastArgs);
      clearTimeout(timerId);
    }, wait);
  }

  function debounced(...args) {
    lastThis = this;
    lastArgs = args;

    if (timerId === undefined) {
      startTimer();
    } else {
      clearTimeout(timerId);
      timerId = undefined;
      startTimer();
    }
  }

  return debounced;
}