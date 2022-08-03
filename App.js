import React, { useState } from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput,
  FlatList 
} from 'react-native';

import {FontAwesome} from '@expo/vector-icons';
import Tarefas from './src/Tarefas';

export default function App() {

  const [tarefa, setTarefa] = useState();
  const [list, setList] = useState([])

  function handleAdd(){
    if(tarefa === ''){
      alert('Insira uma tarefa no campo!')
      return
    }

    const data = {
      key: Date.now(),
      item: tarefa
    }

    setList(oldArray => [data, ...oldArray])

    setTarefa('')

  }

  function handleDelete(item){
    let filterItemList = list.filter((tarefa) => {
      return (tarefa.item !== item)
    })
    
    setList(filterItemList)
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
      {list.length === 0 ? (
        <Text style={styles.noList}>Não existem tarefas! Crie uma :D</Text>
      ) : 
        <FlatList
          data={list}
          keyExtractor={(item) => {item.key}}
          renderItem={({item}) => <Tarefas data={item} deleteItem={() => handleDelete(item.item)}/>}
          style={styles.list}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop: 28,
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
    backgroundColor:'#223E99',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 4
  },
  noList:{
    flex: 1,
    color: '#fff',
    textAlign:'center',
    fontSize: 20,
    marginTop: 100
  },
  list:{
    flex: 1,
    backgroundColor:'#fff',
    paddingStart: '4%',
    paddingEnd: '4%',
  }
});
