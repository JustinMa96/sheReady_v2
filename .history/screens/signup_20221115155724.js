import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc,setDoc } from "firebase/firestore";
import MyTextInput from "../components/common/mytextinput";
import GateButton from "../components/common/gatebutton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { auth,db } from "../firebaseConfig";

const styles = StyleSheet.create({
  headerTxt: {
    fontFamily: "Leky",
    color: "#484644",
    fontSize: 20,
  },
});

export default function Signup({ navigation }) {
  const [userName, onChangeUserName] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");

  const handleSignUp = async () => {
    try {
      if (!userName) {
        alert("Fill Username Please");
      } else if (!password) {
        alert("Fill Password Please");
      } else if (!email) {
        alert("Fill Email Address Please");
      } else if (!confirmPassword) {
        alert("Fill Confirm Password Please");
      } else if (password != confirmPassword) {
        alert("Password Did Not Match");
      } else {
        onChangeUserName("");
        onChangeEmail("");
        onChangePassword("");
        onChangeConfirmPassword("");
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          userName,
          password
        ).then(async () => {
          try {
            const docRef = await doc(
              setDoc(db, "users", auth.currentUser.uid),
              {
                uid: auth.currentUser.uid,
                displayName: userName,
                email: email,
              }
            );
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        });
        console.log(user);
        Alert.alert(
          "Register Account",
          "Registered Your Account Successfully",
          [
            {
              text: "Ok",
              onPress: () => navigation.navigate("Login"),
            },
          ]
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, padding: "10%" }}>
          <Text style={styles.headerTxt}>Create Your</Text>
          <Text style={styles.headerTxt}>SheReady</Text>
          <Text style={styles.headerTxt}>Account</Text>
          <MyTextInput
            inputTitle="Username *"
            placeholder="Your Username"
            onChangeText={onChangeUserName}
            value={userName}
          />
          <MyTextInput
            inputTitle="Email Address *"
            placeholder="Your Email Address"
            onChangeText={onChangeEmail}
            value={email}
          />
          <MyTextInput
            inputTitle="Password *"
            placeholder="Your Password"
            onChangeText={onChangePassword}
            value={password}
            secure
          />
          <MyTextInput
            inputTitle="Confirm Password *"
            placeholder="Confirm Your Password"
            onChangeText={onChangeConfirmPassword}
            value={confirmPassword}
            secure
          />
          <View style={{ height: 40 }}></View>
          <GateButton txt="Sign Up" action={handleSignUp} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}
