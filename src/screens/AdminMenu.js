import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button, Text, Card, Divider } from "react-native-paper";
import { firebaseAuthService } from "../services/firebaseAuthService";

const AdminMenu = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await firebaseAuthService.logoutUser();
      navigation.replace("Login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Admin Dashboard</Text> */}
      <View style={{flex: 1}}></View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 15,
          paddingHorizontal: 10,
        }}
      >
        <Card
          style={styles.card}
          onPress={() => navigation.navigate("AdminReferenceGuides")}
        >
          <Card.Content>
            <Text style={styles.sectionTitle}>Reference Management</Text>
            <Text style={styles.description}>
              Manage age-specific reference ranges for immunoglobulin tests.
            </Text>
            {/* <Button
              mode="contained"
              onPress={() => navigation.navigate("AdminReferenceGuides")}
              style={styles.button}
              icon="book-open-variant"
            >
              Manage Reference Guides
            </Button> */}
          </Card.Content>
        </Card>

        <Card
          style={styles.card}
          onPress={() => navigation.navigate("AdminTestInput")}
        >
          <Card.Content>
            <Text style={styles.sectionTitle}>Test Results Management</Text>
            <Text style={styles.description}>
              Input and manage patient test results with automatic validation.
            </Text>
            {/* <Button
              mode="contained"
              onPress={() => navigation.navigate("AdminTestInput")}
              style={styles.button}
              icon="database-plus"
            >
              Input Test Results
            </Button> */}
          </Card.Content>
        </Card>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 15,
          paddingHorizontal: 10,
        }}
      >
        <Card style={styles.card} onPress={() => navigation.navigate("PatientSearch")}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Patient Analysis</Text>
            <Text style={styles.description}>
              Search patients and analyze immunoglobulin trends over time. View
              color-coded changes (↑↓↔) with percentage differences.
            </Text>
            {/* <Button
              mode="contained"
              onPress={() => navigation.navigate("PatientSearch")}
              style={styles.button}
              icon="trending-up"
            >
              Patient Trends Analysis
            </Button> */}
          </Card.Content>
        </Card>

        <Card style={styles.card} onPress={() => navigation.navigate("TestResults")}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Test Results Overview</Text>
            <Text style={styles.description}>
              View comprehensive test results for all patients.
            </Text>
            {/* <Button
              mode="contained"
              onPress={() => navigation.navigate("TestResults")}
              style={styles.button}
              icon="chart-line"
            >
              View All Test Results
            </Button> */}
          </Card.Content>
        </Card>
      </View>

      <View style={{flex: 1}}></View>

      <Button
        mode="outlined"
        onPress={handleLogout}
        style={[styles.button, styles.logoutButton]}
        icon="logout"
      >
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#2196F3",
  },
  card: {
    flex: 1,
    height: "100%",
    marginHorizontal: 4,
    marginBottom: 16,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  button: {
    marginVertical: 8,
    paddingVertical: 8,
  },
  logoutButton: {
    marginTop: 8,
    marginBottom: 24,
  },
});

export default AdminMenu;
