import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

export default function FlatListAr({ tasks }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  taskItem: {
    marginTop:80,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width:'80%',
    margin:30,
  },
});