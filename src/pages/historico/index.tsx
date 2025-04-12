import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Menu } from "../../components/menu";
import { MonthlyReport } from "../../components/MonthlyReport";

export const Historico = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <MonthlyReport />
      </ScrollView>
      <Menu />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    borderRadius: 15,
    marginTop: 50,
    marginBottom: 110,
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
  },
});
