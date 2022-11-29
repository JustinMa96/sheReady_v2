import * as React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Pressable
} from "react-native";
import styled from "styled-components/native";
import { Button, IconButton, Checkbox } from "react-native-paper";
("react-native");
import { Modal, Portal, Provider } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

// const MyBgImg = styled.Image`
//   background-size: 10%;
//   font-size: 10px,
// `;

const styles = StyleSheet.create({
  grid: {
    backgroundColor: "#7A7571",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: 80,
    position: "absolute",
    bottom: 0,
    overflow: "visible",
    paddingLeft: 20,
    paddingRight: 20,
  },

  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  btn_home: {
    backgroundColor: "#7A7571",
    borderRadius: "50%",
    width: 70,
    height: 70,
    overflow: "visible",
    marginTop: -25,
  },

  innerBtnBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "10%",
    height: "auto",
    padding: 14,
    overflow: "visible",
  },

  text: {
    padding: 2,
    fontSize: 14,
    display: "flex",
    width: "100%",
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
  },

  text_home: {
    padding: 2,
    fontSize: "80%",
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
  },

});

export default function Footer_Menu({
  navigation,
  action,

}) {
  const { colors } = useTheme();

  return (
    <Provider>
      <Portal>
        <View
          style={styles.grid}>
          <Pressable
            onPress={() => action.navigate("Community")}
            style={styles.btn}
          >
            <View style={styles.innerBtnBox}>
              <Image
                style={[styles.icon, {
                  color: colors.text,
                }]}
                source={require("../../assets/common/footer/community.png")}
              />
              <Text
                style={[styles.text, {
                  color: colors.text_wh,
                }]}
                >Comm</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => action.navigate("Goals")}
            style={styles.btn}
          >
            <View style={styles.innerBtnBox}>
              <Image
                style={[styles.icon, {
                  color: colors.text,
                }]}
                source={require("../../assets/common/footer/goals.png")}
              />
              <Text
                style={[styles.text, {
                  color: colors.text_wh,
                }]}
                >Goals</Text>
            </View>
          </Pressable>

          <Pressable
            mode="text"
            onPress={() => action.navigate("Home")}
            style={[styles.btn, styles.btn_home]}
          >
            <View style={styles.innerBtnBox}>
              <Image
                style={[styles.icon, {
                  color: colors.text_home,
                }]}
                source={require("../../assets/common/footer/home.png")}
              />
              <Text
                style={[styles.text, {
                  color: colors.text_wh,
                }]}
                >Home</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => action.navigate("Wins")}
            style={styles.btn}
          >
            <View style={styles.innerBtnBox}>
              <Image
                style={[styles.icon, {
                  color: colors.text,
                }]}
                source={require("../../assets/common/footer/wins.png")}
              />
              <Text
                style={[styles.text, {
                  color: colors.text_wh,
                }]}
                >Wins</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => action.navigate("Setting")}
            style={styles.btn}
          >
            <View style={styles.innerBtnBox}>
              <Image
                style={[styles.icon, {
                  color: colors.text,
                }]}
                source={require("../../assets/common/footer/setting.png")}
              />
              <Text
                style={[styles.text, {
                  color: colors.text_wh,
                }]}
                >Setting</Text>
            </View>
          </Pressable>
        </View>
      </Portal>
    </Provider>
  );
}
