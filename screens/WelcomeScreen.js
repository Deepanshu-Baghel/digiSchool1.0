import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>Welcome to digiSchool</Text>


      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('RoleSelection')}>
  <Text style={styles.buttonText}>Continue</Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#4a90e2',
    marginBottom: 50,
    letterSpacing: 1,
    fontFamily: 'sans-serif-medium', // Android default fallback
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
