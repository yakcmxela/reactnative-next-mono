export const catchSilentError = async (callback: () => Promise<void>) => {
  try {
    await callback();
  } catch (error) {
    // fail silently
  }
};
