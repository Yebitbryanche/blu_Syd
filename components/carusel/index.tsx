import { propertyData } from '@/Data/property';
import React from 'react';
import { FlatList, View } from 'react-native';
import caruselItem from './caruselItem';

const index = () => {
  return (
    <View>
      <FlatList data={propertyData} renderItem={caruselItem}/>
    </View>
  );
}

export default index;
