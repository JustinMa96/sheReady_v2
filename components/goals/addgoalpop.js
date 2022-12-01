import * as React from "react";
import { useState } from "react";
import {
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Switch,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Button, IconButton } from "react-native-paper";
("react-native");
import { useTheme } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
// import { ScrollView } from "react-native-web";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import { getAuth } from "firebase/auth";

const styles = StyleSheet.create({
  popupCont: {
    width: "100%",
    opacity: 1,
    shadowOpacity: 0.1,
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    height: "90%",
    maxHeight: 700,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },

  popuptitle: {
    color: "#484644",
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    marginTop: 20,
  },

  maintitlecont: {
    height: 90,
    width: "40%",
  },

  maintitle: {
    resizeMode: "contain",
    height: 70,
    width: "100%",
  },

  contentcont: {
    width: "80%",
  },

  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#484644",
    fontFamily: "Comfortaa",
    color: "#8E8E8E",
    marginTop: 10,
  },

  buttoncont: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  btn: {
    width: 120,
    height: 40,
    borderColor: "#484644",
    borderWidth: 1,
    borderRadius: 25,
    margin: 10,
    marginHorizontal: 30,
  },

  buttontxt: {
    color: "#484644",
    fontFamily: "Comfortaa",
    fontSize: 16,
    fontWeight: 600,
  },

  //Repeat section CSS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // switchcont: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  notiBox: {
    display: "flex",
    flexDirection: "row",
  },

  weekRepeatCont: {
    display: "flex",
    flexDirection: "row",
    flex: 0.7,
    marginTop: 15,
    marginBottom: 15,
  },

  btnNormal: {
    // backgroundColor: "#ffffff",
    backgroundColor: "#fff",
    height: 26,
    width: 26,
    borderRadius: 26 / 2,
    alignItems: "center",
    paddingTop: 4,
  },
  btnPress: {
    backgroundColor: "#484644",
    height: 26,
    width: 26,
    borderRadius: 26 / 2,
    alignItems: "center",
    paddingTop: 4,
  },
  txtNormal: {
    fontFamily: "Comfortaa",
    fontSize: 20,
  },
  txtPress: {
    fontFamily: "Comfortaa",
  },
  iconRepeat: {
    width: 28,
    // height: 28,
    // marginTop: 30,
  },
  repeatCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: 80,
    marginTop: 0,
  },
  repeatRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 10,
  },

  pickerCont: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 20,
    padding: 10,
  },

  picker: {
    color: "#484644",
    fontFamily: "Comfortaa",
    // marginTop: "1em",
    border: "none",
    justifyContent: "space-between",
  },

  picker_date: {
    overflow: "hidden",
    background: "pink",
  },

  step1_picker: {
    // border: "none",
    paddingBottom: 5,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#484644",
    backgroundColor: "transparent",
    color: "#484644",
    fontFamily: "Comfortaa",
    fontSize: 16,
    justifyContent: "flex-start",
  },

  step1_picker_enterGoal: {
    marginTop: -30,
  },

  existing_cont: {
    display: "flex",
    justifyContent: "flex-start",
    height: 100,
  },

  existing_item_box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: 200,
    padding: 0,
  },

  step1_pickerItem: {
    color: "#484644",
    fontFamily: "Comfortaa",
    justifyContent: "flex-start",
  },

  step1_pickerItem_item1: {
    // marginTop: -100,
    // display: "flex",
  },

  deadline_cont: {
    display: "flex",
  },

  step2_deadln_pickerItem: {
    width: 30,
  },

  step3_timeSet_picker: {
    backgroundColor: "transparent",
  },

  example: {
    color: "#484644",
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 5,
    marginHorizontal: 10,
  },

  exampleCont: {
    backgroundColor: "#ECD8D0",
    borderRadius: 15,
    marginVertical: 5,
    marginRight: 10,
  },

  scrollViewBox: {
    display: "flex",
    overflow: "scroll",
  },

  scrollView: {
    backgroundColor: "pink",
    // height: "100%",
    // width: "100%",
    // marginVertical: 100,
    display: "flex",
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});

