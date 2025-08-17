import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
interface ButtonItems{
    className?:string
}

export interface ButtonTypes{
    title:string;
    icon?:any;
}

const button_data = [
  {
    title:"Guest House",
    icon:<FontAwesome name="home" size={24}/>
  },
  {
    title:"Car",
    icon:<Ionicons name="car-sport-outline" size={24} />
  },
  {
    title:"Hotel",
    icon:<FontAwesome6 name="hotel" size={24} />
  }
]

const FilterButton = ({className}:ButtonItems) => {
  const [activeFilter, setActiveFilter] = useState(0)

  const handleActiveState = (index:number) =>{
   setActiveFilter(index)
  }
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      <View className='flex  flex-row pb-2'>
      {
        button_data.map((item, index)=>(
          <TouchableOpacity onPress={() => handleActiveState(index)} key={index} 
          className={activeFilter === index?`mx-3 p-3 bg-blue-600 w-[140px] flex justify-center gap-x-3 flex-row rounded-full`:`mx-3 p-3 border border-blue-600 border-2 w-[140px] flex  gap-x-3 flex-row justify-center rounded-full`}>
            <Text className={activeFilter === index?`text-white font-bold`:`text-blue-600 font-bold`}>{item.icon}</Text>
            <Text  className={activeFilter === index?`text-white font-bold text-lg`:`text-lg text-blue-600 font-bold`}>{item.title}</Text>
          </TouchableOpacity>
        ))
      }
      </View>
    </ScrollView>
    
  );
}

export default FilterButton;
