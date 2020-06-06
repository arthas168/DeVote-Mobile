import React from "react";
import { StyleSheet, Text } from "react-native";
import { WHITE_COLOR } from "../constants";

const BoothsScreen = () => {
  return <Text style={styles.baseText}>I am admin</Text>;
};

const styles = StyleSheet.create({
  baseText: {
    color: WHITE_COLOR,
  },
});

export default BoothsScreen;
