import { View } from 'react-native';
import { ToDoList } from './src/main';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor= "#AA6BF3"/>
      <ToDoList/>
      
    </View>
  );
}

