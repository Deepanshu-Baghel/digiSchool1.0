// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, Alert } from 'react-native';
// import { database } from '../services/firebaseConfig';
// import { ref, onValue } from 'firebase/database';

// export default function LoginScreen({ route }) {
//   const { role } = route.params;
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     const usersRef = ref(database, 'users');
//     onValue(usersRef, snapshot => {
//       const data = snapshot.val();
//       let found = false;
//       for (let id in data) {
//         const user = data[id];
//         if (
//           user.email === email &&
//           user.password === password &&
//           user.role === role
//         ) {
//           found = true;
//           Alert.alert('Success', `Welcome ${role}`);
//           break;
//         }
//       }
//       if (!found) {
//         Alert.alert('Error', 'Invalid credentials or role');
//       }
//     }, { onlyOnce: true });
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Text style={{ fontSize: 24, marginBottom: 20 }}>Login as {role}</Text>
//       <TextInput placeholder="Email" onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
//       <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// }


import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ToastAndroid } from 'react-native';
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

            // 🔔 Show toast notification
            ToastAndroid.show(`Welcome ${role}`, ToastAndroid.SHORT);

            // 🔀 Navigate to appropriate screen
            if (role === 'Student') {
              navigation.replace('StudentHome');
            } else if (role === 'Teacher') {
              navigation.replace('TeacherHome');
            } else if (role === 'Admin') {
              navigation.replace('AdminHome');
            }
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
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold', textAlign: 'center' },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
  },
});
