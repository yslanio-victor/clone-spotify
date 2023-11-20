import React from 'react';
import {View, StyleSheet,Text, ScrollView, Image} from "react-native";
import FavMusic from './imagem';

function Descricao() {
  return (
    <>
    
 
    <View style = {Styles.align}>

    <FavMusic/>

  

    <View>
    <Text style={{
        fontSize:10,
        fontWeight:'700',
        color:'green',
        marginTop:10
    }}>Business & Technology</Text>
   
    <Text style={{
        fontSize:12,
        fontWeight:'500',
        marginTop:6
    }}   
    >Portal Programador</Text>

    <Text style={{
        fontSize:12,
        fontWeight:'300',
        marginTop:6
    }}
    >Show . Serratec</Text>

    </View>
    </View>
 
    </>
  )
};

export default Descricao;

const Styles = StyleSheet.create({
    align:{
        alignItems:'center'
    },
text: {
    fontSize:12,
    fontWeight: '700',
    marginTop:'9%',
    marginRight: 15,
    flexDirection:'column'
  },

 container:{
    marginTop:'5%',
    marginLeft:'1%',
    flexWrap:'wrap',
    flexDirection:'row',
  }
})