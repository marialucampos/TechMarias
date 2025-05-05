import React from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Image, Linking } from 'react-native';
import { useBuscarLivros } from '@/hooks/useBuscarLivros';



export default function App() {
  const { busca, setBusca, resultados, buscarLivros } = useBuscarLivros();

  const renderResultado = ({ item }: { item: any }) => {
    const volumeInfo = item.volumeInfo || {};
    const imageUrl = volumeInfo.imageLinks?.thumbnail;

    return (
      <View style={styles.resultado}>
        <View style={styles.imageContainer}>
          {imageUrl ? (
            <Image source={{ uri: imageUrl }} style={styles.image} />
          ) : (
            <View style={styles.placeholderImage} />
          )}
        </View>
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
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Livros</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Digite o nome de um livro, ex: Java for Students..."
        value={busca}
        onChangeText={setBusca}
        placeholderTextColor="#A9A9A9"
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
    borderColor: '#C0C0C0',
    borderRadius: 10,
    padding: 12,
    width: '100%',
    marginBottom: 15,
    fontSize: 16,
    color: '#4B0082',
    backgroundColor: '#F5F5F5',
  },
  resultados: {
    marginTop: 20,
  },
  resultado: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  imageContainer: {
    width: 80,
    height: 120,
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#d3d3d3',
    borderRadius: 8,
  },
  link: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B0082',
    marginBottom: 5,
  },
  snippet: {
    fontSize: 14,
    color: '#666',
  },
});
