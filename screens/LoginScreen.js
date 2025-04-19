import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { database } from '../services/firebaseConfig';
import { ref, onValue } from 'firebase/database';

export default function LoginScreen({ route, navigation }) {
  const { role } = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logoAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(logoAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = () => {
    const usersRef = ref(database, 'users');
    onValue(
      usersRef,
      (snapshot) => {
        const data = snapshot.val();
        let found = false;

        for (let id in data) {
          const user = data[id];
          if (
            user.email === email &&
            user.password === password &&
            user.role === role
          ) {
            found = true;

            ToastAndroid.show(`Welcome ${role}`, ToastAndroid.SHORT);

            setTimeout(() => {
              if (role === 'Student') navigation.replace('StudentHome');
              else if (role === 'Teacher') navigation.replace('TeacherHome');
              else if (role === 'Admin') navigation.replace('AdminHome');
            }, 300);
            break;
          }
        }

        if (!found) {
          ToastAndroid.show('Invalid credentials or role', ToastAndroid.SHORT);
        }
      },
      { onlyOnce: true }
    );
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/login-logo.png')}
        style={[
          styles.logo,
          {
            opacity: logoAnim,
            transform: [
              {
                scale: logoAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
            ],
          },
        ]}
      />

      <Text style={styles.title}>Login as {role}</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}> Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 26,
    marginBottom: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  backText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
