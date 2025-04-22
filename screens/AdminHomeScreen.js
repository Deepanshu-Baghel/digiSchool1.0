import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AdminHomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome, Admin 👑</Text>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RegisterStudent')}>
        <Text style={styles.cardText}>➕ Register Student</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ClassStudentList')}>
        <Text style={styles.cardText}>📋 View Class-wise Students</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AssignHomework')}>
        <Text style={styles.cardText}>📤 Assign Homework</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SendNotification')}>
        <Text style={styles.cardText}>🔔 Send Notifications</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 40,
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#007AFF',
    padding: 20,
    borderRadius: 12,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    elevation: 3,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

