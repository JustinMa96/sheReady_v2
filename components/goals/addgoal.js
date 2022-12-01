import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  back: {
    flex: 1,
    width: 100,
    height: 160,
    backgroundColor: "#ECD8D0",
    borderRadius: 85,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  stroke: {
    flex: 1,
    width: 80,
    margin: 10,
    backgroundColor: "#ECD8D0",
    borderRadius: 85,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#484644",
    justifyContent: "center",
    alignItems: "center",
  },

  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "white",
    zIndex: 3,
  },

  txtcont: {
    width: 45,
    height: 60,
    zIndex: 3,
    flexDirection: "column",
    justifyContent: "center",
  },

  txt: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    color: "#484644",
  },
});

export default function AddGoal({ action }) {
  return (
    <TouchableOpacity onPress={action} style={styles.back}>
      <View style={styles.stroke}>
        <View style={styles.circle}></View>
        <View style={styles.txtcont}>
          <Text style={styles.txt}>Add Goal</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
