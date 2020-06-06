import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { WHITE_COLOR, BLACK_COLOR } from "../constants";

const BoothsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.baseText, ...styles.titleText }}>
        New York mayor elections 2020
      </Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity>
          <Text style={{ ...styles.baseText, ...styles.optionText }}>
            John Mayard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ ...styles.baseText, ...styles.optionText }}>
            Allister Flake
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ ...styles.baseText, ...styles.optionText }}>
            Courtney Aldridge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ ...styles.baseText, ...styles.optionText }}>
            Brad Talmore
          </Text>
        </TouchableOpacity>
      </View>
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
  baseText: {
    color: WHITE_COLOR,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 30,
  },
  optionsContainer: {
    marginTop: 30,
  },
  optionText: {
    fontSize: 16,
    marginBottom: 30,
    padding: 20,
    borderWidth: 1,
    borderColor: WHITE_COLOR,
    textAlign: "center",
  },
});

export default BoothsScreen;
