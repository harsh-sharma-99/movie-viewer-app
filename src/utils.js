//debouncer for searching movie
export function debounce(func, timeout = 400) {
  let timer;
  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      func.apply(this, args);
    }, timeout);
  };
}
