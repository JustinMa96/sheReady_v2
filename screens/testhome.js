("react-native");
import { Wrapper } from "../styles/globals.js";
import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView
} from "react-native";
import { Button, IconButton, Checkbox } from "react-native-paper";
import { Modal, Portal, Provider } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import Prof_Window from "../components/common/prof_window.js";
import Button_Gate_Img from "../components/home/button_gate_img.js";
import IconBtn_Goals from "../components/home/iconbtn_goals.js";
import IconBtn_Wins from "../components/home/iconbtn_wins.js";
import TaskPopup from "../components/home/taskpopup";
import Footer_Menu from "../components/common/footer_menu.js";

const styles = StyleSheet.create({
  homecont: {
    height: "100vh",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  text: {
    color: "#572516",
    padding: 2,
    fontSize: "80%",
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
  },

  newscont: {
    height: "30%",
    width: "100%",
    // top: 30,
    marginBottom: 35,
  },

  news: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },

  day: {
    color: "#572516",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  cardcont: {
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: -4 },
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    // height: "35%",
    width: "90%",
    alignItems: "center",
  },

  bgImg: {
    zIndex: 1,
    // position: "absolute",
    // top: 0,
    // left: 0,
    flex: 1
  },

  date: {
    fontFamily: "Comfortaa",
  },

  circle: {
    resizeMode: "contain",
    height: 50,
    width: 50,
  },

  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  selectline: {
    flexDirection: "row",
    paddingVertical: 10,
  },

  selecttxt: {
    width: "70%",
    color: "#572516",
    fontFamily: "Comfortaa",
    flexWrap: "wrap",
    fontSize: 18,
  },
});

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

Date.prototype.getMonthName = function () {
  return months[this.getMonth()];
};
Date.prototype.getDayName = function () {
  return days[this.getDay()];
};

const now = new Date();

var weekday = now.getDayName();
var month = now.getMonthName();
var year = now.getFullYear();
var day = now.getDate();

export default function Testhome({ navigation }) {
  const { colors } = useTheme();
  const date = `${month} ${day}, ${year}  ${weekday}`;
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [checked, setChecked] = React.useState(false);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const [firstUse, setFirstUse] = React.useState(true);
  const changeCard = () => {
    setFirstUse(!firstUse);
  };

  return (
    <SafeAreaView>
      <Provider>
        <Portal>
          <Prof_Window nav={navigation}/>
          <View style={styles.homecont}>
            {/* Hazel */}
            <View style={styles.newscont}>
              <Button_Gate_Img action={navigation}></Button_Gate_Img>
            </View>

            <Text style={styles.day}>Task of The Day</Text>

            <View
              style={[styles.cardcont, {
                backgroundColor: colors.card,
              }]}
              >
              <Text style={styles.date}>{date}</Text>
              {firstUse === true && (
                <View>
                  <ImageBackground
                    resizeMode="cover"
                    style={styles.bgImg}
                    // source={require("../assets/SC_Home/girl.png")}
                  >
                  </ImageBackground>
                  <View
                    style={{ alignContent: "center", padding: "20%", zIndex: 2 }}
                  >
                    <Text style={{ textAlign: "center", padding: "0" }}>
                      No task yet.
                    </Text>
                    <Text>Tap the “+” below to get started.</Text>
                    <Button onPress={showModal}>
                      <Image
                        style={styles.circle}
                        source={require("../assets/common/add.png")}
                      />
                    </Button>
                  </View>
                </View>
              )}
              {firstUse === false && (
                <View style={{ paddingTop: 20 }}>
                  <View style={styles.selectline}>
                    <IconButton
                      icon="circle-small"
                      iconColor="#572516"
                      size={20}
                    />
                    <Text style={styles.selecttxt}>
                      Invite the mentor to participate in usability test
                    </Text>
                    <Checkbox
                      color="white"
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />
                  </View>
                  <View style={styles.selectline}>
                    <IconButton
                      icon="circle-small"
                      iconColor="#572516"
                      size={20}
                    />
                    <Text style={styles.selecttxt}>
                      Take up the facilitator role at team's workshops{" "}
                    </Text>
                    <Checkbox
                      color="white"
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />
                  </View>
                  <View style={styles.selectline}>
                    <IconButton
                      icon="circle-small"
                      iconColor="#572516"
                      size={20}
                    />
                    <Text style={styles.selecttxt}>
                      Get the mentor's advice on how to explain design ideas{" "}
                    </Text>
                    <Checkbox
                      color="white"
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />
                  </View>
                </View>
              )}
            </View>

            <View style={{
                flexDirection: "row",
                width: "90%",
                justifyContent: "space-between"
              }}>
              <IconBtn_Goals action={navigation} />
              <IconBtn_Wins action={navigation} />
            </View>

            <Footer_Menu action={navigation}></Footer_Menu>

            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}
            >
              <IconButton
                onPress={hideModal}
                icon="close-outline"
                iconColor={colors.text}
              ></IconButton>
              <TaskPopup action={changeCard} />
            </Modal>
          </View>
        </Portal>
      </Provider>
    </SafeAreaView>
  );
}
