import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import data from "../../db/data.json";
import { DayReport } from "../DayReport";

export const MonthlyReport = () => {
  const usuario = data.users[0];
  const registros = data.users[0].registros;

  const mesAlvo = "Abril";
  const anoAlvo = "2025";

  const registrosFiltrados = registros.filter((registro) => {
    return (
      registro.dataCompleta.includes(mesAlvo) &&
      registro.dataCompleta.includes(anoAlvo)
    );
  });
  const titulo = registrosFiltrados[0]?.dataCompleta.split(",")[1].trim(); // "01 Abril 2025"
  const [dia, mes, ano] = titulo.split(" "); // ["01", "Abril", "2025"]
  const tituloFormatado = `${mes} ${ano}`; // "Abril 2025"

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 24, fontWeight: 900}}>{tituloFormatado}</Text>
        <View style={{ gap: 20, flexDirection: "row", flexWrap: "nowrap" }}>
          <Feather name="share-2" size={25} color="black" />
          <Feather name="download" size={25} color="black" />
        </View>
      </View>
      <DayReport usuario={usuario}/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
});
