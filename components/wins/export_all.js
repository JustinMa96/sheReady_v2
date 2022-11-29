import * as React from 'react';
import { Modal } from "react-native-paper";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

  const Export_All = ({ action }) => {
  const styles = StyleSheet.create({
    cont: {
      borderRadius: 20,
      overflow: "hidden",
      width: 113,
      height: 37,
      lineHeight: 27,
      backgroundColor: "transparent",
      borderColor: "#484644",
      borderWidth: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },

    btn: {
      justifyContent: "center",
      alignItems: "center",
      fontSize: 16
    },

  });

  return (
    <View
      style={styles.cont}>
        <TouchableOpacity
          onPress={action}
          style={styles.btn}
        >
          <Text
            style={styles.txt}
            >
            Export All
          </Text>
        </TouchableOpacity>
    </View>
  );
};

export default Export_All;
