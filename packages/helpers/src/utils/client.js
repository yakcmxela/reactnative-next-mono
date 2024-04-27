"use strict";
exports.__esModule = true;
exports.isLocal = exports.isProduction = exports.isStaging = exports.isDevelopment = exports.isServer = exports.isClient = void 0;
/**
 * Check if the code is running on the client side.
 *
 * @return {boolean} Returns true if the code is running on the client side, false otherwise.
 */
var isClient = function () { return typeof window !== "undefined"; };
exports.isClient = isClient;
/**
 * Determines if the current environment is the server-side.
 *
 * @return {boolean} True if the environment is server-side, false otherwise.
 */
var isServer = function () { return typeof window === "undefined"; };
exports.isServer = isServer;
/**
 * Checks if the current environment is set to development and the Node environment is set to production.
 *
 * @return {boolean} - Returns true if the environment is development and the Node environment is production, otherwise returns false.
 */
var isDevelopment = function () {
    return process.env.ENVIRONMENT === "development" &&
        process.env.NODE_ENV === "production";
};
exports.isDevelopment = isDevelopment;
/**
 * Checks if the current environment is staging and the Node environment is production.
 *
 * @return {boolean} Returns true if the environment is staging and the Node environment is production, otherwise returns false.
 */
var isStaging = function () {
    return process.env.ENVIRONMENT === "staging" &&
        process.env.NODE_ENV === "production";
};
exports.isStaging = isStaging;
/**
 * Checks whether the current environment is production.
 *
 * @return {boolean} true if the current environment is production, otherwise false.
 */
var isProduction = function () {
    return process.env.ENVIRONMENT === "production" &&
        process.env.NODE_ENV === "production";
};
exports.isProduction = isProduction;
/**
 * Checks whether the current environment is running locally.
 *
 * @return {boolean} true if the current environment is local, otherwise false.
 */
var isLocal = function () { return process.env.NODE_ENV === "development"; };
exports.isLocal = isLocal;
