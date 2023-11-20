import { View, Text, StyleSheet,} from 'react-native'
import React from 'react'

const TerceiraRota = () => {
  return (
    <View style ={Styles.fundo}>
      <Text style = {Styles.container}>Building...
    
      </Text>
    </View>
  )
}

export default TerceiraRota;

const Styles = StyleSheet.create({
  container: {
    fontSize: 30,
    textAlign:'center',
    marginTop:'100%'
  },

  fundo:{
    backgroundColor:'Black'
  }

});