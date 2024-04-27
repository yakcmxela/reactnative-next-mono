/**
 * Creates a pipe of functions, each of which returns the result
 * of the previous. Use it like so: 
 * ```
 * const addOne = (num: number) => num + 1
 * const addTwo = (num: number) => num + 2
 * 
 * const pipeFunction = pipe(addOne, addTwo)
 * 
 * const number = pipeFunction(0) // 3
 * ```
 */
export const pipe =
  (...fns: Array<(arg: any) => any>) =>
  (value: any) =>
    fns.reduce((acc, fn) => fn(acc), value);
