function debounce(fn, wait, immediate) {
  let timerId, result;

  function startTimer(context, args) {
    timerId = setTimeout(function() {
      timerId = undefined;
      if (args) {
        result = fn.apply(context, args);
      }
    }, wait);
  }

  function debounced(...args) {
    let lastThis = this;
    let lastArgs = args;

    if (timerId) {
      clearTimeout(timerId);
    }
    if (immediate) {
      let shouldCall = !timerId;
      startTimer();
      if (shouldCall) {
        result = fn.apply(lastThis);
      }
    } else {
      startTimer(lastThis, lastArgs);
    }

    return result;
  }

  return debounced;
}