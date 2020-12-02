export function debounce(fn, wait, immediate) {
  let timerId, result;

  function startTimer(context, args) {
    timerId = setTimeout(function () {
      timerId = undefined;
      if (args) {
        result = fn.apply(context, args);
      }
    }, wait);
  }

  function clearTimer() {
    if (timerId) {
      clearTimeout(timerId);
    }
  }

  function debounced(...args) {
    let lastThis = this;
    let lastArgs = args;

    clearTimer();
    if (immediate) {
      let shouldCall = !timerId;
      startTimer();
      if (shouldCall) {
        result = fn.apply(lastThis, lastArgs);
      }
    } else {
      startTimer(lastThis, lastArgs);
    }

    return result;
  }

  return debounced;
}
