import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default ({ title, count }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  count: {
    fontWeight: "bold",
  },
});
