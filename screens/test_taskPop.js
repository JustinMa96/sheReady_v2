import React from "react";
import { Text, View, SafeAreaView, Button } from "react-native";
import { Modal } from "react-native-paper";
import TaskPopup from "../components/home/taskPop";

export default function Test() {

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [checked, setChecked] = React.useState(false);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const [firstUse, setFirstUse] = React.useState(true);
  const changeCard = () => {
    setFirstUse(!firstUse);
  };

  console.log("TEST");

  return (
    <SafeAreaView>
      <View>
      <View
                  style={{ zIndex: 2, height: "100%" }}
                >
                  <Text style={{ textAlign: "center", padding: 0 }}>
                    No task yet.
                  </Text>
                  <Text>Tap the “+” below to get started.</Text>
                  <Button onPress={showModal} title="add"/>
                </View>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <Button
          title="Button"
          onPress={hideModal}
        />
        <TaskPopup action={changeCard} />
      </Modal>
      </View>
    </SafeAreaView>
  );
}
