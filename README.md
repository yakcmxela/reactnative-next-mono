# React / React Native - Monorepo

This is a proof of concept for the coexistence of a React and a React Native application in a monorepo. So far they share types, a data layer, and some helper functions. It's only set up for Android development on the RN side of things. Some additional configuration will need to take place for iOS to make use of the correct package paths. 

Next step is to test out using a shared store for the two apps and add another JS framework into the mix. Perhaps Vue or Remix?