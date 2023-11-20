import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";

function FiltroHeader() {
  const onPressHandler = () => {
    console.log("Botão Pressionado!");
  };
  
  return ( 
    <View style={Styles.container}>
      <TouchableOpacity onPress={onPressHandler}>
     <Text>Music</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={onPressHandler}>
     <Text>Podcasts</Text>
     </TouchableOpacity>
    </View>    
    )
};

export default FiltroHeader;

const Styles = StyleSheet.create({
  container: {
fontSize:16,
fontWeight:300,
flexDirection:'row',
marginRight:'50%',
alignItems:'center',
justifyContent:'space-around',
paddingLeft:17,
marginTop:'6%',
  }
});