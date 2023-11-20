import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


function FavMusic() {
  return (
    <>
    
     <Image
          source={require('../../img/zecapagodinho2.jpg')}
          style={Styles.box}
        />       
    </>
  )
};

export default FavMusic;

const Styles = StyleSheet.create({
    box:{
      height:150,
      width:150,
      borderRadius:15,
      marginLeft:15
      
    },

    text: {
      fontSize:12,
      fontWeight: '700',
      marginTop:'9%',
      marginRight: 15
    }
   
});
