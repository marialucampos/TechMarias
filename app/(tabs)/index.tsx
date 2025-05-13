import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import ImageViewer from '@/app/components/ImageViewer';
import Button from '@/app/components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import IconButton from '@/app/components/IconButton';
import CircleButton from '@/app/components/CircleButton';



const PlaceholderImage = require('@/assets/images/mulher2.png');


export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Voce nao selecionou nenhuma imagem!');

    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
  };

  const onSaveImageAsync = async () => {
  };

  return (
    <View style={xuxu.container}>
      <View style={xuxu.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={xuxu.optionsContainer}>
          <View style={xuxu.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={xuxu.footerContainer}>
          <Button theme="primary" label="Escolha a foto" onPress={pickImageAsync} />
          <Button label="Use esta foto" onPress={() => setShowAppOptions(true)} />
        </View>
      )}

    </View>
  );

}
const xuxu = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: "center",
  },

  imageContainer: {
    flex: 1,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },

  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },

});