
import React from 'react'; 
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function StudentHomeScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Student Dashboard</Text>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Student ID Card */}
      <View style={styles.studentIDCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={styles.studentName}>John Doe</Text>
            <Text style={styles.studentDetails}>ID: 20230001</Text>
            <Text style={styles.studentDetails}>Class: 10-A</Text>
            <Text style={styles.studentDetails}>Section: Blue House</Text>
          </View>

          <Image
            source={require('../assets/student-pic.png')}
            style={styles.studentLogo}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Grid and Footer Wrapper */}
      <View style={styles.body}>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TimeTable')}>
            <Text style={styles.cardText}>📅 TIME TABLE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Attendance')}>
            <Text style={styles.cardText}>📊 Attendance</Text>
            <View style={styles.detailsButton}>
              <Text style={styles.detailsText}>View Details</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Notifications')}>
            <Text style={styles.cardText}>🔔 Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Homework')}>
            <Text style={styles.cardText}>📘 Homework</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Fees')}>
            <Text style={styles.cardText}>📝 Fees Status</Text>
            <View style={styles.detailsButton}>
              <Text style={styles.detailsText}>Check Now</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Progress')}>
            <Text style={styles.cardText}>🎯 Progress Tracker</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Quiz')}>
            <Text style={styles.cardText}>🧪 Quiz Corner</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Teachers')}>
            <Text style={styles.cardText}>👨‍🏫 My Teachers</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 MVM Public School | v1.0</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#e53935',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  studentIDCard: {
    backgroundColor: '#ffffff',
    margin: 16,
    borderRadius: 12,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  studentName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 8,
  },
  studentDetails: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  studentLogo: {
    width: 120,
    height: 120,
    borderRadius: 35,
    marginLeft: 10,
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '48%',
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 8,
  },
  detailsButton: {
    backgroundColor: '#1e88e5',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  detailsText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginTop: 20,
  },
  footerText: {
    fontSize: 21,
    color: '#777',
  },
});
