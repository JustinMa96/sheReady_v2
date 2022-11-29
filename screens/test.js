import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import TaskCard from "../components/home/taskcard";

export default function Test() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <TaskCard />
      </View>
    </SafeAreaView>
  );
}
