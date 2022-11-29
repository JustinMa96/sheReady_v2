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
  width: 100%;
  height: 200px;
`;
// error happened with ↑width:"100%";

const styles = StyleSheet.create({
  wrap1: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    // width: "100%",
    width: 400,
    height: 200,
    paddingLeft: "5%",
    paddingRight: "5%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  imgCont: {
    overflow: "hidden",
    height: 200,
    width: 150,
    flexGrow: 1,
    borderRadius: 150,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: 20,
  },
  img: {
    display: "block",
    width: "100%",
    height: "100%",
    fontSize: 13,
  },
  quote_cont: {
    display: "flex",
    height: 200,
    width: 200,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 50,
    paddingLeft: 10,
  },
  quote_ttl: {
    fontFamily: "Comfortaa",
    fontWeight: 400,
    height: 14,
    fontSize: 14,
    flexWrap: "wrap",
  },
  quote_txt: {
    marginTop: 5,
    fontFamily: "Leky",
    fontWeight: 400,
    height: 100,
    fontSize: 14,
    width: 170,
    flexWrap: "wrap",
  },
  stairsImg: {
    width: 200,
    height: 60,
    marginLeft: -35,
    marginTop: -10,
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
          source={imgSrc}
          // source={require("../../assets/SC_Community/mv.png")}
          />
      </TouchableOpacity>
      <View
        style={styles.quote_cont}>
        <Text style={styles.quote_ttl}>
          QUOTE OF THE DAY
        </Text>
        <Text style={styles.quote_txt}>
          Everything   You Touch   Flourishes
        </Text>
        <MyBgImg
          style={styles.stairsImg}
          resizeMode="contain"
          source={require("../../assets/SC_Home/stairs.png")}/>
      </View>
    </View>
  );
}
