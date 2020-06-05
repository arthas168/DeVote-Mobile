import React from "react";
import { View, StyleSheet } from "react-native";
import WelcomeScreen from "./components/WelcomeScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
