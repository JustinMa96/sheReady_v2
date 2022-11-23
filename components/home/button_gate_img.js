import * as React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Alert,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { useTheme } from "@react-navigation/native";

const MyImg = styled.Image`
  background-image: ${(props) => props.imgSrc} !important;
`;

const MyBgImg = styled.ImageBackground`
  background-position: bottom;
  background-size: contain;
  align-self: "flex-start";
  width: "100%";
  height: 200;
`;

const styles = StyleSheet.create({
  wrap1: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    width: "100%",
    height: 256,
    paddingLeft: "10%",
    paddingRight: "10%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgCont: {
    overflow: "hidden",
    height: 256,
    width: 201,
    borderRadius: 150,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  img: {
    display: "block",
    width: "100%",
    height: "100%",
    fontSize: 13,
  },
  quote_box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  quote_ttl: {
    fontFamily: "Comfortaa",
    fontWeight: 400,
    height: "10%",
  },
  quote_txt: {
    marginTop: 5,
    fontFamily: "Leky",
    fontWeight: 400,
    height: "20%",
  },
});

export default function Button_Gate_Img({
  imgSrc = require("../../assets/SC_Home/mv1.png"),
  btnUrl = "Community",
  action,
}) {
  const { colors } = useTheme();

  return (
    <View
      style={styles.wrap1}
      >
      <TouchableOpacity
        style={styles.imgCont}
        onPress={() => action.navigate(btnUrl)}
      >
        <MyImg
          style={styles.img}
          source={imgSrc} />
      </TouchableOpacity>
      <View
        style={styles.quote_box}>
        <Text style={styles.quote_ttl}>
          QUOTE OF THE DAY
        </Text>
        <Text style={styles.quote_txt}>
          Everything You Touch Flourishes
        </Text>
        <MyBgImg
          style={styles.stairsImg}
          resizeMode="contain"
          source={require("../../assets/SC_Home/stairs.png")}/>
      </View>
    </View>
  );
}
