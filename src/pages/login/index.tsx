import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Alert,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";

import { NavigationProp } from "@react-navigation/native";

export default function Login({ navigation }: { navigation: NavigationProp<any> }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const handleSubmit = async () => {
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!isBiometricEnrolled) {
      Alert.alert(
        "Login",
        "Nenhuma biometria encontrada. Por favor cadastre no seu dispositivo"
      );
      return;
    }
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login com biometria",
      fallbackLabel: "Biometria não encontrada",
    });

    setIsAuth(auth.success);
    if (auth.success) {
      navigation.navigate("Home");
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#888"
            />
          </Pressable>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.fingerPrint} onPress={handleSubmit}>
          <Ionicons name="finger-print" size={40} color="black" />
          <Text>Acesse com a Digital</Text>
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
    marginTop: 150,
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
    padding: 15,
    borderRadius: 15,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#e5e5e5",
  },
  inputWithIcon: {
    flex: 1,
    color: "#5e5e5e",
    fontSize: 16,
  },
  inputContainer: {
    width: 300,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
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
  fingerPrint: {
    alignItems: "center",
    justifyContent: "center",
    margin: 50,
  },
  link: {
    alignItems: "center",
  },
});
