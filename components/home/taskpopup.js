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
} from "react-native";
import { Button, IconButton } from "react-native-paper";
("react-native");
import { useTheme } from "@react-navigation/native";
import { List } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

const styles = StyleSheet.create({
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
    height: "20%",
    width: "40%",
  },

  maintitle: {
    resizeMode: "contain",
    height: 100,
    width: 200,
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
    flexDirection: "row",
    marginTop: 50,
  },

  btn: {
    flex: 1,
    width: 120,
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#484644",
    borderRadius: 25,
    marginTop: 10,
    marginHorizontal: 30,
  },

  buttontxt: {
    color: "#484644",
    fontFamily: "Comfortaa",
    fontSize: 16,
    fontWeight: 600,
  },

  //Repeat section CSS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  switchcont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

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
    backgroundColor: "#ffffff",
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
    color: "#484644",
    fontFamily: "Comfortaa",
  },
  txtPress: {
    color: "#ffffff",
    fontFamily: "Comfortaa",
  },
  iconRepeat: {
    width: 28,
    height: 28,
    marginTop: 30,
  },
  repeatCol: {
    marginLeft: 15,
    display: "flex",
    flexDirection: "column",
  },
  repeatRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: "1em",
  },

  picker: {
    color: "#484644",
    fontFamily: "Comfortaa",
    marginTop: "1em",
    border: "none",
    justifyContent: "space-between",
  },

  step1_picker: {
    // border: "none",
    paddingBottom: 10,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#484644",
    backgroundColor: "transparent",
    color: "#484644",
    fontFamily: "Comfortaa",
    fontSize: 20,
  },

  step1_pickerItem: {
    color: "#484644",
    fontFamily: "Comfortaa",
  },

  step2_deadln_pickerItem: {
    width: 30,
  },

  step3_timeSet_picker: {
    backgroundColor: "transparent",
  },
});

