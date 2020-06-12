import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import BoothsScreen from "../screens/BoothsScreen";
import AdminScreen from "../screens/AdminScreen";
import VotingScreen from "../screens/VotingScreen";

import VoteCastScreen from "../screens/VoteCastScreen";

import { PRIMARY_COLOR, BLACK_COLOR } from "../constants";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: BLACK_COLOR,
  },

  headerTintColor: PRIMARY_COLOR,
};

const MainNavigator = createStackNavigator(
  {
    Home: WelcomeScreen,
    "Enter Voting Booth": BoothsScreen,
    "Admin Panel": AdminScreen,
    Voting: VotingScreen,
    "Vote Cast": VoteCastScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

export default createAppContainer(MainNavigator);
