import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import Header from './src/components/_Shared/Header';
import TaskContainer from './src/components/Tasks/TaskContainer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TaskContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 25,
    paddingRight: 25,
  },
});
