import * as React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Alert,
  Text,
  Image,
} from "react-native";
import { Button } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

const styles = StyleSheet.create({
  btnBox: {
    width: 110,
    height: 70,
    // margin: 10,
    borderRadius: 30,
    borderBottomRightRadius: 0,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  btn: {
    width: "100%",
    height: "100%",
    margin: 0
  },
  img: {
    resizeMode: "contain",
    width: 30,
    height: 30,
    marginTop: 5,
  },
  btnTxt: {
    lineHeight: "inherit",
    justifyContent: "center",
    fontSize: 12,
    fontFamily: "Comfortaa",
    position: "absolute",
    zIndex: -1,
    bottom: 10,
  },
});

export default function IconBtn_Goals({
  title = "Add Goals",
  btnUrl = "Goals",
  action,
}) {
  const { colors } = useTheme();

  return (
    <View
      style={[styles.btnBox, {
        backgroundColor: colors.card,
      }]}
    >
      <Button
        style={styles.btn}
        onPress={() => action.navigate(btnUrl)}
      >
        <Image
          style={styles.img}
          source={require("../../assets/SC_Home/btn_addgoal.png")}
        />
      </Button>
      <Text
        style={[styles.btnTxt, {
          color: colors.text,
        }]}
        >
        {title}
      </Text>
    </View>
  );
}
