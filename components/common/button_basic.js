import * as React from 'react';
import { StyleSheet, View, SafeAreaView, Alert, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

// styling using style components package
const MyBscBtnCont = styled.View`
  border: ${(props) => props.btnBdrClr} !important;
`
const MyBscBtnTxt = styled.Text`
  color: ${(props) => props.btnTxtClr} !important;
`
//react native way of styling
const styles = StyleSheet.create({
  cont: {
    borderRadius: "20px",
    overflow: "hidden",
    width: 113,
    height: 27,
    lineHeight: 27,
    backgroundColor: 'none',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    display: "block",
    fontSize: 16
  },
  txt: {
    display: "flex",
    lineHeight: "inherit",
    justifyContent: "center"
  }
});

export default function Button_Basic({
  title = "Next",
  btnBdrClr = "#572516",
  btnTxtClr = "#572516",
  btnUrl = "Home"
}){
  return (
    <MyBscBtnCont
      style={styles.cont}
      btnBdrClr={btnBdrClr}>
        <TouchableOpacity
          onPress={() => navigation.navigate(btnUrl)}
          style={styles.btn}
        >
          <MyBscBtnTxt
            style={styles.txt}
            btnTxtClr={btnTxtClr}
            >
            {title}
          </MyBscBtnTxt>
        </TouchableOpacity>
    </MyBscBtnCont>
  )
}
