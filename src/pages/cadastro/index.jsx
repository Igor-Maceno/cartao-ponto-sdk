import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

import dbData from "../../db/data.json"

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [hourValue, setHourValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    if(password === confirmPassword){
        const user = {
            firstName,
            lastName,
            company,
            hourValue,
            email,
            password
          }

          console.log(user)
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
        <TouchableOpacity>
          <Text style={{ fontWeight: "800" }}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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
