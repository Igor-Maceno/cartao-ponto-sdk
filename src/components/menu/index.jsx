import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate("Home")}
      >
        <AntDesign name="clockcircleo" size={40} color="black" />
        <Text>Ponto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate("Historico")}
      >
        <FontAwesome6 name="clock-rotate-left" size={38} color="black" />
        <Text>Histórico</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate("Settings")}
      >
        <AntDesign name="setting" size={40} color="black" />
        <Text>Config.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  buttons: {
    alignItems: "center",
  },
});
