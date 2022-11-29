import React from "react";
import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import TextButton from "../components/common/textbutton";

const styles = StyleSheet.create({
  container: {
    background: "#efe1d5",
    height: "100%",
  },

  img1: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
  },

  imgCont: {
    height: "50%",
  },

  bottomCont: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
export default function Landing({ navigation }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imgCont}>
          <Image
            style={styles.img1}
            source={require("../assets/SC_Landing/SheReady.gif")}
          />
        </View>

        <View style={{ flex: 1, padding: "5%" }}>
          <Text
            style={{
              color: colors.text,
              fontFamily: "Leky",
              fontSize: 32,
              fontWeight: "bold",
            }}
          >
            SheReady
          </Text>
          <Text
            style={{
              color: colors.text,
              fontFamily: "Comfortaa",
              fontSize: 16,
            }}
          >
            You may not be where you want to be,
          </Text>
          <Text
            style={{
              color: colors.text,
              fontFamily: "Comfortaa",
              fontSize: 16,
            }}
          >
            but you’re inching forward
          </Text>
          <Text
            style={{
              color: colors.text,
              fontFamily: "Comfortaa",
              fontSize: 16,
            }}
          >
            with patient faith and that's what matters.
          </Text>
          <Text
            style={{
              color: colors.text,
              fontFamily: "Comfortaa",
              fontSize: 16,
            }}
          >
            and that's what matters.
          </Text>
        </View>

        <View style={styles.bottomCont}>
          <TextButton
            title="Get Started"
            customClick={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
