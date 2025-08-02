import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

interface Props{
    icon:any;
    title:string;
}

const Filter = ({icon, title}:Props) => {
  return (
    <TouchableOpacity className='bg-primary w-[40%]  rounded-full flex items-center gapx-2 flex-row'>
        <Image source={icon}/>
        <Text className='text-white font-bold text-lg'>{title}</Text>
    </TouchableOpacity>
  );
}

export default Filter;
