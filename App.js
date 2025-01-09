import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider,  MD3LightTheme as DefaultTheme } from "react-native-paper";

import Login from "./src/screens/Login";
import Registration from "./src/screens/Registration";
import PatientForm from "./src/screens/PatientForm";
import TestResults from "./src/screens/TestResults";
import AdminReferenceGuides from "./src/screens/AdminReferenceGuides";
import AdminTestInput from "./src/screens/AdminTestInput";
import AdminMenu from "./src/screens/AdminMenu";
import PatientSearch from "./src/screens/PatientSearch";
import CombinedResultsSearch from "./src/screens/CombinedResultsSearch";
import LabAnalysisForm from "./src/screens/LabAnalysisForm";

const Stack = createNativeStackNavigator();

export default function App() {
  
  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      primary: "rgb(0, 104, 116)",
      onPrimary: "rgb(255, 255, 255)",
      primaryContainer: "rgb(151, 240, 255)",
      onPrimaryContainer: "rgb(0, 31, 36)",
      secondary: "rgb(74, 98, 103)",
      onSecondary: "rgb(255, 255, 255)",
      secondaryContainer: "rgb(205, 231, 236)",
      onSecondaryContainer: "rgb(5, 31, 35)",
      tertiary: "rgb(82, 94, 125)",
      onTertiary: "rgb(255, 255, 255)",
      tertiaryContainer: "rgb(218, 226, 255)",
      onTertiaryContainer: "rgb(14, 27, 55)",
      error: "rgb(186, 26, 26)",
      onError: "rgb(255, 255, 255)",
      errorContainer: "rgb(255, 218, 214)",
      onErrorContainer: "rgb(65, 0, 2)",
      background: "rgb(250, 253, 253)",
      onBackground: "rgb(25, 28, 29)",
      surface: "rgb(250, 253, 253)",
      onSurface: "rgb(25, 28, 29)",
      surfaceVariant: "rgb(219, 228, 230)",
      onSurfaceVariant: "rgb(63, 72, 74)",
      outline: "rgb(111, 121, 122)",
      outlineVariant: "rgb(191, 200, 202)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(46, 49, 50)",
      inverseOnSurface: "rgb(239, 241, 241)",
      inversePrimary: "rgb(79, 216, 235)",
      elevation: {
        level0: "transparent",
        level1: "rgb(238, 246, 246)",
        level2: "rgb(230, 241, 242)",
        level3: "rgb(223, 237, 238)",
        level4: "rgb(220, 235, 237)",
        level5: "rgb(215, 232, 234)",
      },
      surfaceDisabled: "rgba(25, 28, 29, 0.12)",
      onSurfaceDisabled: "rgba(25, 28, 29, 0.38)",
      backdrop: "rgba(41, 50, 52, 0.4)",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#2196F3",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "E-Laboratory Login" }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{ title: "Register New Account" }}
          />
          <Stack.Screen
            name="PatientForm"
            component={PatientForm}
            options={{
              title: "Patient Information",
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="TestResults"
            component={TestResults}
            options={{ title: "Test Results" }}
          />
          <Stack.Screen
            name="AdminMenu"
            component={AdminMenu}
            options={{
              title: "Admin Dashboard",
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="AdminReferenceGuides"
            component={AdminReferenceGuides}
            options={{ title: "Reference Guides Management" }}
          />
          <Stack.Screen
            name="AdminTestInput"
            component={AdminTestInput}
            options={{ title: "Admin Test Input" }}
          />
          <Stack.Screen
            name="PatientSearch"
            component={PatientSearch}
            options={{ title: "Patient Search" }}
          />
          <Stack.Screen
            name="CombinedResultsSearch"
            component={CombinedResultsSearch}
            options={{ title: "Patients & Test Results" }}
          />
          <Stack.Screen
            name="LabAnalysisForm"
            component={LabAnalysisForm}
            options={{ title: "Lab Analysis" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
