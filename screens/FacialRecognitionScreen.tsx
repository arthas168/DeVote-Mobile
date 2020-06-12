import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { WHITE_COLOR, BLACK_COLOR, PRIMARY_COLOR } from "../constants";

const BoothsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.baseText, ...styles.titleText }}>
        Please confirm your identity by taking a photo of the front of your ID
        card and a selfie after that, so we can compare the two photos.
      </Text>
      <View style={styles.photoUploader}>
        <Text style={{ ...styles.baseText, ...styles.customText }}>
          Frond of ID card
        </Text>
        <Button color={PRIMARY_COLOR} title="Take photo" onPress={() => {}} />
      </View>
      <View style={styles.photoUploader}>
        <Text style={{ ...styles.baseText, ...styles.customText }}>Selfie</Text>
        <Button color={PRIMARY_COLOR} title="Take photo" onPress={() => {}} />
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
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 60,
    textAlign: "center",
    marginHorizontal: 20,
  },
  baseText: {
    color: WHITE_COLOR,
  },
  photoUploader: {
    marginTop: 100,
    display: "flex",
    flexDirection: "row",
  },
  customText: {
    marginTop: 10,
  },
});

export default BoothsScreen;