export default function TaskPopup({ action }) {
  const { colors } = useTheme();
  const [currentJob, onCurrentJob] = React.useState();
  const [idealJob, onIdealJob] = React.useState();
  const [setpnum, setStepNum] = React.useState(0);
  const [selectedCategory, setSelectedCategory] =
    React.useState("Pick a category");
  const [task, onTask] = React.useState();
  const [Month, setMonth] = React.useState();
  const [Date, setDate] = React.useState();
  const [Year, setYear] = React.useState();
  const [Time, setTime] = React.useState();
  const [Hour, setHour] = React.useState();
  const [Minute, setMinute] = React.useState();

  const onNext = () => {
    setStepNum(setpnum + 1);
  };

  const onBack = () => {
    setStepNum(setpnum - 1);
  };

  //Run week repeat buttons >>>>>>>>>>>>>>>>>>>>>>
  const [isPress, setIsPress] = React.useState(false);

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

  const thumbColorOn = Platform.OS === "android" ? "#878787" : "#f3f3f3";
  const thumbColorOff = Platform.OS === "android" ? "#878787" : "#f3f3f3";
  const trackColorOn = Platform.OS === "android" ? "#000000" : "#878787";
  const trackColorOff = Platform.OS === "android" ? "#000000" : "#878787";

  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View
      style={{
        width: "100%",
        opacity: 1,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: -4 },
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
        backgroundColor: colors.background,
        height: "80%",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
      }}
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
            source={require("../../assets/SC_Settings/notification.png")}
          />
        )}
      </View>

      <View style={styles.contentcont}>
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
          <View style={styles.pickercont}>
            <Picker
              style={styles.step1_picker}
              selectedValue={selectedCategory}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCategory(itemValue)
              }
            >
              <Picker.Item
                style={styles.step1_pickerItem}
                label="Pick a category"
                value="0"
              />
              <Picker.Item
                style={styles.step1_pickerItem}
                label="Readership skills"
                value="Redear"
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
              <Picker.Item
                style={styles.step1_pickerItem}
                label="Add more.."
                value="Add"
              />
            </Picker>
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
                  <Text style={{ fontWeight: "bold" }}>Task</Text>{" "}
                  <Text style={{ color: "#000000", opacity: "70%"}}>
                    {" "}
                    (required)
                    <Text
                      style={{
                        color: "red",
                        fontSize: 12,
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
                    }}>
                  <TextInput
                    style={[styles.input, {
                      border: "none",
                      width: 200,
                      marginTop: 0,
                    }]}
                    onChangeText={onTask}
                    value={task}
                    multiline={true}
                    editable
                    maxLength={60}
                    numberOfLines={4}
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
              marginTop: "1.5em",
            }}
          >
            <View>
              <Image
                style={{ height: 25, width: 25, resizeMode: "contain" }}
                source={require("../../assets/common/create_goals/icon_date.png")}
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
                  <Text style={{ fontWeight: "bold" }}>Deadline</Text>{" "}
                  <Text style={{ color: "#000000", opacity: "70%" }}>(optional)</Text>
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                    padding: "0.1em",
                    paddingBottom: "0.5em"
                  }}
                >
                  <View style={{
                  }}>
                    <Picker
                      style={[styles.picker, {
                        backgroundColor: "ffffff",
                        borderRadius: 10,
                        width: "5.5rem",
                      }]}
                      selectedValue={Month}
                      onValueChange={(itemValue, itemIndex) =>
                        setMonth(itemValue)
                      }
                    >
                      <Picker.Item
                        style={styles.step2_deadln_pickerItem}
                        label="Month"
                        color="#484644"
                        value="0" />
                      <Picker.Item
                        style={styles.step2_deadln_pickerItem}
                        label="January"
                        value="1" />
                      <Picker.Item
                        style={styles.step2_deadln_pickerItem}
                        label="February"
                        value="2" />
                      <Picker.Item
                        style={styles.step2_deadln_pickerItem}
                        label="March"
                        value="3" />
                      <Picker.Item
                        style={styles.step2_deadln_pickerItem}
                        label="April"
                        value="4" />
                      <Picker.Item
                        style={styles.step2_deadln_pickerItem}
                        label="May"
                        value="5" />
                      <Picker.Item
                        style={styles.step2_deadln_pickerItem}
                        label="June"
                        value="6" />
                      <Picker.Item
                        style={styles.step2_deadln_pickerItem}
                        label="July"
                        value="7" />
                      <Picker.Item
                        style={styles.step2_deadln_pickerItem}
                        label="August"
                        value="8" />
                      <Picker.Item
                        style={styles.step2_deadln_pickerItem}
                        label="September"
                        value="9" />
                      <Picker.Item
                        style={styles.step2_deadln_pickerItem}
                        label="October"
                        value="10" />
                      <Picker.Item
                        style={styles.step2_deadln_pickerItem}
                        label="November"
                        value="11" />
                      <Picker.Item
                        style={styles.step2_deadln_pickerItem}
                        label="December"
                        value="12" />
                    </Picker>
                  </View>

                  <View
                    // style={{ flex: 0.3 }}
                    >
                    <Picker
                      style={[styles.picker, {
                        borderRadius: 10,
                        width: "2.5rem",
                      }]}
                      selectedValue={Date}
                      onValueChange={(itemValue, itemIndex) =>
                        setDate(itemValue)
                      }
                    >
                      <Picker.Item label="Date" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                      <Picker.Item label="5" value="5" />
                      <Picker.Item label="6" value="6" />
                      <Picker.Item label="7" value="7" />
                      <Picker.Item label="8" value="8" />
                      <Picker.Item label="9" value="9" />
                      <Picker.Item label="10" value="10" />
                      <Picker.Item label="11" value="11" />
                      <Picker.Item label="12" value="12" />
                      <Picker.Item label="13" value="13" />
                      <Picker.Item label="14" value="14" />
                      <Picker.Item label="15" value="15" />
                      <Picker.Item label="16" value="16" />
                      <Picker.Item label="17" value="17" />
                      <Picker.Item label="18" value="18" />
                      <Picker.Item label="19" value="19" />
                      <Picker.Item label="20" value="20" />
                      <Picker.Item label="21" value="21" />
                      <Picker.Item label="22" value="22" />
                      <Picker.Item label="23" value="23" />
                      <Picker.Item label="24" value="24" />
                      <Picker.Item label="25" value="25" />
                      <Picker.Item label="26" value="26" />
                      <Picker.Item label="27" value="27" />
                      <Picker.Item label="28" value="28" />
                      <Picker.Item label="29" value="29" />
                      <Picker.Item label="30" value="30" />
                      <Picker.Item label="31" value="31" />
                    </Picker>
                  </View>

                  <View
                    // style={{ flex: 0.3 }}
                    >
                    <Picker
                      style={[styles.picker, {
                        borderRadius: 10,
                        width: "3.5rem",
                      }]}
                      selectedValue={Year}
                      onValueChange={(itemValue, itemIndex) =>
                        setYear(itemValue)
                      }
                    >
                      <Picker.Item label="Year" value="0" />
                      <Picker.Item label="2021" value="2021" />
                      <Picker.Item label="2022" value="2021" />
                      <Picker.Item label="2023" value="2022" />
                      <Picker.Item label="2024" value="2024" />
                    </Picker>
                  </View>
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
              marginTop: "1.5em",
            }}
          >
            <Image
              style={{ height: 25, width: 25, resizeMode: "contain" }}
              source={require("../../assets/common/create_goals/icon_repeat.png")}
            />
            <View style={{ flexDirection: "column", flex: 0.7 }}>
              <View style={styles.notiBox}>
                <Text
                  style={{
                    // color: "#FFFFFF",
                    fontFamily: "Comfortaa",
                    fontSize: 16,
                  }}
                >
                  <Text Text style={{ fontWeight: "bold" }}>
                    Repeat
                  </Text>{" "}
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    opacity: "70%",
                    fontFamily: "Comfortaa",
                    fontSize: 16,
                  }}
                >
                  (required)
                  <Text
                    style={{
                      color: "red",
                      fontSize: 12,
                      paddingTop: -2,
                      position: "relative",
                      top: -3,
                    }}
                  >
                    *
                  </Text>
                </Text>
              </View>

              <View style={styles.repeatRow}>
                <TouchableHighlight
                  style={styles.isPress ? styles.btnPress : styles.btnNormal}
                  {...touchProps}
                >
                  <Text
                    style={styles.isPress ? styles.txtPress : styles.txtNormal}
                  >
                    S
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.isPress ? styles.btnPress : styles.btnNormal}
                  {...touchProps}
                >
                  <Text
                    style={styles.isPress ? styles.txtPress : styles.txtNormal}
                  >
                    M
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.isPress ? styles.btnPress : styles.btnNormal}
                  {...touchProps}
                >
                  <Text
                    style={styles.isPress ? styles.txtPress : styles.txtNormal}
                  >
                    T
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.isPress ? styles.btnPress : styles.btnNormal}
                  {...touchProps}
                >
                  <Text
                    style={styles.isPress ? styles.txtPress : styles.txtNormal}
                  >
                    W
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.isPress ? styles.btnPress : styles.btnNormal}
                  {...touchProps}
                >
                  <Text
                    style={styles.isPress ? styles.txtPress : styles.txtNormal}
                  >
                    T
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.isPress ? styles.btnPress : styles.btnNormal}
                  {...touchProps}
                >
                  <Text
                    style={styles.isPress ? styles.txtPress : styles.txtNormal}
                  >
                    F
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.isPress ? styles.btnPress : styles.btnNormal}
                  {...touchProps}
                >
                  <Text
                    style={styles.isPress ? styles.txtPress : styles.txtNormal}
                  >
                    S
                  </Text>
                </TouchableHighlight>
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
              marginTop: "1.5em",
            }}
          >
            <View>
              <Image
                style={{ height: 25, width: 25, resizeMode: "contain" }}
                // source={require("../../assets/common/time.png")}
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
                  <Text style={{ fontWeight: "bold" }}>Time Limit</Text>{" "}
                  <Text style={{ color: "#000000", opacity: "70%" }}>(optional)</Text>
                </Text>
                <View style={{
                  // borderBottomColor: "#484644",
                  // borderBottomWidth: 1,
                  // paddingBottom: "0.5em"
                  }}>
                  <Picker
                    style={[styles.picker, {
                      backgroundColor: "transparent",
                    }]}
                    selectedValue={Time}
                    onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
                  >
                    <Picker.Item label="Time" color="gray" value="0" />
                    <Picker.Item label="10 mins" value="10" />
                    <Picker.Item label="15 mins" value="15" />
                    <Picker.Item label="20 mins" value="20" />
                    <Picker.Item label="30 mins" value="30" />
                    <Picker.Item label="40 mins" value="40" />
                    <Picker.Item label="50 mins" value="50" />
                    <Picker.Item label="1 hour" value="60" />
                  </Picker>
                </View>
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
              marginTop: "1.5em",
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
                  <Text style={{ fontWeight: "bold" }}>Notification</Text>
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    opacity: "70%",
                    fontFamily: "Comfortaa",
                    fontSize: 16,
                  }}
                >
                  {" "}
                  (required
                  <Text
                    style={{
                      color: "red",
                      fontSize: 12,
                      position: "relative",
                      top: -3,
                    }}
                  >
                    *
                  </Text>
                  )
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  marginTop: "1em",
                }}
              >
                <Switch
                  onValueChange={toggleSwitch}
                  value={enabled}
                  thumbColor={enabled ? thumbColorOn : thumbColorOff}
                  trackColor={{ false: trackColorOff, true: trackColorOn }}
                  ios_backgroundColor={trackColorOff}
                  style={{ marginRight: 5 }}
                />
                <Text
                  style={{
                    color: "#484644",
                    fontFamily: "Comfortaa",
                    fontSize: 16,
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
              marginTop: "1.5em",
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
                  <Text Text style={{ fontWeight: "bold" }}>
                    Time Setting
                  </Text>{" "}
                  <Text style={{ color: "#000000", opacity: "70%"}}>(optional)</Text>
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                    padding: "0.1em",
                  }}
                >
                  <View style={{ flex: 0.4 }}>
                    <Picker
                      style={[styles.picker, {
                        backgroundColor: "transparent",
                        borderBottomColor: "#484644",
                        borderBottomWidth: 1,
                        borderStyle: "solid",
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderLeftWidth: 0,
                      }]}
                      selectedValue={Hour}
                      onValueChange={(itemValue, itemIndex) =>
                        setHour(itemValue)
                      }
                    >
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="HH" value="0" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="05" value="05" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="06" value="06" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="07" value="07" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="08" value="08" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="09" value="09" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="10" value="10" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="11" value="11" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="12" value="12" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="13" value="13" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="14" value="14" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="15" value="15" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="16" value="16" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="17" value="17" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="18" value="18" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="19" value="19" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="20" value="20" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="21" value="21" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="22" value="22" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="23" value="23" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="24" value="24" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="01" value="01" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="02" value="02" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="03" value="03" />
                      <Picker.Item
                        style={styles.step3_timeSet_picker} label="04" value="04" />
                    </Picker>
                  </View>

                  <View style={{ flex: 0.4 }}>
                    <Picker
                      style={[styles.picker, {
                        backgroundColor: "transparent",
                        borderBottomColor: "#484644",
                        borderBottomWidth: 1,
                        borderBottomStyle: "solid",
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderLeftWidth: 0,
                      }]}
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
      </View>

      <View style={styles.buttoncont}>
        {setpnum > 0 && (
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
          <Button style={styles.btn} onPress={action}>
            <Text style={styles.buttontxt}>Done</Text>
          </Button>
        )}
      </View>

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
          // source={require("../../assets/SC_Home/flower.png")}
        />
      )}
    </View>
  );
}
