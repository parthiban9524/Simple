import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import Login from "./src/screens/Login";
import Dashboard from "./src/screens/Dashboard";
import Signup from "./src/screens/Signup";
import Store from "./src/components/Store";

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <Stack.Navigator initialRouteName="Signup" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}