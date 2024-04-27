"use strict";
exports.__esModule = true;
exports.pipe = void 0;
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
var pipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (value) {
        return fns.reduce(function (acc, fn) { return fn(acc); }, value);
    };
};
exports.pipe = pipe;
