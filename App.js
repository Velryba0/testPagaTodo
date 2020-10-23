import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useFetchData from "./hooks/useFetchData";

export default function App() {
  let [data] = useFetchData();
  console.log(typeof data);
  return (
    <View style={styles.container}>
      <Text>Projecto en construcción</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
