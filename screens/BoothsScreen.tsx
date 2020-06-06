import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { WHITE_COLOR, BLACK_COLOR, PRIMARY_COLOR } from "../constants";

const BoothsScreen = ({ navigation }: any) => {
  const [userInputPassword, setUserInputPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Enter password for voting event</Text>
      <View style={styles.inputAndButtonContainer}>
        <TextInput
          onChangeText={(text) => {
            if (text.length < 5) {
              setUserInputPassword(text);
            }
          }}
          value={userInputPassword}
          style={styles.input}
        />

        <Button
          color={PRIMARY_COLOR}
          title="Join"
          onPress={() => {
            navigation.navigate({
              routeName: "Voting",
            });
          }}
        />
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
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: 100,
  },
  input: {
    color: WHITE_COLOR,
    borderColor: WHITE_COLOR,
    padding: 10,
    borderBottomWidth: 1,
    width: 55,
    textAlign: "center",
  },
  inputAndButtonContainer: {
    display: "flex",
    flexDirection: "row",
    width: 160,
    justifyContent: "space-between",
  },
});

export default BoothsScreen;
