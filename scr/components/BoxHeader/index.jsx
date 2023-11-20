import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function BoxHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={require('../../img/zecaPagodinho.jpg')}
          style={styles.image}
        />
         <Text style={styles.text}>Zeca pagodinho Mix</Text>
      </View>
    </View>
  );
}

export default BoxHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: '80%',
    marginTop:25,
    marginLeft: 4,
    marginRight: 4,



  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: '20%',
    marginRight: '20%',
    paddingRight:0,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    
  },
  text: {
    marginLeft: 8,
    fontSize:12,
    fontWeight: '700',
    marginRight: '0%',
    paddingRight:30,
    maxWidth: '80%'
  },
});
