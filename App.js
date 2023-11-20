import { StyleSheet, Text, View } from 'react-native';
import Routes from './scr/Routes/routes';
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
   
    <NavigationContainer >  
      <Routes/>        
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#111111'
  },
});
