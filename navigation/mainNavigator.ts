import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import BoothsScreen from "../screens/BoothsScreen";
import { PRIMARY_COLOR, BLACK_COLOR } from "../constants";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: BLACK_COLOR,
  },

  headerTintColor: PRIMARY_COLOR,
};

const MainNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    "Enter Voting Booth": BoothsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

export default createAppContainer(MainNavigator);
