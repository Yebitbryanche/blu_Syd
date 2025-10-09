import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

interface DataProps{
    title:string
}

const ProductFilters = () => {
    const data = [
        {title:"All"},
        {title:"Popular feeds"},
        {title:"Recently added"},
        
    ]
  return (
    <View>
      <FlatList
      data={data}
      renderItem={({item}) =>
        <TouchableOpacity className='rounded-full py-3 px-5 border border-1 border-blue-500 mx-3'>
          <Text className='text-blue-600 font-bold text-lg'>{item.title}</Text>
        </TouchableOpacity>
      }
      horizontal = {true}
      />
    </View>
  );
}

export default ProductFilters;
