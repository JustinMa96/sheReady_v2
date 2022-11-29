import { StyleSheet, Text, View, Image } from "react-native";
import { ProgressBar, MD3Colors } from "react-native-paper";
import * as React from "react";

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 40,
    marginTop: 20
  },

  container: {
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    elevation: 5,
    width: "100%",
    height: 120,
    backgroundColor: "#ECD8D0",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 0
  },

  userCont: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: -10
  },

  userCont2: {
    flexDirection: "column",
  },

  img: {
    width: 45,
    height: 45,
    resizeMode: "scale",
    marginRight: 10,
    marginTop: 10,
    borderRadius: 100
  },

  title: {
    backgroundColor: "#484644",
    position: "absolute",
    borderRadius: 80,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 150,
    height: 30,
    zIndex: 10,
    textAlign: "center",
    padding: 5,
    left: 30,
  },

  userName: {
    color: "#484644",
    fontSize: 16,
    fontWeight: "600",
    flexWrap: "wrap",
    alignSelf: "flex-start",
    fontFamily: "Leky",
  },

  date: {
    color: "#484644",
    fontSize: 13,
    fontWeight: "500",
    left: 0,
    alignSelf: "flex-start",
    fontFamily: "Comfortaa",
  },

  wins: {
    fontFamily: "Comfortaa",
    fontSize: 17
  }

});

export default function WinsCard(props) {
  return (
    <View style={styles.list}>
      <View style={styles.container}>
      <View style={styles.userCont}>
        <Image style={styles.img} source={props.img}/>
        <View style={styles.userCont2}>
          <Text style={styles.userName}>{props.userName}</Text>
          <Text style={styles.date}>{props.date}</Text>
        </View>
      </View>
        <View>
          <Text style={styles.wins}>{props.wins}</Text>
        </View>
      </View>
    </View>
  );
}

//  -- when you import, use below template
{/* <WinsCard
userName={"Julissa Song"}
date={"Nov, 28, 2022"}
progress={"3/6"}
wins={"Get the mentor's advice for 6 days in a row!"}
img={require("../assets/SC_Settings/editprofie.png")}
/> */}
