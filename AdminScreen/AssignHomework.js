import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AssignHomework() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assign Homework</Text>
      {/* In future: file/image upload, class selection, homework details */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
