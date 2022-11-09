import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const TextButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 25,
    borderColor: "#484644",
    borderWidth: 1.5,
    padding: 5,
    marginHorizontal: "10%",
    marginVertical: 10,
  },
  text: {
    color: "#484644",
    fontFamily: "Comfortaa",
    fontSize: 20,
  },
});

export default TextButton;
