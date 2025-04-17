import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AdminHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Admin 👑</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});


// // screens/AdminAssignAccessScreen.tsx
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Button, StyleSheet, Picker } from 'react-native';
// import { ref, onValue, update } from 'firebase/database';
// import { database } from '../services/firebaseConfig';

// export default function AdminAssignAccessScreen() {
//   const [teachers, setTeachers] = useState([]);
//   const [selectedClasses, setSelectedClasses] = useState({});

//   useEffect(() => {
//     const usersRef = ref(database, 'users');
//     onValue(usersRef, snapshot => {
//       const data = snapshot.val();
//       const teacherList = [];

//       for (let id in data) {
//         if (data[id].role === 'Teacher') {
//           teacherList.push({ id, ...data[id] });
//         }
//       }

//       setTeachers(teacherList);
//     });
//   }, []);

//   const handleAssign = (teacherId) => {
//     const assignedClass = selectedClasses[teacherId];
//     if (assignedClass) {
//       update(ref(database, `users/${teacherId}`), { assignedClass });
//       alert(`Assigned ${assignedClass} to teacher`);
//     } else {
//       alert('Please select a class first.');
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       <Text style={styles.name}>{item.name}</Text>
//       <Picker
//         selectedValue={selectedClasses[item.id]}
//         onValueChange={(value) => setSelectedClasses({ ...selectedClasses, [item.id]: value })}
//         style={styles.picker}
//       >
//         <Picker.Item label="Select Class" value="" />
//         <Picker.Item label="Class 1" value="Class 1" />
//         <Picker.Item label="Class 2" value="Class 2" />
//         <Picker.Item label="Class 3" value="Class 3" />
//         {/* Add more classes as needed */}
//       </Picker>
//       <Button title="Assign" onPress={() => handleAssign(item.id)} />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Assign Classes to Teachers</Text>
//       <FlatList
//         data={teachers}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16 },
//   title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
//   card: { padding: 12, borderWidth: 1, borderRadius: 8, marginBottom: 12 },
//   name: { fontSize: 18, fontWeight: '500', marginBottom: 8 },
//   picker: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 8 },
// });
