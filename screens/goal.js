import * as React from "react";
import { Wrapper } from "../styles/globals.js";
import { Modal, Portal, Provider } from "react-native-paper";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Button, IconButton } from "react-native-paper";
import GoalView from "../components/goals/goalview.js";
("react-native");
import { useTheme } from "@react-navigation/native";

import TaskList from "../components/goals/taskList.js";
import PopUp1 from "../components/goals/popup_1.js";
import ProfWindow from "../components/common/prof_window";
import Footer_Menu from "../components/common/footer_menu.js";
import AddGoal from "../components/goals/addgoal.js";
import AddGoalPopup from "../components/goals/addgoalpop.js";
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

  grid: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },

  btn: {
    padding: 5,
    width: "20%",
    justifyContent: "center",
  },

  icon: {
    padding: "50%",
    resizeMode: "contain",
  },

  text: {
    color: "#572516",
    padding: 2,
    fontSize: "80%",
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
  },

  texton: {
    color: "#F39770",
    padding: 2,
    fontSize: "80%",
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
  },

  scroll: {
    width: "100%",
    flexDirection: "row",
  },

  taskcont: {
    height: "100vw",
  },
});

export default function Goal({ navigation }) {
  React.useEffect(() => {
    const getUser = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user.uid);
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      const docs = docSnap.data();
      console.log(docs.name);
    };

    getUser();
  }, []);

  const { colors } = useTheme();
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [addDone, setAddDone] = React.useState(false);
  const onAddDone = () => setAddDone(true);
  const [popVisible, setPopVisible] = React.useState(false);
  const showPop = () => setPopVisible(true);
  const hidePop = () => setPopVisible(false);
  const containerStyle = {
    flex: 1,
    width: "80%",
    height: "80%",
    margin: "10%",
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Provider>
        <Portal>
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <ProfWindow nav={navigation} />
            <View
              style={{
                width: "100%",
                height: "15%",
                top: 40,
              }}
            >
              <Text
                style={{
                  fontFamily: "Leky",
                  fontSize: 20,
                  top: 40,
                  color: "#484644",
                  textAlign: "center",
                }}
              >
                Goals
              </Text>
            </View>
            <View style={{ width: "100%", height: "22%" }}>
              <ScrollView horizontal style={styles.scroll}>
                <GoalView />
                <AddGoal action={showModal} />
                {/* {addDone === true && <GoalView number={1} />}
                <AddView action={showModal} /> */}
              </ScrollView>
            </View>
            <View
              style={{
                width: "100%",
                height: "8%",
                top: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "Comfortaa",
                  fontSize: 20,
                  fontWeight: 600,
                  top: 10,
                  color: "#484644",
                  textAlign: "center",
                }}
              >
                ONGOING TASK
              </Text>
            </View>
            <ScrollView vertical>
              <View style={styles.taskcont}>
                <Button onPress={showPop} style={styles.taskbtn}>
                  <TaskList
                    tasknum={"Task1"}
                    task={"Get the mentor’s advice - design ideas"}
                    due={"Due: Nov,28,2022"}
                    progress={"3/6"}
                    progressNum={0.5}
                  />
                </Button>
                <Button onPress={showPop} style={styles.taskbtn}>
                  <TaskList
                    tasknum={"Task2"}
                    task={"Checking progress with mentor"}
                    due={"Due: Nov,30,2022"}
                    progress={"8/10"}
                    progressNum={0.8}
                  />
                </Button>
              </View>
            </ScrollView>
            <View style={styles.grid}>
              <Footer_Menu action={navigation}></Footer_Menu>
            </View>

            <Modal
              visible={popVisible}
              onDismiss={hidePop}
              contentContainerStyle={containerStyle}
            >
              <PopUp1 action={hidePop} />
            </Modal>

            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}
            >
              <IconButton
                onPress={hideModal}
                icon="close-outline"
                iconColor={colors.text}
                style={{ position: "absolute", right: 0, top: "20%" }}
              ></IconButton>
              <AddGoalPopup hide={hideModal} />
            </Modal>
          </View>
        </Portal>
      </Provider>
    </SafeAreaView>
  );
}
