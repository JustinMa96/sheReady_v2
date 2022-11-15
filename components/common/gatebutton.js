import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

const styles = StyleSheet.create({
  backgate: {
    flex: 1,
    borderColor: "#572516",
    borderWidth: 1,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: 20,
  },

  frontgate: {
    flex: 1,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    bottom: 5,
    right: 5,
  },
});

export default function GateButton({ action, txt }) {
  const { colors } = useTheme();
  const [BtnPostion, setBtnPostion] = React.useState({ left: 5, bottom: 5 });
  const onPressIn = () => {
    setBtnPostion({ left: 0, bottom: 0 });
  };

  const onPressOut = () => {
    setBtnPostion({ left: 5, bottom: 5 });
  };
  return (
    <View
      style={{
        width: 60,
        height: 100,
        marginHorizontal: "40%",
      }}
    >
      <View style={styles.backgate}>
        <TouchableOpacity
          style={[
            styles.frontgate,
            BtnPostion,
            {
              backgroundColor: colors.card,
            },
          ]}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onPress={action}
        >
          <Text
            style={{
              color: colors.text,
              fontFamily: "Leky",
              fontSize: 12,
              textAlign: "center",
              paddingTop: 25,
            }}
          >
            {txt}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
