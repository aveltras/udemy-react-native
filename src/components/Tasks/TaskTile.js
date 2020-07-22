import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {toggleTask, deleteTask} from '../../redux/actions.js';

export default ({ id, title, completed }) => {

  const dispatch = useDispatch();
  
  return (
    <TouchableOpacity onPress={() => dispatch(toggleTask(id))}>
      <View style={styles.container}>
        <Image source={completed
                       ? require("./../../../assets/icon_check.png")
                       : require("./../../../assets/icon_unchecked.png")
                      }
               style={styles.icon}
        />
        <Text style={[styles.title, { color: completed ? "grey": "black"}]}>{title}</Text>
        <TouchableOpacity onPress={() => dispatch(deleteTask(id))}>
          <Image source={require("./../../../assets/icon_delete.png")}
                 style={[styles.icon, styles.iconDelete]}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    marginLeft: 25,
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconDelete: {
    marginLeft: "auto"
  }
});
