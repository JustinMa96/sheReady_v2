import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { SegmentedButtons } from "react-native-paper";

const IcnBtn = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Image style={styles.img} source={props.img} resizeMode="contain"/>
      <Text style={styles.text}>{props.title}</Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    marginHorizontal: "10%",
    marginVertical: 10,
  },
  text: {
    color: "#484644",
    fontFamily: "Comfortaa",
    fontSize: 20,
  },
  img: {
    width: "20%",
    height: "100%"
  }
});

export default IcnBtn;
