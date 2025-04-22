import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ClassStudentList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Class-wise Student List</Text>
      {/* Future logic to fetch and show students per class */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
