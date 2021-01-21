export function debounce(fn: Function, ms: number) {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<Function>) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, ms);
  };
}
