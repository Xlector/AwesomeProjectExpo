import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
import ColorPaletteModal from './screens/ColorPaletteModal';
import { QueryClient, QueryClientProvider } from 'react-query';
export default function App() {
  const queryClient = new QueryClient();
  const [fontsLoaded] = useFonts({
    coolvetica: require('./assets/fonts/coolvetica.otf'),
  });
  const RootStack = createStackNavigator();
  const MainStack = createStackNavigator();
  const MainStackScreen = () => {
    return (
      <MainStack.Navigator>
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home Page',
            headerStyle: {
              backgroundColor: '#333333',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <MainStack.Screen
          name="ColorPalette"
          options={({ route }) => ({ title: route.params.paletteName })}
          component={ColorPalette}
        />
      </MainStack.Navigator>
    );
  };
  if (fontsLoaded) {
    return (
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
            <RootStack.Screen
              name="Main"
              component={MainStackScreen}
              options={{ headerShown: false }}
            />
            <RootStack.Screen name="ColorPalletteModal" component={ColorPaletteModal} />
          </RootStack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    );
  } else {
    <View>
      <Text>font not loaded</Text>
    </View>;
  }
}
