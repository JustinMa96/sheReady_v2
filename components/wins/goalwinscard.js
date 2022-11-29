import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { IconButton, Checkbox } from "react-native-paper";

const styles = StyleSheet.create({
  list_cont: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: {
    margin: 0,
    flex: 1,
    width: "90%",
    marginBottom: 50,
  },
  container: {
    display: "flex",
    alignItems: "center",
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    elevation: 5,
    height: "auto",
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
    flexDirection: "row",
    zIndex: 2,
  },

  title: {
    backgroundColor: "#484644",
    position: "absolute",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 7,
    paddingLeft: 20,
    paddingRight: 20,
    width: 150,
    height: 50,
    zIndex: 1,
    textAlign: "center",
    padding: 5,
    left: 30,
  },

  expand: {
    backgroundColor: "ECD8D0",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    height: "auto",
    width: "80%",
    paddingTop: 40,
    zIndex: 1,
  },

  txt: {
    color: "#484644",
    fontFamily: "Comfortaa",
    fontSize: 20,
    fontWeight: 600,
    flexWrap: "wrap",
    width: "80%",
  },

  selectline: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  dotIcon: {
    width: 14,
    height: 14,
    textAlign: "center",
    display: "flex",
    flex: 1,
  },

  selecttxt: {
    width: "100%",
    color: "#484644",
    fontFamily: "Comfortaa",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    lineHeight: 16,
    paddingTop: 8,
  },
});

export default function Goalwinscard(props) {
  const [onExpand, setOnExpand] = React.useState(true);
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.list_cont}>
      <View style={styles.list}>
        <View style={styles.title}>
          <Text
            style={{
              color: "white",
              fontWeight: "400",
              fontSize: 15,
              fontFamily: "Comfortaa",
            }}
          >
            Compeleted
          </Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            style={{

            }}
            color={"#000"}
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
            />
          <Text style={styles.txt}>{props.taskName}</Text>
          <IconButton
            onPress={() => setOnExpand(!onExpand)}
            icon="chevron-down"
            iconColor="#572516"
            size={40}
          />
        </View>

        <View style={[styles.expand, { display: onExpand ? "none" : "flex" }]}>
          <View style={styles.selectline}>
            <IconButton
              icon="circle-small"
              iconColor="#572516"
              size={20}
              style={styles.dotIcon} />
            <Text style={styles.selecttxt}>
              Invite the mentor to participate in usability test
            </Text>
            <Checkbox
              style={{
                width: 20,
                height: 20,
                backgroundColor: "pink",
                display: "flex"
              }}
              color="white"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
          <View style={styles.selectline}>
            <IconButton
              icon="circle-small"
              iconColor="#572516"
              size={20}
              style={styles.dotIcon}/>
            <Text style={styles.selecttxt}>
              Get the mentor's advice on how to explain design ideas{" "}
            </Text>
            <Checkbox
              color="white"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
