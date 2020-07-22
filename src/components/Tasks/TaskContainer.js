import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskCounter from './TaskCounter';

export default () => {

  const [tasks, setTasks] = useState([
    { id: new Date().getTime(), title: "blabla", completed: false },
  ]);

  const addTask = (title) => {
    const newTask = { id: new Date().getTime(), title: title, completed: false };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = id => {
    const allTasks = tasks.filter(task => task.id !== id);
    setTasks(allTasks);
  };

  const toggleTask = (id) => {
    const allTasks = tasks.reduce((acc, task) => {
      acc.push({...task, completed: task.id === id ? !task.completed: task.completed});
      return acc;
    }, []);
    
    setTasks(allTasks);
  };
  
  return (
    <View>
      <TaskForm onAddTask={addTask} />
      <View style={styles.counters}>
        <TaskCounter title="Tâches créées" count={tasks.length} />
        <TaskCounter title="Tâches complétées" count={tasks.filter(task => task.completed).length} />
      </View>
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleCompleted={toggleTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  counters: {
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
