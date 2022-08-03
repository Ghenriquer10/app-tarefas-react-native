import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

export default function Tarefas({data, deleteItem}){
    return(
        <View key={data.key} style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={deleteItem}>
                <FontAwesome name='trash' size={25} color='#fff'/> 
            </TouchableOpacity>
            <Text style={styles.title}>{data.item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(196,196,196, 0.20)',
        height: 50,
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 4,
        flexDirection: 'row',
    }, 
    button:{
        backgroundColor: '#223E99',
        width: 40,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%'
    },
    title:{
        fontSize: 20
    }
})