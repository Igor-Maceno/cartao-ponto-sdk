import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { StatusBar } from "react-native";

import Login from "./src/pages/login";
import Register from "./src/pages/cadastro";
import { Home } from "./src/pages/home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}