import React, { useState } from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput 
} from 'react-native';

import {FontAwesome} from '@expo/vector-icons'

export default function App() {

  const [tarefa, setTarefa] = useState();

  function handleAdd(){
    alert(tarefa)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas:</Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder='Digite sua tarefa'
          style={styles.input}
          value={tarefa}
          onChangeText={(text) => setTarefa(text)}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <FontAwesome name='plus' size={20} color="#fff"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop: 28
  },

  title:{
    color: '#fff',
    fontSize: 24,
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 12
  },
  containerInput:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 22
  },
  input:{
    width: '75%',
    backgroundColor:'#fff',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 4
  },
  buttonAdd:{
    marginLeft: 4,
    width: '15%',
    height: 44,
    backgroundColor:'#73ffff',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 4
  }
});
