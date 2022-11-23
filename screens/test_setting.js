import React from "react";
import { Text, View, SafeAreaView, Button, Image } from "react-native";
import { Modal, SegmentedButtons } from "react-native-paper";
import { StyleSheet } from "react-native";
import IcnBtn from "../components/common/IcnBtn";
import { useState } from "react";



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

  const [value, setValue] = React.useState('')

  imgSrc = require("../assets/SignUp/logo.png")
  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Text style={styles.textL}>Setting</Text>
        <Image style={styles.img} source={imgSrc} resizeMode="contain" />
        <Text style={[styles.textL, {fontSize:16}]}>username</Text>
      </View>
      <View style={{}}>
        <IcnBtn
          title="Edit Profile"
          img={require("../assets/SignUp/logo.png")}
          onPress={("edit profile")}
        />
        
        <IcnBtn
          title="Notification"
          img={require("../assets/SignUp/logo.png")}
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
          img={require("../assets/SignUp/logo.png")}
          onPress={("edit profile")}
        />
      </View>
    </SafeAreaView>
  );
}
