import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { PRIMARY_COLOR, WHITE_COLOR, BLACK_COLOR } from "../constants";

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/voting.png")} />
      <Text style={styles.titleText}>DeVote Mobile™</Text>
      <View style={styles.buttonContainer}>
        <Button
          color={PRIMARY_COLOR}
          title="Enter voting booth"
          onPress={() => {
            navigation.navigate({
              routeName: "Enter Voting Booth",
            });
          }}
        />
        <Button
          color={PRIMARY_COLOR}
          title="Enter as Admin"
          onPress={() => {
            navigation.navigate({
              routeName: "Admin Panel",
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
    alignItems: "center",
    flex: 1,
    backgroundColor: BLACK_COLOR,
    justifyContent: "center",
  },
  titleText: {
    color: WHITE_COLOR,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 80,
  },
  buttonContainer: {
    width: 200,
    height: 100,
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default WelcomeScreen;
