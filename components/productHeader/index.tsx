import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props{
    title:string,  
}

const ProductHeader = ({title}:Props) => {
  return (
    <View className='flex flex-row justify-between p-2'>
        <TouchableOpacity className='p-2 bg-blue-600 rounded-full'>
            <Ionicons name="arrow-back-circle-outline" size={24} color="white" />
        </TouchableOpacity> 
        <Text className='font-bold text-3xl'>{title}</Text>
        <TouchableOpacity>
            <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
    </View>
  );
}

export default ProductHeader;
