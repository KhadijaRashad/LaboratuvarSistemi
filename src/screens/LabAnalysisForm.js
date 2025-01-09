import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button, Text, DataTable } from "react-native-paper";
import { firebaseService } from "../services/firebaseService";

const LabAnalysisForm = ({ route, navigation }) => {
  const { patientData } = route.params;
  const [labData, setLabData] = useState({
    igG: "",
    igA: "",
    igM: "",
    igE: "",
    comments: "",
    analysisDate: new Date().toISOString().split("T")[0],
  });

  const handleSave = async () => {
    try {
      const analysisData = {
        patientData,
        labData,
        timestamp: new Date().toISOString(),
      };
      // Save updated analyses
      await firebaseService.addAnalysis(analysisData);
      alert("Analysis data saved successfully!");
      navigation.navigate("TestResults");
    } catch (error) {
      console.error("Error saving analysis data:", error);
      alert("Error saving data. Please try again.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Laboratory Analysis Form</Text>

      <View style={styles.patientInfo}>
        <Text style={styles.subtitle}>Patient Information:</Text>
        <Text>Name: {patientData.name}</Text>
        <Text>Age: {patientData.age}</Text>
        <Text>Sample Date: {patientData.sampleDate}</Text>
      </View>

      <DataTable style={styles.table}>
        <DataTable.Header>
          <DataTable.Title>Test</DataTable.Title>
          <DataTable.Title>Result (mg/dL)</DataTable.Title>
          <DataTable.Title>Reference Range</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>IgG</DataTable.Cell>
          <DataTable.Cell>
            <TextInput
              value={labData.igG}
              onChangeText={(text) => setLabData({ ...labData, igG: text })}
              keyboardType="numeric"
              style={styles.tableInput}
              mode="outlined"
            />
          </DataTable.Cell>
          <DataTable.Cell>700-1600</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>IgA</DataTable.Cell>
          <DataTable.Cell>
            <TextInput
              value={labData.igA}
              onChangeText={(text) => setLabData({ ...labData, igA: text })}
              keyboardType="numeric"
              style={styles.tableInput}
              mode="outlined"
            />
          </DataTable.Cell>
          <DataTable.Cell>70-400</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>IgM</DataTable.Cell>
          <DataTable.Cell>
            <TextInput
              value={labData.igM}
              onChangeText={(text) => setLabData({ ...labData, igM: text })}
              keyboardType="numeric"
              style={styles.tableInput}
              mode="outlined"
            />
          </DataTable.Cell>
          <DataTable.Cell>40-230</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>IgE</DataTable.Cell>
          <DataTable.Cell>
            <TextInput
              value={labData.igE}
              onChangeText={(text) => setLabData({ ...labData, igE: text })}
              keyboardType="numeric"
              style={styles.tableInput}
              mode="outlined"
            />
          </DataTable.Cell>
          <DataTable.Cell>{"<100"}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>

      <TextInput
        label="Comments"
        value={labData.comments}
        onChangeText={(text) => setLabData({ ...labData, comments: text })}
        multiline
        numberOfLines={4}
        style={styles.input}
        mode="outlined"
      />

      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Save Analysis
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  patientInfo: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
  },
  table: {
    marginBottom: 20,
  },
  tableInput: {
    height: 40,
    backgroundColor: "#fff",
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
    marginBottom: 40,
  },
});

export default LabAnalysisForm;