export default function AddGoalPopup({ action }) {
  React.useEffect(() => {
    const getUser = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user.uid);
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      const docs = docSnap.data();
    };

    getUser();
  }, []);
  const { colors } = useTheme();
  const [currentJob, onCurrentJob] = React.useState();
  const [idealJob, onIdealJob] = React.useState();
  const [setpnum, setStepNum] = React.useState(1);
  const [selectedCategory, setSelectedCategory] =
    React.useState("Pick a category");
  const [task, onTask] = React.useState();
  const [repeat, onRepeat] = React.useState();
  const [Hour, setHour] = React.useState();
  const [Minute, setMinute] = React.useState();

  const onNext = () => {
    setStepNum(setpnum + 1);
  };

  const onBack = () => {
    setStepNum(setpnum - 1);
  };

  const onDone = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user.uid);
    await updateDoc(doc(db, "users", user.uid), {
      goals: [
        {
          goalName: goal,
          tasks: [
            {
              taskName: task,
              repeatTimes: repeat,
              deadline: date,
              notification: enabled,
              timesettingHour: Hour,
              timesettingMin: Minute,
              complected: false,
              complectTime: 0,
            },
          ],
        },
      ],
      uncomplectedTasks: [
        {
          taskName: task,
          repeat: repeat,
          complectTime: 0,
        },
      ],
    });
    action;
  };

  const [goal, onGoal] = React.useState();

  //Run week repeat buttons >>>>>>>>>>>>>>>>>>>>>>
  const [isPress, setIsPress] = React.useState(false);

  const handleButton = () => {
    setIsPress((current) => !current);
  };

  const touchProps = {
    activeOpacity: 2,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log("pressed"),
  };
  //Run notification switch button>>>>>>>>>>>>>>>>
  const [enabled, setEnabled] = useState(false);

  const toggleSwitch = () => {
    setEnabled((oldValue) => !oldValue);
  };
  const [date, setDate] = useState(new Date(1598051730000));
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const thumbColorOn = Platform.OS === "android" ? "#878787" : "#f3f3f3";
  const thumbColorOff = Platform.OS === "android" ? "#878787" : "#f3f3f3";
  const trackColorOn = Platform.OS === "android" ? "#000000" : "#878787";
  const trackColorOff = Platform.OS === "android" ? "#000000" : "#878787";

  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View
      style={[
        styles.popupCont,
        {
          shadowOffset: { width: 0, height: -4 },
          backgroundColor: colors.background,
        },
      ]}
    >
      <Text style={styles.popuptitle}>Create Goals</Text>

      <View style={styles.maintitlecont}>
        {setpnum === 0 && (
          <Image
            style={styles.maintitle}
            source={require("../../assets/common/create_goals/0_jobtitle.png")}
          />
        )}
        {setpnum === 1 && (
          <Image
            style={styles.maintitle}
            source={require("../../assets/common/create_goals/1_goalssetting.png")}
          />
        )}
        {setpnum === 2 && (
          <Image
            style={styles.maintitle}
            source={require("../../assets/common/create_goals/2_smalltasks.png")}
          />
        )}
        {setpnum === 3 && (
          <Image
            style={styles.maintitle}
            source={require("../../assets/common/create_goals/3_notificationsetting.png")}
          />
        )}
      </View>

      <View style={styles.contentcont}>
        <TouchableOpacity style={styles.scrollViewBox}>
          {/* <ScrollView style={styles.scrollView}> */}
          {setpnum === 0 && (
            <View>
              <Text
                style={{
                  color: "#484644",
                  fontFamily: "Comfortaa",
                  fontSize: 20,
                  marginTop: 15,
                }}
              >
                Your current job title
              </Text>
              <IconButton
                icon="magnify"
                iconColor={colors.text}
                style={{ position: "absolute", right: 0, bottom: 0 }}
              ></IconButton>
              <TextInput
                style={styles.input}
                onChangeText={onCurrentJob}
                value={currentJob}
              />
            </View>
          )}
          {setpnum === 0 && (
            <View>
              <Text
                style={{
                  color: "#484644",
                  fontFamily: "Comfortaa",
                  fontSize: 20,
                  marginTop: 15,
                }}
              >
                Your ideal job title
              </Text>
              <IconButton
                icon="magnify"
                iconColor={colors.text}
                style={{ position: "absolute", right: 0, bottom: 0 }}
              ></IconButton>
              <TextInput
                style={styles.input}
                onChangeText={onIdealJob}
                value={idealJob}
              />
            </View>
          )}

          {setpnum === 1 && (
            <View style={styles.pickerCont}>
              <View
                style={[styles.step1_picker, styles.step1_picker_enterGoal]}
              >
                <TextInput
                  style={{ fontSize: 20, fontFamily: "Comfortaa" }}
                  placeholder="Enter your goal"
                  placeholderTextColor="rgba(72, 70, 68, 0.7)"
                  onChangeText={onGoal}
                  value={goal}
                />
              </View>

              <View
                style={[
                  styles.scrollable,
                  { flexDirection: "row", flexWrap: "wrap" },
                ]}
              >
                <View style={styles.exampleCont}>
                  <Text style={styles.example}>Leadership Skills;</Text>
                </View>
                <View style={styles.exampleCont}>
                  <Text style={styles.example}>Communication Skills;</Text>
                </View>
                <View style={styles.exampleCont}>
                  <Text style={styles.example}>Time Management Skills;</Text>
                </View>
              </View>

              <Text
                style={[
                  styles.txtNormal,
                  { fontWeight: "bold", marginBottom: 5, marginTop: 20 },
                ]}
              >
                Pick Existing Goal
              </Text>
              <View style={[styles.existing_cont]}>
                <Picker
                  style={[styles.step1_picker, styles.existing_item_box]}
                  selectedValue={selectedCategory}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedCategory(itemValue)
                  }
                >
                  <Picker.Item
                    style={[
                      styles.step1_pickerItem,
                      styles.step1_pickerItem_item1,
                    ]}
                    label="Leadership skills"
                    value="Leader"
                  />
                  <Picker.Item
                    style={styles.step1_pickerItem}
                    label="Communication skills"
                    value="Communication"
                  />
                  <Picker.Item
                    style={styles.step1_pickerItem}
                    label="Time management skills"
                    value="Time"
                  />
                </Picker>
              </View>
            </View>
          )}

          {setpnum === 2 && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View>
                <Image
                  style={{ height: 25, width: 25, resizeMode: "contain" }}
                  source={require("../../assets/common/create_goals/icon_task.png")}
                />
              </View>
              <View style={{ flexDirection: "column", flex: 0.7 }}>
                <View>
                  <Text
                    style={{
                      color: "#484644",
                      fontFamily: "Comfortaa",
                      fontSize: 16,
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      Task
                    </Text>
                    <Text style={{ color: "#808080", fontSize: 20 }}>
                      ( required )
                      <Text
                        style={{
                          color: "red",
                          fontSize: 20,
                          paddingTop: -2,
                          position: "relative",
                          top: -3,
                        }}
                      >
                        *
                      </Text>
                    </Text>
                  </Text>
                  <View
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: 10,
                      marginTop: 10,
                      height: 60,
                    }}
                  >
                    <TextInput
                      style={[
                        styles.input,
                        {
                          borderWidth: 0,
                          width: 200,
                          marginTop: 0,
                          borderBottomWidth: 0,
                        },
                      ]}
                      onChangeText={onTask}
                      value={task}
                      multiline={true}
                      editable
                      maxLength={60}
                      numberOfLines={4}
                      // underlineColorAndroid='transparent'
                    />
                  </View>
                </View>
              </View>
            </View>
          )}

          {setpnum === 2 && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                height: 50,
                marginTop: 30,
                marginBottom: 30,
              }}
            >
              <View style={{ width: 25, resizeMode: "contain" }}>
                <Image
                  style={{ height: 25, width: 25, resizeMode: "contain" }}
                  source={require("../../assets/common/create_goals/icon_date.png")}
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  flex: 0.7,
                }}
              >
                <View style={[styles.deadline_cont, { height: 60 }]}>
                  <Text
                    style={{
                      color: "#484644",
                      fontFamily: "Comfortaa",
                      fontSize: 16,
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      Deadline
                    </Text>
                    <Text style={{ color: "#808080", fontSize: 20 }}>
                      ( required )
                    </Text>
                    <Text
                      style={{
                        color: "red",
                        fontSize: 20,
                        paddingTop: -2,
                        position: "relative",
                        top: -3,
                      }}
                    >
                      *
                    </Text>
                  </Text>
                  <DateTimePicker
                    value={date}
                    minimumDate={new Date()}
                    style={{ width: 150 }}
                    onChange={onChange}
                  />

                  <View
                    style={{
                      justifyContent: "space-between",
                      height: 30,
                      marginTop: 10,
                    }}
                  ></View>
                </View>
              </View>
            </View>
          )}

          {setpnum === 2 && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: 30,
                height: 30,
              }}
            >
              <Image
                style={{
                  height: 25,
                  width: 25,
                  resizeMode: "contain",
                  marginTop: -20,
                }}
                source={require("../../assets/common/create_goals/icon_repeat.png")}
              />
              <View
                style={[
                  styles.repeatCol,
                  {
                    flexDirection: "column",
                    flex: 0.7,
                  },
                ]}
              >
                <View style={styles.notiBox}>
                  <Text
                    style={{
                      // color: "#FFFFFF",
                      fontFamily: "Comfortaa",
                      fontSize: 16,
                    }}
                  >
                    <Text Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      Repeat
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: "#808080",
                      fontFamily: "Comfortaa",
                      fontSize: 20,
                    }}
                  >
                    ( required )
                    <Text
                      style={{
                        color: "red",
                        fontSize: 20,
                        paddingTop: -2,
                        position: "relative",
                        top: -3,
                      }}
                    >
                      *
                    </Text>
                  </Text>
                </View>

                {/* <View style={styles.repeatRow}>
                  <TouchableHighlight
                    style={styles.isPress ? styles.btnPress : styles.btnNormal}
                    {...touchProps}
                  >
                    <Text
                      style={
                        styles.isPress ? styles.txtPress : styles.txtNormal
                      }
                    >
                      S
                    </Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                    style={styles.isPress ? styles.btnPress : styles.btnNormal}
                    {...touchProps}
                  >
                    <Text
                      style={
                        styles.isPress ? styles.txtPress : styles.txtNormal
                      }
                    >
                      M
                    </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.isPress ? styles.btnPress : styles.btnNormal}
                    {...touchProps}
                  >
                    <Text
                      style={
                        styles.isPress ? styles.txtPress : styles.txtNormal
                      }
                    >
                      T
                    </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.isPress ? styles.btnPress : styles.btnNormal}
                    {...touchProps}
                  >
                    <Text
                      style={
                        styles.isPress ? styles.txtPress : styles.txtNormal
                      }
                    >
                      W
                    </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.isPress ? styles.btnPress : styles.btnNormal}
                    {...touchProps}
                  >
                    <Text
                      style={
                        styles.isPress ? styles.txtPress : styles.txtNormal
                      }
                    >
                      T
                    </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.isPress ? styles.btnPress : styles.btnNormal}
                    {...touchProps}
                  >
                    <Text
                      style={
                        styles.isPress ? styles.txtPress : styles.txtNormal
                      }
                    >
                      F
                    </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.isPress ? styles.btnPress : styles.btnNormal}
                    {...touchProps}
                  >
                    <Text
                      style={
                        styles.isPress ? styles.txtPress : styles.txtNormal
                      }
                    >
                      S
                    </Text>
                  </TouchableHighlight>
                </View> */}
                <View
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 10,
                    marginTop: 10,
                    height: 60,
                  }}
                >
                  <TextInput
                    style={[
                      styles.input,
                      {
                        borderWidth: 0,
                        width: 200,
                        marginTop: 0,
                        borderBottomWidth: 0,
                      },
                    ]}
                    onChangeText={onRepeat}
                    value={repeat}
                    editable
                    maxLength={3}
                    numberOfLines={1}
                    numeric
                    keyboardType={"numeric"}
                    // underlineColorAndroid='transparent'
                  />
                </View>
              </View>
            </View>
          )}

          {setpnum === 3 && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                // marginTop: "1.5em",
              }}
            >
              {/* <Switch
              trackColor={{ false: "#878787", true: "#F39770" }}
              // thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              thumbColor={ isEnabled ? 'yellow' : 'red'} //@ts-expect-error type activeThumbColor={'red'}
              // ios_backgroundColor="red"
              onValueChange={toggleSwitch}
              value={isEnabled}
            /> */}
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "70%",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "#484644",
                      fontFamily: "Comfortaa",
                      fontSize: 16,
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      Notification
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: "#808080",
                      fontFamily: "Comfortaa",
                      fontSize: 20,
                    }}
                  >
                    ( required
                    <Text
                      style={{
                        color: "red",
                        fontSize: 20,
                        position: "relative",
                        top: -3,
                      }}
                    >
                      *{" "}
                    </Text>
                    )
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    // marginTop: "1em",
                  }}
                >
                  <Switch
                    onValueChange={toggleSwitch}
                    value={enabled}
                    thumbColor={enabled ? thumbColorOn : thumbColorOff}
                    trackColor={{ false: trackColorOff, true: trackColorOn }}
                    ios_backgroundColor={trackColorOff}
                    style={{ marginRight: 5, margin: 10 }}
                  />
                  <Text
                    style={{
                      color: "#484644",
                      fontFamily: "Comfortaa",
                      fontSize: 16,
                      alignSelf: "center",
                      marginHorizontal: 5,
                    }}
                  >
                    {enabled ? "ON" : "OFF"}
                  </Text>
                </View>
              </View>
            </View>
          )}

          {setpnum === 3 && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                // marginTop: "1.5em",
              }}
            >
              <View style={{ flexDirection: "column", flex: 0.7 }}>
                <View>
                  <Text
                    style={{
                      color: "#484644",
                      fontFamily: "Comfortaa",
                      fontSize: 16,
                    }}
                  >
                    <Text Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      Time Setting
                    </Text>{" "}
                    <Text style={{ color: "#808080", fontSize: 20 }}>
                      ( optional )
                    </Text>
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      flex: 1,
                      // padding: "0.1em",
                    }}
                  >
                    <View style={{ flex: 0.45 }}>
                      <Picker
                        style={[
                          styles.picker,
                          {
                            backgroundColor: "transparent",
                            borderBottomColor: "#484644",
                            borderBottomWidth: 1,
                            borderStyle: "solid",
                            borderTopWidth: 0,
                            borderRightWidth: 0,
                            borderLeftWidth: 0,
                          },
                        ]}
                        selectedValue={Hour}
                        onValueChange={(itemValue, itemIndex) =>
                          setHour(itemValue)
                        }
                      >
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="HH"
                          value="0"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="05"
                          value="05"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="06"
                          value="06"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="07"
                          value="07"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="08"
                          value="08"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="09"
                          value="09"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="10"
                          value="10"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="11"
                          value="11"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="12"
                          value="12"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="13"
                          value="13"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="14"
                          value="14"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="15"
                          value="15"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="16"
                          value="16"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="17"
                          value="17"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="18"
                          value="18"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="19"
                          value="19"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="20"
                          value="20"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="21"
                          value="21"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="22"
                          value="22"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="23"
                          value="23"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="24"
                          value="24"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="01"
                          value="01"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="02"
                          value="02"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="03"
                          value="03"
                        />
                        <Picker.Item
                          style={styles.step3_timeSet_picker}
                          label="04"
                          value="04"
                        />
                      </Picker>
                    </View>

                    <View style={{ flex: 0.45 }}>
                      <Picker
                        style={[
                          styles.picker,
                          {
                            backgroundColor: "transparent",
                            borderBottomColor: "#484644",
                            borderBottomWidth: 1,
                            borderBottomStyle: "solid",
                            borderTopWidth: 0,
                            borderRightWidth: 0,
                            borderLeftWidth: 0,
                          },
                        ]}
                        selectedValue={Minute}
                        onValueChange={(itemValue, itemIndex) =>
                          setMinute(itemValue)
                        }
                      >
                        <Picker.Item label="MM" value="0" />
                        <Picker.Item label="00" value="00" />
                        <Picker.Item label="05" value="05" />
                        <Picker.Item label="10" value="10" />
                        <Picker.Item label="15" value="15" />
                        <Picker.Item label="20" value="20" />
                        <Picker.Item label="25" value="25" />
                        <Picker.Item label="30" value="30" />
                        <Picker.Item label="35" value="35" />
                        <Picker.Item label="40" value="40" />
                        <Picker.Item label="45" value="45" />
                        <Picker.Item label="50" value="50" />
                        <Picker.Item label="55" value="55" />
                      </Picker>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
          {/* </ScrollView> */}
        </TouchableOpacity>
      </View>

      <View style={styles.buttoncont}>
        {setpnum > 1 && (
          <Button style={styles.btn} onPress={onBack}>
            <Text style={styles.buttontxt}>Back</Text>
          </Button>
        )}

        {setpnum < 3 && (
          <Button style={styles.btn} onPress={onNext}>
            <Text style={styles.buttontxt}>Next</Text>
          </Button>
        )}

        {setpnum === 3 && (
          <Button style={styles.btn} onPress={onDone}>
            <Text style={styles.buttontxt}>Done</Text>
          </Button>
        )}
      </View>
      {/*
      <View style={styles.stepcont}></View>
      {setpnum === 0 && (
        <Image
          style={{
            position: "absolute",
            margin: 40,
            right: 0,
            bottom: 0,
            width: "30%",
            height: "40%",
            resizeMode: "contain",
          }}
          source={require("../../assets/icon.png")}
        />
      )} */}
    </View>
  );
}
