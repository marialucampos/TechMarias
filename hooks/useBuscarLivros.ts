import { useState } from 'react';
import { Alert } from 'react-native';

export function useBuscarLivros() {
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState<any[]>([]);

  const buscarLivros = async () => {
    if (busca.trim() === '') {
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
  };

  return {
    busca,
    setBusca,
    resultados,
    buscarLivros,
  };
}
