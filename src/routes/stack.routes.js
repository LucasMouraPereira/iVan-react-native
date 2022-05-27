import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import Home from "~/screens/Home";
import RegisterRoute from "~/screens/RegisterRoute";
import ListRoute from "~/screens/ListRoute";

export const StackRoutes = () => (
  <Navigator>
    <Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="RegisterRoute"
      component={RegisterRoute}
      options={{
        title: "Nova Rota",
        headerShown: true,
      }}
    />
    <Screen
      name="ListRoute"
      component={ListRoute}
      options={{
        headerShown: true,
      }}
    />
  </Navigator>
);
