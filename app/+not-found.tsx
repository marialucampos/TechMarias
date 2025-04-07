import {View, StyleSheet} from 'react-native'; 
import {Link, Stack} from 'expo-router'; 

export default function NotFoundscreen(){
    return(
        <>
        <Stack.Screen options={{title: 'OOPS not fund'}}/>
        <View style={xuxu.container}>
            <Link href="/" style={xuxu.button}>Voltar para tela inicial!</Link>
        </View>
</>
    );
}
const xuxu = StyleSheet.create({
    container: {
      flex: 1,
            backgroundColor: '#E6E6FA',
            justifyContent: "center",
            alignItems: "center",
    },
    button:{
      fontSize: 10,
      textDecorationLine: 'underline',
      color: '#4B0082',
    
    },

});