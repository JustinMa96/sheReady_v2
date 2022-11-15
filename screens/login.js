import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import GateButton from "../components/common/gatebutton";
import Logo from "../components/login/logo";
import MyTextInput from "../components/common/mytextinput";
import { Button } from "react-native-paper";
import TextButton from "../components/common/textbutton";
import CreateAccountButton from "../components/login/createaccount";
import { auth } from "../firebaseConfig";

const styles = StyleSheet.create({
  floatCont: {
    alignItems: "flex-end",
  },
  hairline: {
    backgroundColor: "#572516",
    height: 1,
    width: 136,
    marginTop: 40,
  },

  circle: {
    backgroundColor: "#572516",
    height: 5,
    width: 5,
    borderRadius: 5 / 2,
    marginTop: 40,
    marginLeft: 15,
    marginRight: 15,
  },

  orbox: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
  },

  separator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default function Login({ navigation }) {
  const [userEmail, onChangeUserEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, paddingHorizontal: "10%" }}>
          <Logo />
          <MyTextInput
            inputTitle="Email Address *"
            placeholder="Your Email Address"
            onChangeText={onChangeUserEmail}
            value={userEmail}
          />
          <MyTextInput
            inputTitle="Password *"
            placeholder="Your Password"
            onChangeText={onChangePassword}
            value={password}
            secure
          />
          <View style={styles.floatCont}>
            <Button mode="text" onPress={() => navigation.navigate("Home")}>
              <Text
                style={{
                  color: "#484644",
                  fontFamily: "Comfortaa",
                  fontSize: 14,
                }}
              >
                Recovery Password
              </Text>
            </Button>
          </View>
          <GateButton txt="Sign In" path={"Home"} action={navigation} />
          <View style={styles.separator}>
            <View style={styles.hairline} />
            <View style={styles.circle} />
            <View style={styles.hairline} />
          </View>
          <View style={styles.orbox}>
            <Text
              style={{
                color: "#484644",
                fontFamily: "Comfortaa",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Or
            </Text>
          </View>

          <TextButton
            title="Continue with Google"
            customClick={() => navigation.navigate("Home")}
          />

          <TextButton
            title="Continue with Apple"
            customClick={() => navigation.navigate("Home")}
          />
          <CreateAccountButton
            title="Create New Account"
            customClick={() => navigation.navigate("Signup")}
          />
          <View style={{ marginTop: 40 }} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
