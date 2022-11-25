import React from "react";
import { Text, View, SafeAreaView, Button, Image } from "react-native";
import { Modal, SegmentedButtons } from "react-native-paper";
import { StyleSheet } from "react-native";
import IcnBtn from "../components/common/IcnBtn";
import { useState } from "react";
import SettingPop from "../components/setting/setting";
import { TouchableOpacity } from "react-native-web";


const styles = StyleSheet.create({
    top: {
      justifyContent: "center",
    },

    textL: {
      fontFamily: "Leky",
      fontSize: 20,
      textAlign: "center"
    },

    img: {
      width: "100%",
      height: "30%",
    },

    group: {
      height: 40,
      margin: 10,
      marginBottom: 20,
      alignSelf: "center"
    }
  })


export default function Test() {

  const containerStyle = {
    width: "100%",
    height: "100%",
  }

  const [value, setValue] = React.useState('')
  
  const [ showSetting, setShowSetting ] = React.useState(false);
  const showModal = () => {
    setShowSetting(true);
  };
  const hideModal = () => {
    setShowSetting(false);
  };

  const userImg = require("../assets/common/profile1.png")
  return (
    <SafeAreaView>

      <View style={styles.top}>
        <Text style={styles.textL}>Setting</Text>
        <Image style={styles.img} source={userImg} resizeMode="contain" />
        <Text style={[styles.textL, {fontSize:16}]}>username</Text>
      </View>
      <View style={{}}>
        <IcnBtn
          title="Edit Profile"
          img={require("../assets/SC_Settings/editprofie.png")}
          onPress={showModal}
        /> 
        <IcnBtn
          title="Notification"
          img={require("../assets/SC_Settings/notification.png")}
          onPress={("edit profile")}
        />

        <View style={{ borderBottomColor: "#808080", borderBottomWidth: 1, width: "85%", alignSelf: "center", }}>
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: 'on',
                label: 'On'
              },
              {
                value: 'off',
                label: 'Off'
              }
            ]}
            style={styles.group}
          />
         </View>

         <IcnBtn
          title="Log Out"
          img={require("../assets/SC_Settings/signout.png")}
          onPress={("edit profile")}
        />
        <Modal
          visible={showSetting}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
            {showSetting? <SettingPop action={hideModal} source={userImg} />: null}
        </Modal> 
      </View>
    </SafeAreaView>
  );
}
