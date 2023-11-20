import React from 'react';
import BoxHeader from '../BoxHeader';
import { StyleSheet, Text, View, Image } from 'react-native';

function Gambiarra() {
    return ( 
        <>
        <View style ={Styles.gambiarra}>
        <BoxHeader/>
        <BoxHeader/>
         </View>
     
         <View style ={Styles.gambiarra}>
        <BoxHeader/>
        <BoxHeader/>
         </View>
     
         <View style ={Styles.gambiarra}>
        <BoxHeader/>
        <BoxHeader/>
            
         </View>

         </>
     )
}
export default Gambiarra;


const Styles = StyleSheet.create({
gambiarra:{
  flexDirection: 'row',
  marginTop:20,
  marginBottom:-40,
}
});