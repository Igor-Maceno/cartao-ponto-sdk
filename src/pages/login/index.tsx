import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(password, email);

  const handleSubmit = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Cartão Ponto APK</Text>
        <TextInput
          style={styles.input}
          placeholder={"Usuário"}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder={"Senha"}
          value={password}
          keyboardType="visible-password"
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.link}>
        <Text>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text style={{ fontWeight: "800" }}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 800,
    textAlign: "center",
    margin: 30,
  },
  input: {
    borderColor: "#e5e5e5",
    color: "#5e5e5e",
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 15,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#e5e5e5",
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "#000",
    color: "#FFF",
    borderRadius: 15,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 800,
  },
  link: {
    margin: 50,
    alignItems: "center",
  },
});
