import * as React from "react";
import { Modal, Text, Button } from "react-native-paper";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { View } from "react-native";

const PopUp2 = ({ hide }) => {
  const [visible, setVisible] = React.useState(true);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = {
    padding: 20,
    width: 300,
    height: 400,
    backgroundColor: "#000000",
    opacity: 0.7,
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
    elevation: 5,
    alignSelf: "center",
  };

  const styles = StyleSheet.create({
    title: {
      color: "#F3EAE2",
      fontSize: 25,
      fontFamily: "Leky",
      textAlign: "center",
    },
    text: {
      color: "#F3EAE2",
      fontSize: 16,
      textAlign: "center",
      fontFamily: "Comfortaa",
      fontWeight: 500
    },
    text2: {
      fontWeight: "bold",
      color: "#F3EAE2",
      fontSize: 16,
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
      borderTopLeftRadius: 150,
      borderTopRightRadius: 150,
      backgroundColor: "#000000",
      elevation: 5,
      alignSelf: "center",
      justifyContent: "center",
      borderColor: "white",
      borderWidth: 1,
      width: 285,
      height: 385,
    }
  });

  return (
    <View>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <View style={styles.containerStyle2}>
          <Image
            style={{
              height: 100,
              width: 100,
              position: "relative",
              alignSelf: "center",
            }}
            source={require("../../assets/SC_SignUp/logo.png")}
          />
          <View>
            <View
              style={{
                width: "100%",
                alignSelf: "center",
                borderBottomColor: "white",
                borderBottomWidth: 1,
                paddingBottom: 10,
                marginHorizontal: 30,
                marginBottom: 20,
              }}
            >
              <Text style={styles.title}>You are on Fire</Text>
              <Text style={styles.text}>
              You have been successfully done the task!
              </Text>
            </View>


            <Text style={styles.text}>
              Accomplishment
            </Text>
            <Text style={styles.text2}>
              6 <Text style={styles.text}>of</Text> 6
            </Text>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
            <Button
              mode="outlined"
              style={styles.button}
              onPress={hideModal}
              textColor= "white"
            >
              Share
            </Button>
          <TouchableOpacity onPress={hideModal}>
            <Button
              mode="outlined"
              style={styles.button}
              onPress={hideModal}
              onPressOut={hide}
              textColor= "white"
            >
              Next
            </Button>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PopUp2;
