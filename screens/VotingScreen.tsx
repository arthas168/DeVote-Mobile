import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { WHITE_COLOR, BLACK_COLOR } from "../constants";

const BoothsScreen = ({ navigation }: any) => {
  const doubleCheckUserChoice = (chosenOption: string) => {
    return Alert.alert(
      `Voting for ${chosenOption}`,
      "Please double-check. Once you submit your vote, it cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Confirm",
          style: "default",
          onPress: () => {
            navigation.navigate({
              routeName: "Vote Cast",
            });
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.baseText, ...styles.titleText }}>
        New York mayor elections 2020
      </Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity>
          <Text
            style={{ ...styles.baseText, ...styles.optionText }}
            onPress={() => doubleCheckUserChoice("John Mayard")}
          >
            John Mayard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{ ...styles.baseText, ...styles.optionText }}
            onPress={() => doubleCheckUserChoice("Allister Flake")}
          >
            Allister Flake
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{ ...styles.baseText, ...styles.optionText }}
            onPress={() => doubleCheckUserChoice("Courtney Aldridge")}
          >
            Courtney Aldridge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{ ...styles.baseText, ...styles.optionText }}
            onPress={() => doubleCheckUserChoice("Brad Talmore")}
          >
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
