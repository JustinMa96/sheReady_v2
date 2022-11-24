import React from "react";
import { Text, View, SafeAreaView, Button, StyleSheet } from "react-native";
import { Modal } from "react-native-paper";
import TaskPopup from "../components/home/taskPop";
import WinsCard from "../components/community/winsCard";

const styles = StyleSheet.create({
  textL: {
    fontFamily: "Leky",
    fontSize: 20,
    textAlign: "center"
  },

  text: {
    fontSize: 16,
    fontFamily: "Comfortaa",
    textAlign: "center",
    color: "#484644"
  }
})
export default function Test() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.textL}>Community</Text>
        <Text style={styles.text}>- Share your wins</Text>
        <View style={{height: "100%"}}>
          <WinsCard
            userName={"Julissa Song"}
            date={"Nov, 28, 2022"}
            progress={"3/6"}
            wins={"Get the mentor's advice for 6 days in a row!"}
            img={require("../assets/SC_Home/mv3.jpg")}   
          />
          <WinsCard
            userName={"Julissa Song"}
            date={"Nov, 28, 2022"}
            progress={"3/6"}
            wins={"Get the mentor's advice for 6 days in a row!"}
            img={require("../assets/SC_Home/mv3.jpg")}   
          />
        </View>
      </View>
    </SafeAreaView>
  );
}


{/* <WinsCard
userName={user.name}
date={wins.date}
wins={wins.list}
img={require("../assets/SC_Settings/editprofie.png")}   
/> */}