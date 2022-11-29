import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import { db } from "../../firebaseConfig";
import { useTheme } from "@react-navigation/native";
import { Button, IconButton, Checkbox } from "react-native-paper";

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

export default function TaskCard({ show, changeCard }) {
  const { colors } = useTheme();
  const date = `${month} ${day}, ${year}  ${weekday}`;
  const [firstUse, setFirstUse] = React.useState(true);
  const changeCard = () => {
    setFirstUse(!firstUse);
  };
  const [checked, setChecked] = React.useState(false);
  return (
    <View
      style={[
        styles.cardcont,
        {
          backgroundColor: colors.card,
        },
      ]}
    >
      <Text style={styles.date}>{date}</Text>
      {firstUse === true && (
        <View>
          <View style={styles.bgcont}>
            <Image
              style={styles.bgImg}
              source={require("../../assets/Home/taskcardgirl.png")}
            />
          </View>

          <View style={{ alignContent: "center", padding: "20%", zIndex: 2 }}>
            <Text style={{ textAlign: "center", padding: 0 }}>
              No task yet.
            </Text>
            <Text>Tap the “+” below to get started.</Text>
            <Button onPress={show}>
              <Image
                style={styles.circle}
                source={require("../../assets/Home/add.png")}
              />
            </Button>
          </View>
        </View>
      )}
      {firstUse === false && (
        <View style={{ paddingTop: 20 }}>
          <View style={styles.selectline}>
            <IconButton icon="circle-small" iconColor="#572516" size={20} />
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
            <IconButton icon="circle-small" iconColor="#572516" size={20} />
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
            <IconButton icon="circle-small" iconColor="#572516" size={20} />
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
  );
}

const styles = StyleSheet.create({
  cardcont: {
    // inset rgb(0 0 0 / 20%) 0px 5px 3px
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: -4 },
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    width: "100%",
    height: 300,
    alignItems: "center",
  },

  bgcont: {
    width: "30%",
    height: "100%",
    zIndex: 1,
    position: "absolute",
    top: 0,
    right: 0,
  },
  bgImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
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
