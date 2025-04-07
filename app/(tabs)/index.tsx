import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';
import {Image} from 'expo-image';import ImageViewer from '@/app/components/ImageViewer';
import Button from '@/app/components/Button'; 

const PlaceholderImage = require('@/assets/images/mulher2.png');


export default function Index() {
  return (
    <View style={xuxu.container}>
        <View style={xuxu.imageContainer}>
            <ImageViewer imgSource={PlaceholderImage}/>
        </View>
        <View style={xuxu.footerContainer}>
            <Button theme="primary" label="Escolha a foto" />
            <Button label= "Use esta foto" />
        </View>
    </View>
  );
}
const xuxu = StyleSheet.create({
container: {
  flex: 1,
        backgroundColor: '#E6E6FA',
        alignItems: "center",
},

imageContainer:{
  flex: 1,
},

footerContainer: {
  flex:1/3,
  alignItems: 'center',
}

});