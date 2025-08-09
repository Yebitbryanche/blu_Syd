import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface Props{
    items:filterDataTypes[]
}

export interface filterDataTypes{
    title:string
    location:string
    ratings:string
    price:string
    image:any

}

const FilterContent = ({items}:Props) => {
  return (
    <View>
        <View className='flex flex-row justify-between pt-2 px-1'>
            <Text className='text-2xl font-bold'>Our Top Picks</Text>
            <Link className='text-blue-600' href='/'>See All</Link>
        </View>
        <ScrollView
            horizontal
            className='pt-3'
        >
            <View className='flex flex-row gap-x-4'>
               {
                items.map((item,index)=>(
                    <TouchableOpacity className='rounded-xl w-[219px] h-[198px] overflow-hidden' key={index}>
                        <Image source={item.image} className='w-full h-full'/>
                            <TouchableOpacity className='absolute right-2 top-2'>
                                <AntDesign name="hearto" size={24} color="blue"  />
                            </TouchableOpacity>
                            <View className='absolute bottom-0 p-2 flex-col items-center gap-y-3'>
                                <View className='flex flex-row justify-between w-full items-center'>
                                    <View>
                                        <Text className='text-white font-bold text-xl'>{item.title}</Text>
                                        <View className='flex flex-row items-center gap-x-1'>
                                            <Text className='text-blue-600'><FontAwesome6 name="location-dot" size={20} /></Text>
                                            <Text className='text-white font-medium'>{item.location}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View className='flex flex-row gap-x-1'>
                                            <Text className='text-yellow-500'><FontAwesome name="star" size={24} /></Text>
                                            <Text className='text-white'>{item.ratings} Ratings</Text>
                                        </View>
                                        <Text className='text-white'>Price {item.price}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity className='bg-gray-200 p-3 rounded-full w-[120px] items-center'><Text className='text-blue-600 font-bold'>View Details</Text></TouchableOpacity>
                            </View>
                    </TouchableOpacity>
                ))
               }
            </View>
        </ScrollView>
    </View>
  );
}

export default FilterContent;
