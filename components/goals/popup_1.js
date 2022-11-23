import * as React from "react";
import {
  Modal,
  Text,
  Button,
} from "react-native-paper";
import { StyleSheet, TouchableOpacity, Image} from "react-native";
import { View } from "react-native";
import { Checkbox } from "react-native-paper";
import PopUp2 from "./popup_2";



const PopUp1 = ({ action }) => {
  const [visible, setVisible] = React.useState(true);
  const hideModal = () => setVisible(false);

  const [pop2Visible, setPop2Visible] = React.useState(false);
  const showPop2 = () => setPop2Visible(true);

  const hidePop = () => {
    action;
  };

  const [count, setCount] = React.useState(0);

  function adjustCount(amount) {
    setCount(currentCount => {
      return currentCount + amount
    })
  }

  const containerStyle = {
    padding: 20,
    width: 330,
    height: 500,
    backgroundColor: "#000000",
    opacity: 0.7,
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
    elevation: 5,
    alignSelf: "center",
  };

  const containerPop2Style = {

  };

  const styles = StyleSheet.create({
    title: {
      color: "#F3EAE2",
      fontSize: 24,
      fontFamily: "Leky",
      textAlign: "center",
    },
    text: {
      color: "#F3EAE2",
      fontSize: 16,
      paddingBottom: 0,
      textAlign: "center",
      fontFamily: "Comfortaa",
    },

    textL: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#F3EAE2",
      textAlign: "center",
      fontFamily: "Comfortaa",
    },

    button: {
      alignSelf: "center",
      borderColor: "#FFFFFF",
      height: 40,
      paddingHorizontal: 10,
      paddingVertical:0,
    },

    containerStyle2: {
      backgroundColor: "#000000",
      borderTopLeftRadius: 180,
      borderTopRightRadius: 180,
      elevation: 5,
      alignSelf: "center",
      justifyContent: "center",
      borderColor: "white",
      borderWidth: 1,
      width: 315,
      height: 485,
    },

    bottomLine: {
      alignSelf: "center",
      borderBottomColor: "white",
      borderBottomWidth: 1,
      paddingHorizontal: 20,
      paddingBottom: 20
    }


  });

  return (
    <View>
      <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
        <View style={styles.containerStyle2} >
          <Text style={styles.title}>Task</Text>
          <View style={styles.bottomLine}>
          <Text style={[styles.text, {marginBottom: 10}]}> Get the mentor's advice </Text>
          <Text style={styles.text}> Due: Nov, 28, 2022</Text>
          </View>

          <View
            style={{
              width: "100%"
            }}
          >
            <View style={[styles.bottomLine, {paddingBottom: 30, paddingTop: 30}]}>
              <Text style={styles.textL}>Have you Finish</Text>
              <Text style={styles.textL}>your task for</Text>
              <Text style={styles.textL}>today?</Text>
            </View>

            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
                alignContent: "center",
              }}
            >

          <View style={{flexDirection: "row", justifyContent: "space-around", alignContent: "center", marginVertical: 30, marginHorizontal: 60}}>
            <TouchableOpacity onPress={()=>adjustCount(-1)}>
               <Image
                source={require("../../assets/Goal/minus.png")}
                style={{width: 30, height: 30, }}
              />
            </TouchableOpacity>

                <Text style={styles.textL}>
                {count}
                <Text style={styles.text}> of</Text> 6
                </Text>

            <TouchableOpacity onPress={()=>adjustCount(1)}>
               <Image
                source={require("../../assets/Goal/plus.png")}
                style={{width: 30, height: 30, }}
              />
            </TouchableOpacity>
          </View>

            </View>
          </View>
        <TouchableOpacity onPress={showPop2} onPressOut={hideModal}>
          <Button
            mode="outlined"
            style={styles.button}
            onPressOut={hideModal}
            textColor="white"
            // onPress={showPop2}
          > Done
          </Button>
        </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          visible={pop2Visible}
          onDismiss={hideModal}
          contentContainerStyle={containerPop2Style}
        >
          { pop2Visible? <PopUp2 action={()=>setPop2Visible(false)} /> : null }

      </Modal>

    </View>
  );
};

export default PopUp1;
