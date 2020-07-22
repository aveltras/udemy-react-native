import React from 'react';
import {View, FlatList, Text} from 'react-native';

import TaskTile from './TaskTile';

export default ({ deleteTask, toggleCompleted, tasks }) => {

  const renderItem = ({item}) => <TaskTile title={item.title}
                                           id={item.id}
                                           completed={item.completed}
                                           deleteTask={deleteTask}
                                           toggleCompleted={toggleCompleted} />;
  
  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
