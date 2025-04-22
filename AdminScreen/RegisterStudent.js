// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// export default function RegisterStudent() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [className, setClassName] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async () => {
//     // Firebase logic will go here
//     Alert.alert('Submit Pressed', `Name: ${name}, Class: ${className}`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Register Student</Text>

//       <TextInput style={styles.input} placeholder="Student Name" value={name} onChangeText={setName} />
//       <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
//       <TextInput style={styles.input} placeholder="Class" value={className} onChangeText={setClassName} />
//       <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

//       <TouchableOpacity style={styles.button} onPress={handleRegister}>
//         <Text style={styles.buttonText}>Register Student</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16 },
//   title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
//   input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 12 },
//   button: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8, alignItems: 'center' },
//   buttonText: { color: '#fff', fontWeight: '600' },
// });


import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function RegisterStudent() {
  const [form, setForm] = useState({});

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleRegister = () => {
    // Firebase logic to be added here
    Alert.alert('Registration Submitted', 'Student registration data captured successfully.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>📝 Student Registration Form</Text>

      {fields.map(({ label, key, placeholder, keyboardType, multiline }) => (
        <TextInput
          key={key}
          style={[styles.input, multiline && styles.textArea]}
          placeholder={placeholder || label}
          value={form[key] || ''}
          onChangeText={(value) => handleChange(key, value)}
          keyboardType={keyboardType || 'default'}
          multiline={multiline || false}
        />
      ))}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Submit Registration</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const fields = [
  { label: 'Full Name (as per official documents)', key: 'fullName' },
  { label: 'Date of Birth (DD/MM/YYYY)', key: 'dob' },
  { label: 'Aadhar Number', key: 'aadhar', keyboardType: 'numeric' },
  { label: 'Address', key: 'address', multiline: true },
  { label: "Father's Name", key: 'fatherName' },
  { label: "Father's Occupation & Organization", key: 'fatherOccupation' },
  { label: "Father's Contact Number", key: 'fatherContact', keyboardType: 'phone-pad' },
  { label: "Mother's Name", key: 'motherName' },
  { label: "Mother's Occupation & Organization", key: 'motherOccupation' },
  { label: "Mother's Contact Number", key: 'motherContact', keyboardType: 'phone-pad' },
  { label: "Guardian's Details (if applicable)", key: 'guardianDetails' },
  { label: 'Last Class Studied', key: 'lastClass' },
  { label: 'Report Card (%)', key: 'reportCard', keyboardType: 'numeric' },
  { label: 'Class Applied For', key: 'classApplied' },
  { label: 'Admission Date (DD/MM/YYYY)', key: 'admissionDate' },
  { label: 'Mode of Transport (School Bus/Private)', key: 'transport' },
  { label: 'Sibling Info (if studying in same school)', key: 'siblingInfo' },
  { label: 'Fee Concession/Scholarship (if any)', key: 'feeConcession' },
  { label: 'Monthly/Quarterly Fee Details', key: 'feeStructure', multiline: true }
];

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f6f8',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#1a73e8',
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 14,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },
  button: {
    backgroundColor: '#1a73e8',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  }
});
