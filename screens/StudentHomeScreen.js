// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function StudentHomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome, Student 👩‍🎓</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   text: { fontSize: 24, fontWeight: 'bold' },
// });


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function StudentHomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Student dashboard</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* 📅 Time Table */}
        <View style={styles.card}>
          <Text style={styles.attendancePercent}>📅 TIME TABLE</Text>
        </View>

        {/* 📊 Attendance */}
        <View style={[styles.card, styles.centerAlign]}>
          <Text style={styles.attendancePercent}>Attendance</Text>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsText}>View Details</Text>
          </TouchableOpacity>
        </View>

        {/* 🔔 Notifications */}
        <View style={styles.card}>
          <Text style={styles.attendancePercent}>🔔 Notifications</Text>
        </View>

        {/* 📘 Homework */}
        <View style={styles.card}>
          <Text style={styles.attendancePercent}>📘 Homework</Text>
        </View>

        {/* 📝 Fees Status */}
        <View style={styles.card}>
          <Text style={styles.attendancePercent}>📝 Fees Status</Text>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsText}>Check Now</Text>
          </TouchableOpacity>
        </View>

        {/* 🎯 Progress Tracker */}
        <View style={styles.card}>
          <Text style={styles.attendancePercent}>🎯 Progress Tracker</Text>
        </View>

        {/* 🧪 Quiz Corner */}
        <View style={styles.card}>
          <Text style={styles.attendancePercent}>🧪 Quiz Corner</Text>
        </View>

        {/* 👨‍🏫 My Teachers */}
        <View style={styles.card}>
          <Text style={styles.attendancePercent}>👨‍🏫 My Teachers</Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
  },
  header: {
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    elevation: 1,
  },
  centerAlign: {
    alignItems: 'center',
  },
  attendancePercent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: '#1e88e5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  detailsText: {
    color: '#fff',
    fontWeight: '600',
  },
});
