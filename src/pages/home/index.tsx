import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Menu } from "../../components/menu";
import { Feather, Ionicons } from "@expo/vector-icons";

export const Home = () => {
  const [dataFormatada, setDataFormatada] = useState("");
  const [horarioFormatado, setHorarioFormatado] = useState("");

  useEffect(() => {
    const diasDaSemana = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    const atualizarDataHora = () => {
      const agora = new Date();

      const diaSemana = diasDaSemana[agora.getDay()];
      const dia = String(agora.getDate()).padStart(2, "0");
      const mes = meses[agora.getMonth()];
      const ano = agora.getFullYear();

      const horas = String(agora.getHours()).padStart(2, "0");
      const minutos = String(agora.getMinutes()).padStart(2, "0");

      setDataFormatada(`${diaSemana}, ${dia} ${mes} ${ano}`);
      setHorarioFormatado(`${horas}:${minutos}`);
    };

    atualizarDataHora(); // chama no início
    const intervalo = setInterval(atualizarDataHora, 1000); // atualiza a cada 1s

    return () => clearInterval(intervalo); // limpa ao desmontar
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <Feather name="user" size={30} color="black" />
        <Ionicons name="notifications-outline" size={30} color="black" />
      </View>
      <View style={styles.greating}>
        <Text style={{ fontSize: 16 }}>Bom dia,</Text>
        <Text style={{ fontSize: 36, fontWeight: "bold" }}>Igor</Text>
      </View>
      <View style={styles.time}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
          {dataFormatada}
        </Text>
        <Text style={{ fontSize: 36, fontWeight: 900 }}>
          {horarioFormatado}
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.track}>
          <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "bold" }}>REGISTRAR PONTO</Text>
        </TouchableOpacity>
      </View>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
  icons: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  greating: {
    marginTop: 50,
  },
  time: {
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  track: {
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#28A745",
    borderRadius: 50,
    padding: 10
},
});
