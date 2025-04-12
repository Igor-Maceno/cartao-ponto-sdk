import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export const DayReport = ({ usuario }) => {
  return (
    <View style={{marginTop: 20, marginBottom: 20}}>
      {usuario.registros.map((registro, index) => (
        <View key={index} style={styles.container}>
          <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", flexWrap: "nowrap" }}>
            <Text style={{fontSize: 14, fontWeight: "bold"}}>{registro.dataCompleta}</Text>
            <Feather name="edit" size={15} color="black" />
          </View>
          {registro.pontos.map((ponto, i) => (
            <Text key={i}>
              Entrada: {ponto.entrada} - Saída: {ponto.saida}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
});
