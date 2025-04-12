import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { StatusBar } from "react-native";

import Login from "./src/pages/login";
import Register from "./src/pages/cadastro";
import { Historico } from "./src/pages/historico";
import { Home } from "./src/pages/home";
import { Settings } from "./src/pages/settings/index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Register} />
          <Stack.Screen name="Historico" component={Historico} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
