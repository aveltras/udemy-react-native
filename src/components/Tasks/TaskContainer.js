import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {getTasks} from '../../redux/selectors';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskCounter from './TaskCounter';
import FloatingButton from './../_Shared/FloatingButton';

export default () => {

  const tasks = useSelector(getTasks);
  console.log(tasks);
  
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);
    
  return (
    <View style={styles.container}>
      {isFormDisplayed && <TaskForm />}
      <View style={styles.counters}>
        <TaskCounter title="Tâches créées" count={tasks.length} align="flex-start" />
        <TaskCounter title="Tâches complétées" count={tasks.filter(task => task.completed).length} align="flex-end" />
      </View>
      <TaskList tasks={tasks} />
      <FloatingButton label={isFormDisplayed ? "x": "+"} onPress={() => setIsFormDisplayed(!isFormDisplayed)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
  },
  counters: {
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
