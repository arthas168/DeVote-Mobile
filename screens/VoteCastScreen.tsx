import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WHITE_COLOR, BLACK_COLOR } from "../constants";

const VoteCastScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.titleText, ...styles.baseText }}>
        Vote successfully cast!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: BLACK_COLOR,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 30,
  },
  baseText: {
    color: WHITE_COLOR,
  },
});

export default VoteCastScreen;
