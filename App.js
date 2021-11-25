import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import CallLog from './CallLog';

export default function App() {
  return (
    <View style={styles.container}>
      <CallLog/>
       {/* <Text style={styles.Inputlog}>Log In</Text>
      <View style={styles.input}>
        <TextInput placeholder="UserName" style={styles.inputContainer} />
        <TextInput placeholder="Password" style={styles.inputContainer} />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },

  input: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    flex: 1,
    borderWidth: 0.5,
    alignItems: "center",
    width: 350,
    justifyContent: "center",
    borderRadius: 25,
  },
  Inputlog: {
    flex: 1,
    fontSize: 20,
    marginLeft: 30,

  }
});