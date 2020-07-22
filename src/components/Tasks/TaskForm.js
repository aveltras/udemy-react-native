import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTask} from '../../redux/actions';

export default () => {

  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onPress = () => {
    if (title.length) {
      dispatch(addTask(title));
      setTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput value={title}
                 onChangeText={val => setTitle(val)}
                 style={styles.input} />
      <Button onPress={onPress} title="Ajouter" color="#ffcccc" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  input: {
    flex: 5,
    borderWidth: 1,
    paddingLeft: 10,
    marginRight: 15,
  },
});
