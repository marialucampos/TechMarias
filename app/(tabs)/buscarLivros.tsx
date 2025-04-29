import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Image, Alert, Linking } from 'react-native';

export default function App() {
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState<any[]>([]);

  async function buscarLivros() {
    if (busca.trim() === ' ') {
      Alert.alert('Erro', 'Digite um termo para buscar.');
      return;
    }

    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(busca)}`);
      const data = await response.json();
      setResultados(data.items || []);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível buscar os livros.');
    }
  }

  function renderResultado({ item }: { item: any }) {
    const volumeInfo = item.volumeInfo || {};

    return (
      <View style={styles.resultado}>
        <View style={{ flex: 1 }}>
          <Text
            style={styles.link}
            onPress={() => volumeInfo.infoLink && Linking.openURL(volumeInfo.infoLink)}
          >
            {volumeInfo.title}
          </Text>
          <Text style={styles.snippet}>
            {volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Autor desconhecido'}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Livros</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Digite o nome do livro da sua area"
        value={busca}
        onChangeText={setBusca}
    
      />
      <Button title="Buscar" onPress={buscarLivros} color="#4B0082" />

      <FlatList
        data={resultados}
        renderItem={renderResultado}
        keyExtractor={(item, index) => String(index)}
        style={styles.resultados}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B0082',
    marginBottom: 20,
    textAlign: 'center',
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#4B0082',
    borderRadius: 10,
    padding: 12,
    width: '100%',
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#E6E6FA',
    
  },
  resultados: {
    marginTop: 20,
  },
  resultado: {
    backgroundColor: '#E6E6FA',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  link: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B0082',
    marginBottom: 5,
  },
  button:{
    backgroundColor:'#4B0082'
  },
  snippet: {
    fontSize: 14,
    color: '#666',
  },
});
