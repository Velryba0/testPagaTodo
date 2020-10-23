import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useFetchData from "../../hooks/useFetchData";

const ListBank = () => {
  let [data] = useFetchData();

  let ListAPI = () =>
    Object.keys(data).length > 0 ? (
      data.dataBank.map((elem, idx) => (
        <View key={idx} style={styles.container}>
          <Text key={`${idx}-name`}>{elem.bankName}</Text>
          <Text key={`${idx}-age`}>{elem.age} años</Text>
          <Text key={`${idx}-des`}>{elem.description}</Text>
        </View>
      ))
    ) : (
      <Text>Loading...</Text>
    );
  return <ListAPI />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListBank;
