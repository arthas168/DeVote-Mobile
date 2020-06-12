import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import { Camera } from "expo-camera";
import { WHITE_COLOR, BLACK_COLOR, PRIMARY_COLOR } from "../constants";

const BoothsScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [takingPhoto, setTakingPhoto] = useState(false);

  let camera: Camera | null;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const snap = async () => {
    if (camera) {
      camera._onCameraReady();

      const photo = await camera.takePictureAsync();
      console.log(photo);
    }
  };

  // TODO: Maybe add a ternary below?
  if (!takingPhoto) {
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
          <Button
            color={PRIMARY_COLOR}
            title="Take photo"
            onPress={() => {
              if (!hasPermission) {
                Alert.alert(
                  `An error occurred.`,
                  "App must be granted camera access in order to proceed with voting.",
                  [{ text: "OK", style: "default" }]
                );
              } else {
                setTakingPhoto(true);
              }
            }}
          />
        </View>
        <View style={styles.photoUploader}>
          <Text style={{ ...styles.baseText, ...styles.customText }}>
            Selfie
          </Text>
          <Button color={PRIMARY_COLOR} title="Take photo" onPress={() => {}} />
        </View>
      </View>
    );
  } else {
    return (
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={(ref) => {
          camera = ref;
        }}
      />
    );
  }
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
    fontSize: 16,
  },
});

export default BoothsScreen;
