import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import Home from "~/screens/Home";
import RegisterRoute from "~/screens/RegisterRoute/index";

export const StackRoutes = () => (
  <Navigator>
    <Screen name="Home" component={Home} />
    <Screen name="RegisterRoute" component={RegisterRoute} />
  </Navigator>
);
