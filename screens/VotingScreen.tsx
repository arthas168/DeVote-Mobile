import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WHITE_COLOR, BLACK_COLOR } from "../constants";

const BoothsScreen = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  baseText: {
    color: WHITE_COLOR,
  },
  container: {
    display: "flex",
    backgroundColor: BLACK_COLOR,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BoothsScreen;
