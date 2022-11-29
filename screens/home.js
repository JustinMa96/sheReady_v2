import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import Button_Gate_Img from "../components/home/button_gate_img";
import TaskCard from "../components/home/taskcard";
import IconBtn_Wins from "../components/home/iconbtn_wins";
import IconBtn_Goals from "../components/home/iconbtn_goals";
import Footer_Menu from "../components/common/footer_menu";
import Prof_Window from "../components/common/prof_window.js";
import { Modal, Portal, Provider } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import { Button, IconButton, Checkbox } from "react-native-paper";
import TaskPopup from "../components/home/taskPop";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { getAuth } from "firebase/auth";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  txt: {
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: 400,
    fontSize: 20,
    marginBottom: 20,
    color: "#484644",
  },
});

export default function Home({ navigation }) {
  React.useEffect(() => {
    const getUser = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user.uid);
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      const docs = docSnap.data();
      console.log(docs.name);
      setFirstUse(docs.firstuse);
    };

    getUser();
  }, []);
  const { colors } = useTheme();
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [checked, setChecked] = React.useState(false);
  const [firstUse, setFirstUse] = React.useState(true);
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const changeCard = () => {
    hideModal();
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <Provider>
        <Portal>
          <Prof_Window nav={navigation} />
          <View style={{ marginTop: 50 }}>
            <Button_Gate_Img />
          </View>
          <View>
            <Text style={styles.txt}>Task of the Day</Text>
            <TaskCard show={showModal} />
          </View>
          <View style={{ flexDirection: "row", marginTop: 30, left: "7.5%" }}>
            <IconBtn_Goals action={navigation} />
            <IconBtn_Wins action={navigation} />
          </View>
          <Footer_Menu action={navigation} />
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
            style={{
              position: "absolute",
              // backgroundColor: "pink",
              top: 0,
              height: "100%",
              margin: 0,
              marginTop: 0,
            }}
          >
            <IconButton
              onPress={hideModal}
              icon="close-outline"
              iconColor={colors.text}
              style={{ position: "absolute", right: 0, top: "10%" }}
            ></IconButton>
            <TaskPopup
              action={changeCard}
              style={{
                position: "absolute",
                bottom: 0,
              }}
            />
          </Modal>
        </Portal>
      </Provider>
    </SafeAreaView>
  );
}
