import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { TextInput, View } from 'react-native';
interface Props{
  className?:string
}

const Search = ({className}:Props) => {
  return (
    <View className={className}>
      <Feather name="search" size={24} color="black" className='absolute left-[1rem] top-2'/>
      <TextInput 
      className='px-[3rem]'
      placeholder='Search for hotels, apartments, etc'
      />
      <Ionicons name="filter" size={24} color="gray" className='absolute right-[1rem] top-2'/>
    </View>
  );
}

export default Search;
