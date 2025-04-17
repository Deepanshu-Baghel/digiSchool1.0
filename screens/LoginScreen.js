// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet, ToastAndroid } from 'react-native';
// import { database } from '../services/firebaseConfig';
// import { ref, onValue } from 'firebase/database';

// export default function LoginScreen({ route, navigation }) {
//   const { role } = route.params;
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     const usersRef = ref(database, 'users');
//     onValue(
//       usersRef,
//       (snapshot) => {
//         const data = snapshot.val();
//         let found = false;

//         for (let id in data) {
//           const user = data[id];
//           if (
//             user.email === email &&
//             user.password === password &&
//             user.role === role
//           ) {
//             found = true;

//             // 🔔 Show toast notification
//             ToastAndroid.show(`Welcome ${role}`, ToastAndroid.SHORT);

//             // 🔀 Navigate to appropriate screen
//             if (role === 'Student') {
//               navigation.replace('StudentHome');
//             } else if (role === 'Teacher') {
//               navigation.replace('TeacherHome');
//             } else if (role === 'Admin') {
//               navigation.replace('AdminHome');
//             }
//             break;
//           }
//         }

//         if (!found) {
//           ToastAndroid.show('Invalid credentials or role', ToastAndroid.SHORT);
//         }
//       },
//       { onlyOnce: true }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login as {role}</Text>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, justifyContent: 'center' },
//   title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold', textAlign: 'center' },
//   input: {
//     borderWidth: 1,
//     marginBottom: 12,
//     padding: 10,
//     borderRadius: 5,
//     borderColor: '#ccc',
//   },
// });



import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import { database } from '../services/firebaseConfig';
import { ref, onValue } from 'firebase/database';

export default function LoginScreen({ route, navigation }) {
  const { role } = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

            // Small delay to let Toast show before navigating
            setTimeout(() => {
              if (role === 'Student') navigation.replace('StudentHome');
              else if (role === 'Teacher') navigation.replace('TeacherHome');
              else if (role === 'Admin') navigation.replace('AdminHome');
            }, 500);

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#f8f9fa' },
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
});
