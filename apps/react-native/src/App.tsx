import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './screens/TodoList';
import TodoScreen from './screens/Todo';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenProps} from '@todo/types';
import {navigationRef} from '@todo/ui/react-native';

const Stack = createNativeStackNavigator<ScreenProps>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // const [store, setStore] = useState<StoreState>();

  // const createStore = async () => {
  //   try {
  //     setStore(
  //       await getInitialStore(async store => {
  //         console.log('store initialized');
  //         return store;
  //       }),
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   createStore();
  // }, []);

  // if (!store) {
  //   return (
  //     <SafeAreaView
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         height: '100%',
  //       }}>
  //       <Text>Loading...</Text>
  //     </SafeAreaView>
  //   );
  // }

  return (
    // <StoreProvider store={store}>
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Todo" component={TodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </StoreProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
