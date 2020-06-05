import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/voting.png")} />
      <Text style={styles.titleText}>Welcome to DeVote Mobile!</Text>
      <View style={styles.buttonContainer}>
        <Button color="#937DE2" title="Log In" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  titleText: {
    color: "#fcfcfc",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 30,
  },
  buttonContainer: {
    width: 100,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
});

export default WelcomeScreen;
