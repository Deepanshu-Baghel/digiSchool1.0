import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SendNotification() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Notification</Text>
      {/* Future: message input, class/individual selection, push via FCM */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
