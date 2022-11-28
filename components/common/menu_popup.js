import * as React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { IconButton, Button } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
// import ProfWindow from "../common/profile.js";

const styles = StyleSheet.create({
  doorCont: {
    display: "flex",
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    // width: "60%",
    maxWidth: "90%",
    height: "100%",
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderWidth: 1,
    outlineColor: "rgba(0, 0, 0, 0.7)",
    outlineStyle: "solid",
    outlineWidth: 5,
    marginRight: 4,
  },
  doorOutline: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
    outlineColor: "#F0D7CE",
    outlineStyle: "solid",
    outlineWidth: 1,
  },
  profWrap: {
    width: "100%",
    height: 83,
    marginTop: 80,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profBox: {
    width: 82,
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  imgCont: {
    width: 60,
    height: 60,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  profTxt: {},
  profName: {
    color: "#F2E4D9",
    padding: 2,
    fontSize: 32,
    textAlign: "center",
    fontFamily: "South",
    fontWeight: 400,
  },
  grid: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    top: 0,
    marginTop: 60,
  },
  btn: {
    padding: 5,
    paddingLeft: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  btn_home: {
    padding: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#F2E4D9",
    padding: 2,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "400",
  },
  text_home: {
    color: "#F2E4D9",
    padding: 2,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "400",
  },
  doorhandleCont: {
    position: "absolute",
    top: "50%",
    width: 38,
    height: 43,
    marginLeft: "10%",
  },
  doorhandle: {
    width: "100%",
    height: "100%",
  },
});

export default function Menu_Popup({
  // onPressAction = {},
  imgSrc = require("../../assets/common/profile1.png"),
  close,
  small,
  action,
}) {
  const { colors } = useTheme();

  return (
    <View style={styles.doorCont}>
      <TouchableOpacity style={styles.doorOutline}>
        <IconButton
          onPress={close}
          onPressOut={small}
          icon="close"
          size={20}
          iconColor="white"
          style={{ left: 95 }}
        />
        <View style={styles.profWrap}>
          <View style={styles.profBox}>
            <TouchableOpacity
              style={styles.imgCont}
              // onPress={onPressAction}
            >
              <Image style={styles.img} source={imgSrc} resizeMode="contain" />
            </TouchableOpacity>
            <Text style={styles.profTxt}>Profile</Text>
          </View>

          <Text style={styles.profName}>JULISSA SONG</Text>
        </View>

        <View style={styles.grid}>
          <Button
            mode="text"
            onPress={() => action.navigate("Home")}
            style={styles.btn_home}
          >
            <Text style={styles.text_home}>Home</Text>
          </Button>
          <Button onPress={() => action.navigate("Wins")} style={styles.btn}>
            <Text style={styles.text}>Wins</Text>
          </Button>
          <Button onPress={() => action.navigate("Goals")} style={styles.btn}>
            <Text style={styles.text}>Goals</Text>
          </Button>
          <Button
            onPress={() => action.navigate("Community")}
            style={styles.btn}
          >
            <Text style={styles.text}>Community</Text>
          </Button>
          <Button onPress={() => action.navigate("Shop")} style={styles.btn}>
            <Text style={styles.text}>Shop Merch</Text>
          </Button>
          <Button onPress={() => action.navigate("Setting")} style={styles.btn}>
            <Text style={styles.text}>Settings</Text>
          </Button>
        </View>

        <TouchableOpacity style={styles.doorhandleCont}>
          <Image
            style={styles.doorhandle}
            source={require("../../assets/common/doorhandle.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}
