//debouncer for searching movie
export function debounce(func, timeout = 400) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
