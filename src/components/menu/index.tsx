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
    padding: 30,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  buttons:{
    alignItems: "center",

  }
});
