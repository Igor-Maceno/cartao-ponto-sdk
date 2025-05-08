import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { registerUser } from "../../services/auth";

export default function Register({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [hourValue, setHourValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const numericHourValue = parseFloat(hourValue);

  const handleSubmit = async () => {
    if (password === confirmPassword) {
      const user = {
        firstName,
        lastName,
        company,
        numericHourValue,
        email,
        password,
      };
      console.log(user);
      try {
        const response = await registerUser(user);
        if (response.status === 201) {
          Alert.alert("Usuário cadastrado com sucesso!");
          navigation.navigate("Login");
        } else {
          Alert.alert("Erro ao cadastrar usuário.");
        }
      } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        Alert.alert("Erro ao cadastrar usuário.");
      }
    } else {
      Alert.alert("As senhas não conferem");
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput
          style={styles.input}
          placeholder={"Primeiro nome"}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder={"Sobrenome"}
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder={"Empresa"}
          value={company}
          onChangeText={setCompany}
        />
        <TextInput
          style={styles.input}
          placeholder={"Valor da hora trabalhada"}
          value={hourValue}
          onChangeText={setHourValue}
        />
        <TextInput
          style={styles.input}
          placeholder={"E-mail"}
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
        <TextInput
          style={styles.input}
          placeholder={"confirmar senha"}
          value={confirmPassword}
          keyboardType="visible-password"
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.link}>
        <Text>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontWeight: "800" }}>Entrar</Text>
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
