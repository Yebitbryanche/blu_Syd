import images from '@/types/images';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';


export interface FilterDataProps {
  items: filterDataTypes[];
  onSeeAll?: () => void; // optional callback
}


export interface filterDataTypes{
    title:string
    location:string
    ratings:string
    price:string
    image:any
    type?:string

}

const FilterContent = ({items, onSeeAll}:FilterDataProps) => {
  return (
    <View className='p-2'>
        <View className='flex flex-row justify-between pt-2 px-1'>
            <Text className='text-2xl font-bold'>Our Top Picks</Text>
            <Text className='text-blue-600' onPress={onSeeAll}>See All</Text>
        </View>
        <ScrollView
            horizontal
            className='pt-3'
            bounces={false}
        >
            <View className='flex flex-row gap-x-4'>
               {
                items.map((item,index)=>(
                    <View className='rounded-xl w-[200px] h-[180px] overflow-hidden' key={index}>
                        <Image source={item.image} className='w-full h-full'/>
                        <Image source={images.gradient} className='absolute'/>
                            <TouchableOpacity className='absolute right-2 top-2'>
                                <AntDesign name="hearto" size={24} color="blue"  />
                            </TouchableOpacity>
                            <View className='absolute bottom-0 p-2 flex-col items-center gap-y-3'>
                                <View className='flex flex-row justify-between w-full items-center'>
                                    <View>
                                        <Text className='text-white font-bold text-lg'>{item.title}</Text>
                                        <View className='flex flex-row items-center gap-x-1'>
                                            <Text className='text-blue-600'><FontAwesome6 name="location-dot" size={15} /></Text>
                                            <Text className='text-white text-sm'>{item.location}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View className='flex flex-row gap-x-1'>
                                            <Text className='text-yellow-500'><FontAwesome name="star" size={15} /></Text>
                                            <Text className='text-white text-sm'>{item.ratings} Ratings</Text>
                                        </View>
                                        <Text className='text-white text-sm'>Price {item.price}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity className='bg-gray-200 p-3 rounded-full w-[120px] items-center'><Link href="../details/more" className='text-blue-600 font-bold'>View Details</Link></TouchableOpacity>
                            </View>
                    </View>
                ))
               }
            </View>
        </ScrollView>
    </View>
  );
}

export default FilterContent;
