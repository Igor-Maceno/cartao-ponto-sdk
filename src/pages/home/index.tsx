import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Menu } from "../../components/menu";

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
    <View>
      <Text>Bom dia,</Text>
      <Text>Igor</Text>
      <Text>{dataFormatada}</Text>
      <Text>{horarioFormatado}</Text>
      <Menu />
    </View>
  );
};
