import React from "react";
import { Text, View, SafeAreaView, Button, Modal, TouchableOpacity } from "react-native";
import PopUp1 from "../components/goals/popup_1";
import { BlurView } from "expo-blur";

export default function Test() {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const onAddDone = () => setAddDone(true);
  const [popVisible, setPopVisible] = React.useState(false);
  const showPop = () => setPopVisible(true);
  const hidePop = () => setPopVisible(false);

  return (
    <SafeAreaView>
      <View>
      <Button onPress={showPop} title="Button"/>
      <Modal
            visible={popVisible}
            onDismiss={hidePop}
          >
          <TouchableOpacity
            onPress={hidePop}
          >
          <BlurView
             intensity= {50}
             tint="dark"
             style={{
              position: "absolute",
               height: "100%",
               width: "100%",
               justifyContent: "center",
               alignSelf: "center"
             }}
          >
            <PopUp1 action={hidePop} />
          </BlurView>
          </TouchableOpacity>
          </Modal>

          <Modal
            visible={visible}
            onDismiss={hideModal}
          >
          </Modal>

      </View>
    </SafeAreaView>
  );
}
