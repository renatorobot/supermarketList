import React, {useState, useReducer} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {sha256} from  'react-native';


export default function App1(){

  const initialState = [];

 const reducer = (state, action) => {
    
  switch(action.type){

    case 'ADD':
      return [...state, action.item]
    case 'CHECK':
      return state.map(item => {
        if(item.id === action.id){

          return{...item, check: !item.check}

        }else{

          return item;

        }
      });
    case 'REMOVE':
      return;
    default:
      return state; 
  }

  }

  const [products, setProducts] = useState('');
  const [state, dispatch] = useReducer (reducer, initialState);
  
  return (
    <View >

      <View >

        <TextInput
          placeholder="Adicionar produto"
          value={products}
          onChangeText={text => {setProducts(text)}}
        />
        <TouchableOpacity
        onPress={() =>{
         
          dispatch({type: 'ADD', item: {
            id: "1".products, title: products, check: false,
          }})
          
          setProducts('');
        }}
        
        >
          <Text>+</Text>
        </TouchableOpacity>

      </View>

      <View>
        <FlatList 
        data={state} 
        renderItem={({item}) =>(

          <TouchableOpacity 
          onPress = {
            ()=> {
              dispatch({type: 'CHECK', item: {
                id: item.id,
              }})
            }
          }
          >
            <Text>{item.id}</Text>
          </TouchableOpacity>

        )}
        />
      </View>

    </View>
  );

}