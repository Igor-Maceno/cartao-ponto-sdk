import React, { useState, useEffect } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Menu } from "../../components/menu";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

export const Home = ({ navigation }) => {
  const [dataFormatada, setDataFormatada] = useState("");
  const [horarioFormatado, setHorarioFormatado] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [greating, setGreating] = useState("");

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

      const hora =
        horas < 12 ? "Bom dia" : horas < 18 ? "Boa tarde" : "Boa noite";

      setGreating(hora);
    };

    atualizarDataHora(); // chama no início
    const intervalo = setInterval(atualizarDataHora, 1000); // atualiza a cada 1s

    return () => clearInterval(intervalo); // limpa ao desmontar
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.icons}>
          <Feather name="user" size={30} color="black" />
          <Ionicons name="notifications-outline" size={30} color="black" />
        </View>
        <View style={styles.greating}>
          <Text style={{ fontSize: 16 }}>{greating},</Text>
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
        <View style={styles.trackContainer}>
          <TouchableOpacity
            style={styles.track}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "bold" }}>
              REGISTRAR PONTO
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Registrar Ponto</Text>
              <View style={styles.modalBotoes}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Historico");
                  }}
                  style={styles.opcao1}
                >
                  <MaterialIcons name="login" size={25} color="#FFF" />
                  <Text
                    style={{ color: "#FFF", fontWeight: "bold", fontSize: 16 }}
                  >
                    Entrada
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Historico");
                  }}
                  style={styles.opcao2}
                >
                  <MaterialIcons name="logout" size={25} color="#FFF" />
                  <Text
                    style={{ color: "#FFF", fontWeight: "bold", fontSize: 16 }}
                  >
                    Saída
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color: "red", marginTop: 15 }}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <Menu />
    </>
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
  trackContainer: {
    marginTop: 190,
  },
  track: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#28A745",
    borderRadius: 50,
    padding: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end", // Gruda no rodapé
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  modalBotoes: {
    flexDirection: "row",
    gap: 20,
  },
  opcao1: {
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 10,
    backgroundColor: "#28A745",
    padding: 15,
    borderRadius: 10,
    minWidth: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  opcao2: {
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 10,
    backgroundColor: "#DC3545",
    padding: 15,
    borderRadius: 10,
    minWidth: 150,
    justifyContent: "center",
  },
});
