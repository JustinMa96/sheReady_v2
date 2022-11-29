import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logoCont: {
    width: 100,
    height: 100,
    paddingHorizontal: "35%",
    marginTop: "15%",
  },

  logoImg: {
    flex: 1,
    resizeMode: "contain",
    width: 100,
    height: 100,
  },
});

export default function Logo() {
  return (
    <View style={styles.logoCont}>
      <Image
        style={styles.logoImg}
        source={require("../../assets/SC_SignUp/logo.png")}
      />
    </View>
  );
}
