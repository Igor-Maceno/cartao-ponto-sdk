import React from "react";
import { View, Text, StyleSheet, Hr } from "react-native";
import { Feather } from "@expo/vector-icons";

export const DayReport = ({ usuario }) => {
  const calcularHorasTrabalhadas = (entrada, saida) => {
    const [hEntrada, mEntrada] = entrada.split(":").map(Number);
    const [hSaida, mSaida] = saida.split(":").map(Number);

    const entradaMin = hEntrada * 60 + mEntrada;
    const saidaMin = hSaida * 60 + mSaida;

    return (saidaMin - entradaMin) / 60; // retorna em horas
  };

  const calcularSalarioDia = (pontos, valorHora) => {
    const horasTotais = pontos.reduce((total, ponto) => {
      return total + calcularHorasTrabalhadas(ponto.entrada, ponto.saida);
    }, 0);

    return (horasTotais * valorHora).toFixed(2);
  };

  const valorHora = 15;
  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      {usuario.registros.map((registro, index) => {
        const salarioDia = calcularSalarioDia(registro.pontos, valorHora);

        return (
          <View key={index} style={styles.container}>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                {registro.dataCompleta}
              </Text>
              <Feather name="edit" size={15} color="black" />
            </View>

            {/* Entradas e saídas */}
            {registro.pontos.map((ponto, i) => (
              <>
                <View
                  key={i}
                  style={{
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.entrada}>{ponto.entrada}</Text>
                  <Text style={styles.saida}>{ponto.saida}</Text>
                </View>
                {i < registro.pontos.length - 1 && <View style={styles.hr} />}
              </>
            ))}

            {/* Saldo do dia, uma vez só */}
            <View
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 18, color: "#5E5E5E" }}>
                Saldo do dia{" "}
              </Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, color: "#5E5E5E" }}
              >
                R$ {salarioDia}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  entrada: {
    color: "#28A745",
    fontWeight: "900",
    fontSize: 20,
  },
  saida: {
    color: "#DC3545",
    fontWeight: "900",
    fontSize: 20,
  },
  hr: {
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
