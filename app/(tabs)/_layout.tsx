import { Stack, Tabs } from "expo-router";
import Ionicons  from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return( 
  <Tabs

    screenOptions={{tabBarActiveTintColor: '#9370DB',//cor do icone do botao

      headerStyle:{
        backgroundColor:'#E6E6FA', //cor do header
      }, 
      
      headerShadowVisible: false, headerTintColor: '#9370DB', //cor do texto do header 

      tabBarStyle:{
        backgroundColor: '#E6E6FA' //cor da tab bar - parte de baix onde fica o icone
      }
  }}
  >

    <Tabs.Screen name = "index" options={{ title: 'TechMarias.', 
      tabBarIcon:({color, focused})=> (
      < Ionicons name={focused ? 'desktop-outline' : 'desktop-outline'} color={color} size ={24}/>)// icone 
    }}
    
    />

    <Tabs.Screen name = "about" options={{ title: 'Sobre Nós', 
      tabBarIcon:({color, focused})=> (
      < Ionicons name={focused ? 'code-outline' : 'code-slash-outline'} color={color} size ={24}/>) //icone
    }}/>

    <Tabs.Screen name = "toDoList" options={{ title: 'Lista de Tarefas', 
      tabBarIcon:({color, focused})=> (
      < Ionicons name={focused ? 'list-circle-outline' : 'list-circle-sharp'} color={color} size ={24}/>) //icone
    }}/>
  </Tabs>
  
    );
}
