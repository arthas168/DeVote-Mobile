import React, { useEffect, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { StyleSheet, View, Text } from "react-native";
import { WHITE_COLOR, BLACK_COLOR } from "../constants";

interface AuthenticationConfigFrame {
  hasHardwareAsync: boolean;
  options: Array<Number>;
  isEnrolled: boolean;
}

const initialAuthenticationConfig: AuthenticationConfigFrame = {
  hasHardwareAsync: false,
  options: [],
  isEnrolled: false,
};

const VoteCastScreen = () => {
  const [authenticationConfig, setAuthenticationConfig] = useState(
    initialAuthenticationConfig
  );

  const loadAuthenticationData = async () => {
    const hasHardwareForLocalAuthentication = await LocalAuthentication.hasHardwareAsync();
    const optionsForAuthentication = await LocalAuthentication.supportedAuthenticationTypesAsync();
    const isAuthenticationEnrolled = await LocalAuthentication.isEnrolledAsync();

    setAuthenticationConfig({
      hasHardwareAsync: hasHardwareForLocalAuthentication,
      options: optionsForAuthentication,
      isEnrolled: isAuthenticationEnrolled,
    } as AuthenticationConfigFrame);
  };

  useEffect(() => {
    (async function getAuthenticationData() {
      await loadAuthenticationData();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.titleText, ...styles.baseText }}>
        {authenticationConfig.hasHardwareAsync
          ? "Please authenticate"
          : "Sorry, your hardware doesn not support local authentication (fingerprint or FaceID)"}
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
    fontSize: 18,
    marginTop: 30,
  },
  baseText: {
    color: WHITE_COLOR,
  },
});

export default VoteCastScreen;
