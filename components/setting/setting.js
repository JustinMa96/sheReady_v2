import * as React from "react";
import {
  Modal,
  Text,
  Button,
} from "react-native-paper";
import { StyleSheet, TouchableOpacity, Image, SafeAreaView} from "react-native";
import { View } from "react-native";
import { Checkbox } from "react-native-paper";
import MyTextInput from "../common/mytextinput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";




export default function SettingPop({action}, props) {

  const [username, onChangeUsername] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [bio, onChangeBio] = React.useState("");


  const styles =StyleSheet.create ({
   view: {
    padding: 20,
    width: 330,
    height: 500,
    backgroundColor: "#F3EAE2",
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
    elevation: 5,
    alignSelf: "center", 
  },

  btn: {
      alignSelf: "center",
      borderColor: "#484644",
      height: 40,
      paddingHorizontal: 10,
      paddingVertical:0,
      marginTop: 10
    },
    img: {
      width: "100%",
      height: "15%",
    }, 

    textL: {
      fontFamily: "Leky", 
      fontSize: 20, 
      textAlign: "center"
    },

    btnTxt:{
      color: "#484644",
      fontFamily: "Comfortaa",
      fontSize: 16,
      fontWeight: 600,
    }


  })   

  // const [ visible, setVisible ] = React.useState();
  // const hideModal = setVisible(false);
  // const showModal = setVisible(true);


  return (
    <SafeAreaView>

      <View style={styles.view}>
        <Image style={styles.img} source={props.source} resizeMode="contain" />
        <Text style={[styles.textL, {fontSize:16}]}>username</Text>
        <KeyboardAwareScrollView>
          <View style={{width: "85%", alignSelf:"center"}}>
            
            <MyTextInput 
              inputTitle="Username"
              placeholder="  Enter your username"
              onChangeText={onChangeUsername}
              value={username}
              
            />
            <MyTextInput 
              inputTitle="Email"
              placeholder="  Enter your email"
              onChangeText={onChangeEmail}
              value={email}
            />
            <MyTextInput 
              inputTitle="Change Password"
              placeholder="  Enter your new password"
              onChangeText={onChangePassword}
              value={password}
              secure={true}
            />
            <MyTextInput 
              inputTitle="Bio"
              placeholder="  Enter your bio"
              onChangeText={onChangeBio}
              value={bio}
              multiline={true}
            />
          </View>

        <Button mode="outlined" style={styles.btn} labelStyle={styles.btnTxt} onPress={action}>Save</Button>
      </KeyboardAwareScrollView>
      </View>

    </SafeAreaView>
  );
};

// problem
// 2. image is not design to become changeable
// 3. popup background is grey (maybe fix it from setting page)
// 4. database!!!!! 