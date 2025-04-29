import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import data from "../../db/data.json";
import { DayReport } from "../DayReport";

export const MonthlyReport = () => {
  const usuario = data.users[0];
  const registros = usuario.registros;

  const mesAlvo = "Abril";
  const anoAlvo = "2025";
  const valorHora = 10; // valor por hora

  const registrosFiltrados = registros.filter((registro) => {
    return (
      registro.dataCompleta.includes(mesAlvo) &&
      registro.dataCompleta.includes(anoAlvo)
    );
  });

  const calcularHorasTrabalhadas = (entrada, saida) => {
    const [h1, m1] = entrada.split(":").map(Number);
    const [h2, m2] = saida.split(":").map(Number);

    const entradaMin = h1 * 60 + m1;
    const saidaMin = h2 * 60 + m2;

    return (saidaMin - entradaMin) / 60;
  };

  let totalHoras = 0;

  registrosFiltrados.forEach((registro) => {
    registro.pontos.forEach((ponto) => {
      totalHoras += calcularHorasTrabalhadas(ponto.entrada, ponto.saida);
    });
  });

  const salarioTotal = (totalHoras * valorHora).toFixed(2);

  const titulo = registrosFiltrados[0]?.dataCompleta.split(",")[1].trim();
  const [dia, mes, ano] = titulo.split(" ");
  const tituloFormatado = `${mes} ${ano}`;

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 24, fontWeight: 900 }}>{tituloFormatado}</Text>
        <View style={{ gap: 20, flexDirection: "row", flexWrap: "nowrap" }}>
          <Feather name="share-2" size={25} color="black" />
          <Feather name="download" size={25} color="black" />
        </View>
      </View>
      <DayReport usuario={usuario} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 50,
        }}
      >
        <Text style={{ fontSize: 20, color: "#5E5E5E" }}>Salário Total</Text>
        <Text style={{ fontSize: 20, color: "#000", fontWeight: 900 }}>
          R$ {salarioTotal}
        </Text>
      </View>
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
