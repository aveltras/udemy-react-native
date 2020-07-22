import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import Header from './src/components/_Shared/Header';
import TaskContainer from './src/components/Tasks/TaskContainer';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <TaskContainer />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 20,
    marginBottom: 20,
  },
});
