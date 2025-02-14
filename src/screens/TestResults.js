import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import {
  Text,
  Card,
  Title,
  Paragraph,
  DataTable,
  Button,
  Portal,
  Modal,
  ActivityIndicator,
} from "react-native-paper";
import {
  getReferenceRange,
  IMMUNOGLOBULIN_UNITS,
  formatValue,
} from "../constants/referenceRanges";
import { firebaseService } from "../services/firebaseService";

const TestResults = ({ route, navigation }) => {
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTest, setSelectedTest] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    loadTestResults();
  }, []);

  const loadTestResults = async () => {
    try {
      const results = await firebaseService.getAllTestResults();
      if (results) {
        setTestResults(results);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error loading test results:", error);
      setLoading(false);
    }
  };

  const getInterpretation = (value, type, referenceRange) => {
    if (!referenceRange) return { status: "Unknown", color: "#666" };

    const range = referenceRange[type];
    if (!range) return { status: "Unknown", color: "#666" };

    if (type === "IgE") {
      if (value > range.max) return { status: "High", color: "#f44336" };
      return { status: "Normal", color: "#4caf50" };
    }

    if (value < range.min) return { status: "Low", color: "#ff9800" };
    if (value > range.max) return { status: "High", color: "#f44336" };
    return { status: "Normal", color: "#4caf50" };
  };

  const calculateTrend = (currentValue, previousValue) => {
    if (!previousValue) return { symbol: "−", color: "#666" };

    const percentChange =
      ((currentValue - previousValue) / previousValue) * 100;
    if (Math.abs(percentChange) < 5) return { symbol: "↔", color: "#666" };
    if (percentChange > 0) return { symbol: "↑", color: "#f44336" };
    return { symbol: "↓", color: "#2196f3" };
  };

  const renderTestDetail = (test) => {
    // بيانات ثابتة للاستخدام إذا لم تكن هناك بيانات فعلية
    const defaultSelectedTest = {
      patientAge: 30,
      results: {
        IgG: 1200,
        IgA: 200,
        IgM: 150,
        IgE: 90,
      },
      previousResults: {
        IgG: 1100,
        IgA: 190,
        IgM: 140,
        IgE: 80,
      },
      notes: "This is a sample note for clinical interpretation.",
    };

    const selectedTest = defaultSelectedTest;
    const referenceRange = getReferenceRange(selectedTest.patientAge) || {
      IgG: { min: 700, max: 1600 },
      IgA: { min: 70, max: 400 },
      IgM: { min: 40, max: 230 },
      IgE: { max: 100 },
    };

    if (!selectedTest.results) {
      return <Text>No test details available.</Text>;
    }

    return (
      <Card style={styles.detailCard}>
        <Card.Content>
          <Title>Test Details</Title>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Test</DataTable.Title>
              <DataTable.Title numeric>Value</DataTable.Title>
              <DataTable.Title numeric>Reference</DataTable.Title>
              <DataTable.Title>Status</DataTable.Title>
              <DataTable.Title>Trend</DataTable.Title>
            </DataTable.Header>

            {Object.entries(selectedTest.results).map(([type, value]) => {
              const interpretation = getInterpretation(
                value,
                type,
                referenceRange
              ) || {
                status: "N/A",
                color: "gray",
              };
              const trend = calculateTrend(
                value,
                selectedTest.previousResults?.[type] || null
              ) || { symbol: "−", color: "gray" };

              return (
                <DataTable.Row key={type}>
                  <DataTable.Cell>{type}</DataTable.Cell>
                  <DataTable.Cell numeric>
                    {formatValue(value, IMMUNOGLOBULIN_UNITS?.[type] || "N/A")}
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    {referenceRange[type]
                      ? type === "IgE"
                        ? `≤ ${formatValue(
                            referenceRange[type].max,
                            IMMUNOGLOBULIN_UNITS?.[type] || "N/A"
                          )}`
                        : `${formatValue(
                            referenceRange[type].min,
                            IMMUNOGLOBULIN_UNITS?.[type] || "N/A"
                          )} - ${formatValue(
                            referenceRange[type].max,
                            IMMUNOGLOBULIN_UNITS?.[type] || "N/A"
                          )}`
                      : "N/A"}
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={{ color: interpretation.color }}>
                      {interpretation.status}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={{ color: trend.color, fontSize: 18 }}>
                      {trend.symbol}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </DataTable>

          <View style={styles.interpretationContainer}>
            <Title style={styles.interpretationTitle}>
              Clinical Interpretation
            </Title>
            <Paragraph>
              {Object.entries(selectedTest.results)
                .map(([type, value]) => {
                  const interpretation = getInterpretation(
                    value,
                    type,
                    referenceRange
                  ) || {
                    status: "N/A",
                  };
                  const trend = calculateTrend(
                    value,
                    selectedTest.previousResults?.[type] || null
                  ) || { symbol: "−" };

                  return `${type}: ${interpretation.status}${
                    trend.symbol !== "−" ? ` (${trend.symbol})` : ""
                  }\n`;
                })
                .join("")}
            </Paragraph>
          </View>

          <View style={styles.notesContainer}>
            <Title style={styles.notesTitle}>Notes</Title>
            <Paragraph>
              {selectedTest.notes || "No clinical notes available."}
            </Paragraph>
          </View>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ScrollView>
          {testResults.map((test, index) => (
            <Card
              key={index}
              style={styles.card}
              onPress={() => {
                setSelectedTest(test);
                setModalVisible(true);
              }}
            >
              <Card.Content>
                <Title>
                  Test Date: {new Date(test.date).toLocaleDateString()}
                </Title>
                <Paragraph>Patient Age: {test.age} years</Paragraph>
                <Paragraph>Patient ID: {test.patientId}</Paragraph>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      )}

      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          contentContainerStyle={styles.modalContent}
        >
          <ScrollView>
            {selectedTest && renderTestDetail(selectedTest)}
          </ScrollView>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
  detailCard: {
    margin: 10,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    maxHeight: "80%",
  },
  interpretationContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
  },
  interpretationTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  notesContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#fff3e0",
    borderRadius: 5,
  },
  notesTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default TestResults;
