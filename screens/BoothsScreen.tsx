import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { WHITE_COLOR } from "../constants";

const BoothsScreen = () => {
  return <Text style={styles.baseText}>I am booth</Text>;
};

const styles = StyleSheet.create({
  baseText: {
    color: WHITE_COLOR,
  },
});

export default BoothsScreen;
