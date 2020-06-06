import React from "react";
import { View, StyleSheet } from "react-native";
import MainNavigator from "./navigation/mainNavigator";
import { BLACK_COLOR } from "./constants";

const App = () => {
  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
