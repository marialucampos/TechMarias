import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native"

export default function RootLayout() {
    
  return( 
    <>
    <StatusBar style="light"/>
  <Stack
      screenOptions={{
      headerStyle:{backgroundColor: '#E6E6FA',},
      headerShadowVisible: false,
      headerTintColor:'#4B0082',
    }}
  
  >

    <Stack.Screen name = "(tabs)" options={{ headerShown: false}}/>
    <Stack.Screen name = "+not-founf" options={{}}/>
    </Stack>
    </>
    );

}