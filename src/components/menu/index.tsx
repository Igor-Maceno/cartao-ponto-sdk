import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

export const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <AntDesign name="clockcircleo" size={40} color="black" />
        <Text>Ponto</Text>
      </View>
      <View style={styles.buttons}>
        <FontAwesome6 name="clock-rotate-left" size={38} color="black" />
        <Text>Histórico</Text>
      </View>
      <View style={styles.buttons}>
        <AntDesign name="setting" size={40} color="black" />
        <Text>Config.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    marginRight: 5,
    marginLeft: 5,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  buttons:{
    alignItems: "center",

  }
});
