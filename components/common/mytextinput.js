import React from "react";
import {
  View,
  TextInput,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const MyTextInput = (props) => {
  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      <Text
        style={{
          color: "#484644",
          fontFamily: "Comfortaa",
          fontSize: 18,
          fontWeight: "regular",
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        {props.inputTitle}
      </Text>

      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="rgba(72, 70, 68, 0.7)"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        autoComplete={"new-password"}
        autoFocus={false}
        style={{
          fontFamily: "Comfortaa",
          fontSize: 16,
          color: "#484644",
          borderBottomWidth: 1,
          borderBottomColor: "#484644",
        }}
        blurOnSubmit={false}
        value={props.value}
        secureTextEntry={props.secure}
      />
    </View>
  );
};

export default MyTextInput;
