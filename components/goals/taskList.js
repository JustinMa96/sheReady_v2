import { StyleSheet, Text, View } from "react-native";
import { ProgressBar, MD3Colors } from "react-native-paper";
import * as React from "react";

const styles = StyleSheet.create({
  list: {
    margin: 40,
    marginTop: 0,
  },
  container: {
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    elevation: 5,
    width: "100%",
    height: 100,
    backgroundColor: "#ECD8D0",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    top: 30,
    justifyContent: "space-evenly",
  },
  title: {
    backgroundColor: "#484644",
    position: "absolute",
    borderRadius: 80,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 150,
    height: 30,
    zIndex: 10,
    textAlign: "center",
    padding: 5,
    left: 30,
  },
  task: {
    color: "#484644",
    fontSize: 16,
    fontWeight: "600",
    flexWrap: "wrap",
    alignSelf: "flex-start",
    fontFamily: "Comfortaa",
    marginBottom: 10
  },
  date: {
    color: "#484644",
    fontSize: 13,
    fontWeight: "500",
    left: 0,
    alignSelf: "flex-start",
    fontFamily: "Comfortaa",
  },
  progressBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "baseline",
  },
});

export default function TaskList(props) {
  return (
    <View style={styles.list}>
      <View style={styles.title}>
        <Text
          style={{
            color: "#F3EAE2",
            fontWeight: "500",
            fontSize: 15,
          }}
        >
          {props.tasknum}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.task}>{props.task}</Text>

        <Text style={styles.date}>{props.due}</Text>

        <View style={styles.progressBox}>
          <ProgressBar
            style={{ width: "60vw", left: 5, height: 6, borderRadius: 20, backgroundColor: "white" }}
            progress={props.progressNum}
            color="#484644"
          />
        </View>
      </View>
    </View>
  );
}

//  -- when you import, use below template
// <TaskList
// task={"Get the mentor’s advice - explain design ideas"}
// due={"Due: Nov,28,2022"}
// progress={"3/6"}
// progressNum={0.5}
// />