import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import Home from "~/screens/Home";
import RegisterRoute from "~/screens/RegisterRoute";
import ListRoute from "~/screens/ListRoute";
import Maps from "~/screens/Maps";

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
        title: "Rotas",
        headerShown: true,
      }}
    />
    <Screen
      name="Maps"
      component={Maps}
      options={{
        title: "Navegação",
        headerShown: true,
      }}
    />
  </Navigator>
);
