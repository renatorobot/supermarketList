import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native'


export default function App1(){

  const data = [

    {id: 1, title: 'Arroz', check: false},
    {id: 2, title: 'Farinha', check: false}

  ]


  return (
    <View >

      <View >

        <TextInput
          placeholder="Adicionar produto"

        />
        <TouchableOpacity>
          <Text>+</Text>
        </TouchableOpacity>

      </View>

      <View>
        <FlatList 
        data={data} 
        renderItem={({item}) =>(

          <Text>{item.title}</Text>

        )}
        />
      </View>

    </View>
  );

}