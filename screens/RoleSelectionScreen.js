import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const roles = ['Teacher', 'Student', 'Admin'];

export default function RoleSelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Your Role</Text>

      {roles.map(role => (
        <TouchableOpacity
          key={role}
          style={styles.button}
          onPress={() => navigation.navigate('Login', { role })}>
          <Text style={styles.buttonText}>{role}</Text>
        </TouchableOpacity>
      ))}

      {/* 👇 Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 30,
    color: '#34495e',
  },
  button: {
    backgroundColor: '#4a90e2',
    width: '100%',
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: '#4a90e2',
    width: '50%',
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  backText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
