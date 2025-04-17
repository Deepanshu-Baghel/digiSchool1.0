import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TimeTableScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📅 Time Table Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
});
