import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';

export default function About() {
  return (
    <View style={xuxu.container}>
    <Text style = {xuxu.text}>O TechMarias é um app que conecta mulheres na tecnologia!</Text>
    </View>
  );
}
const xuxu = StyleSheet.create({
container: {
  flex: 1,
        backgroundColor: '#E6E6FA',
        justifyContent: "center",
        alignItems: "center",
},
text: {
        color: '#4B0082'
},

button:{
  fontSize: 20,
  textDecorationLine: 'underline',
  color: '#4B0082',

}



});