import { Text, View, StyleSheet, ImageSourcePropType} from "react-native";
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import ImageViewer from '@/app/components/ImageViewer';
import Button from '@/app/components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import IconButton from '@/app/components/IconButton';
import CircleButton from '@/app/components/CircleButton';
import EmojiPicker from '@/app/components/EmojiPicker';
import EmojiList from "@/app/components/EmojiList";
import EmojiSticker from "@/app/components/EmojiSticker";
import { GestureHandlerRootView } from 'react-native-gesture-handler';




const PlaceholderImage = require('@/assets/images/mulher2.png');


export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

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
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
  };

  return (
    <GestureHandlerRootView style={xuxu.container}>
      <View style={xuxu.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
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
          <Button label="Adicione um emoji" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect ={setPickedEmoji} onCloseModal={(onModalClose)}/>
      </EmojiPicker>

    </GestureHandlerRootView>
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