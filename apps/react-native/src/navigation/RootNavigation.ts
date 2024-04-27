import { createNavigationContainerRef } from '@react-navigation/native';
import { ScreenProps } from "@todo/types";

export const navigationRef = createNavigationContainerRef<ScreenProps>();

export function navigate(name: keyof ScreenProps, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
