import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SecondScreen = () => {
  const [text, setText] = useState('');

  const handleInputChange = (inputText) => {
    setText(inputText);
  };

  const handleButtonPress = () => {
    // Faça algo com o valor do input
    console.log('Texto inserido:', text);
  };

  return (
    <>
      <View style={Styles.conatiner}>
        <Text style={Styles.text}>Search</Text>
      </View>

      <View style={Styles.input_search}>
        <View style={Styles.search}>
          <Ionicons name="search" size={20} color="white" style={Styles.icon} />
          <TextInput
            style={Styles.input}
            placeholder="What do you want to listen to?"
            onChangeText={handleInputChange}
            value={text}
          />
        </View>
      </View>
    </>
  );
};

export default SecondScreen;

const Styles = StyleSheet.create({
  conatiner: {
    alignItems: 'flex-start',
    marginTop: '20%',
  },
  text: {
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 10,
  },

  input: {
    marginTop: 15,
    height: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
    marginLeft: 10, 
    marginRight: 30, 
    fontWeight: '600',
    fontSize: 16,
    flex: 1,
  },

  search: {
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 25,
    alignItems: 'center',
    borderRadius:10
  },
  icon: {
    marginLeft: 10,
    marginRight: -15,
  },

  input_search: {
    height: 30,
  },
});
