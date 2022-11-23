import * as React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ImageBackground
} from "react-native";
import { Button, IconButton, Checkbox } from "react-native-paper";
("react-native");
import { Modal, Portal, Provider } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

const styles = StyleSheet.create({
  grid: {
    backgroundColor: "#7A7571",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 63,
    position: "absolute",
    bottom: 0,
    overflow: "visible",
  },

  btn: {
    padding: 5,
    width: "20%",
    justifyContent: "center",
  },

  btn_home: {
    backgroundColor: "#7A7571",
    overflow: "visible",
    borderRadius: "50%",
    width: 70,
    height: 70,
    overflow: "visible",
    marginTop: -25,
  },

  icon: {
    padding: 16,
    resizeMode: "contain",
  },

  text: {
    padding: 2,
    fontSize: "80%",
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
          <Button
            onPress={() => action.navigate("Community")}
            style={styles.btn}
          >
            <View>
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
          </Button>

          <Button
            onPress={() => action.navigate("Goals")}
            style={styles.btn}
          >
            <View>
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
          </Button>

          <Button
            mode="text"
            onPress={() => action.navigate("Home")}
            style={[styles.btn, styles.btn_home]}
          >
            <View>
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
          </Button>

          <Button
            onPress={() => action.navigate("Wins")}
            style={styles.btn}
          >
            <View>
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
          </Button>

          <Button
            onPress={() => action.navigate("Setting")}
            style={styles.btn}
          >
            <View>
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
          </Button>
        </View>
      </Portal>
    </Provider>
  );
}
