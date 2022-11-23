import * as React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import { Modal, IconButton } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import styled from "styled-components/native";
import MenuPopup from "./Menupop";

// testing
const MyWrapCont = styled.View`
  border: ${(props) => props.btnBdrClr} !important;
`;
const styles = StyleSheet.create({
  profWrap: {
    width: "100%",
    height: 83,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    zIndex: 5,
    position: "absolute",
  },
  profBox: {
    width: 82,
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  imgCont: {
    width: 60,
    height: 60,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default function Prof_Window({
  // const { colors } = useTheme();
  imgSrc = require("../../assets/svg/dots.svg"),
  nav,
  // btnUrl = "./Community"
}) {
  const [visible, setVisible] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState({ height: 83 });
  const onOpen = () => {
    setMenuOpen({ height: "100vh" });
  };
  const onClose = () => {
    setMenuOpen({ height: 83 });
  };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  return (
    <View style={[styles.profWrap, menuOpen]}>
      <View style={styles.profBox}>
        <TouchableOpacity
          style={styles.imgCont}
          // onPress={() => navigation.navigate(btnUrl)}
          onPress={showModal}
          onPressOut={onOpen}
        >
          <Image style={styles.img} source={imgSrc} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <MenuPopup close={hideModal} small={onClose} action={nav} />
      </Modal>
    </View>
  );
}
