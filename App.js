import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Community from "./screens/community";
import Home from "./screens/home";
import Goal from "./screens/goal";
import Wins from "./screens/wins";
import Landing from "./screens/landing";
import Setting from "./screens/setting";
import Shop from "./screens/shop";
import Signup from "./screens/signup";
import Login from "./screens/login";
import Test from "./screens/test";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "#484644", // Font2 / Border
    background: "#F3EAE2", //Background / Front
    card: "#ECD8D0", //Widge
    text: "rgba(0, 0, 0, 0.7)", // Font2 / Border
    text_wh: "#FFFFFF", // Border
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Leky: require("./assets/fonts/LekyCalgriaPersonalUse-ywJRd.ttf"),
    Comfortaa: require("./assets/fonts/Comfortaa-Regular.ttf"),
    South: require("./assets/fonts/SouthEpic-Decorative.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Test">
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Goals" component={Goal} />
        <Stack.Screen name="Wins" component={Wins} />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: true }}
        />

        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
