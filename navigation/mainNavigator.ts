import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import BoothsScreen from "../screens/BoothsScreen";

const MainNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Booths: BoothsScreen,
});

export default createAppContainer(MainNavigator);
