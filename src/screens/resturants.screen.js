import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

export const ResturantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.Search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <Text>list</Text>
    </View>
  </SafeAreaView>
);   


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  Search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});