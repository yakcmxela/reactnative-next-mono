import { SetStateAction } from "react";

/**
 * Accepts a boolean state and sets it to true, then calls the second argument
 * before returning the boolean state to false. Useful for avoiding repeating
 * loading logic.
 *
 * ```
 * const [loading, setLoading] = useState(false)
 * const requestData = () => {
 *   loadingWrapper(setLoading, async () => {
 *     // Heres the callback
 *   });
 * };
 *
 * if(loading) {
 *   <LoadingSpinner />
 * }
 * ```
 */
export const loadingWrapper = async (
  setLoading?: SetStateAction<any>,
  callback?: Function
) => {
  if (setLoading) {
    setLoading(true);
  }
  let response;
  let didError = false;
  if (callback) {
    try {
      response = await callback();
    } catch (error) {
      didError = true;
      response = error;
    }
  }
  if (setLoading) {
    setLoading(false);
  }
  if (didError) {
    throw response;
  }
  return response;
};
