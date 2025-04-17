import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function StudentHomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Student Dashboard</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* 📅 Time Table */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TimeTable')}>
          <Text style={styles.attendancePercent}>📅 TIME TABLE</Text>
        </TouchableOpacity>

        {/* 📊 Attendance */}
        <TouchableOpacity style={[styles.card, styles.centerAlign]} onPress={() => navigation.navigate('Attendance')}>
          <Text style={styles.attendancePercent}>Attendance</Text>
          <View style={styles.detailsButton}>
            <Text style={styles.detailsText}>View Details</Text>
          </View>
        </TouchableOpacity>

        {/* 🔔 Notifications */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Notifications')}>
          <Text style={styles.attendancePercent}>🔔 Notifications</Text>
        </TouchableOpacity>

        {/* 📘 Homework */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Homework')}>
          <Text style={styles.attendancePercent}>📘 Homework</Text>
        </TouchableOpacity>

        {/* 📝 Fees Status */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Fees')}>
          <Text style={styles.attendancePercent}>📝 Fees Status</Text>
          <View style={styles.detailsButton}>
            <Text style={styles.detailsText}>Check Now</Text>
          </View>
        </TouchableOpacity>

        {/* 🎯 Progress Tracker */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Progress')}>
          <Text style={styles.attendancePercent}>🎯 Progress Tracker</Text>
        </TouchableOpacity>

        {/* 🧪 Quiz Corner */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Quiz')}>
          <Text style={styles.attendancePercent}>🧪 Quiz Corner</Text>
        </TouchableOpacity>

        {/* 👨‍🏫 My Teachers */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Teachers')}>
          <Text style={styles.attendancePercent}>👨‍🏫 My Teachers</Text>
        </TouchableOpacity>

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
