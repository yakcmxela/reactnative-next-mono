/**
 * Check if the code is running on the client side.
 *
 * @return {boolean} Returns true if the code is running on the client side, false otherwise.
 */
export const isClient = () => typeof window !== "undefined";

/**
 * Determines if the current environment is the server-side.
 *
 * @return {boolean} True if the environment is server-side, false otherwise.
 */
export const isServer = () => typeof window === "undefined";

/**
 * Checks if the current environment is set to development and the Node environment is set to production.
 *
 * @return {boolean} - Returns true if the environment is development and the Node environment is production, otherwise returns false.
 */
export const isDevelopment = () =>
  process.env.ENVIRONMENT === "development" &&
  process.env.NODE_ENV === "production";

/**
 * Checks if the current environment is staging and the Node environment is production.
 *
 * @return {boolean} Returns true if the environment is staging and the Node environment is production, otherwise returns false.
 */
export const isStaging = () =>
  process.env.ENVIRONMENT === "staging" &&
  process.env.NODE_ENV === "production";

/**
 * Checks whether the current environment is production.
 *
 * @return {boolean} true if the current environment is production, otherwise false.
 */
export const isProduction = () =>
  process.env.ENVIRONMENT === "production" &&
  process.env.NODE_ENV === "production";

/**
 * Checks whether the current environment is running locally.
 *
 * @return {boolean} true if the current environment is local, otherwise false.
 */
export const isLocal = () => process.env.NODE_ENV === "development";
