import React from 'react';
import {View, Text, TextInput,Button,FlatList,TouchableOpacity, StyleSheet} from 'react-native';
import {useTarefa} from '../hooks/useTarefas';
import {Link} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function App() {
 const {tarefas, novaTarefa, setNovaTarefa,adicionarTarefa,removerTarefa} = useTarefa();

 return (
 <View style={chuchu.container}>
    <Text style={chuchu.titulo}>Lista de Projetos</Text>

    <View style = {chuchu.inputContainer}>
        <TextInput
            style={chuchu.input}
            placeholder="Adicione um novo projeto: "
            value={novaTarefa}
            onChangeText={setNovaTarefa}
        />
       <TouchableOpacity onPress={adicionarTarefa}>
          <Ionicons name="add-circle-outline" size={32} color="#9370DB" />
        </TouchableOpacity>
    </View>

    <FlatList
        data = {tarefas}
        keyExtractor = {(item) => item.id}
        renderItem = {({item})=> (
            <View style = {chuchu.tarefaContainer}>
                <Text style = {chuchu.tarefaTexto}> {item.texto}</Text>
                <TouchableOpacity onPress = {() => removerTarefa (item.id)}>
                    <Text style = {chuchu.remover}></Text>
                    <Ionicons name="remove-circle-outline" size={24} color="#9370DB" />
                    </TouchableOpacity>
                    </View>
        )}
    />
 </View>
 );
}

const chuchu = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: '#E6E6FA' 
    },

    titulo: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: 20, 
        color: '#4B0082'
    },

    inputContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 10,
    },

    input: { 
        flex: 1, 
        borderWidth: 1, 
        borderColor: '#4B0082', 
        padding: 10, 
        borderRadius: 5, 
        marginRight: 10, 
        color: '#4B0082'
    },

    
    iconButton: {
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 40, 
        width: 40, 
      },

    tarefaContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: '#F8F8FF', 
        padding: 15, 
        marginBottom: 5, 
        borderRadius: 5, 
        shadowColor: '#4B0082', 
        shadowOpacity: 0.1, 
        shadowRadius: 2, 
        elevation: 2 
    },

    tarefaTexto: { 
        fontSize: 16, 
        color: '#4B0082' 
      },
    remover: { fontSize: 18, color: 'red' },
});