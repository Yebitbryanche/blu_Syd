import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const LocationFilter = () => {
    const [selectedValue, setSelectedValue] = useState('Buea')
  return (
    <View className='flex flex-row justify-end p-2 items-center gap-x-1'>
      <Text className='font-medium text-black/50 text-2xl'>Location :</Text>
      <View className='flex flex-row items-center gap-x-1 bg-blue-100 px-1'>
        <Ionicons name="filter" size={24} color="gray" className=' top-2'/>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        style={{ height: 50, width: 150 , backgroundColor:"#E8F2FB"}} // Example styling
      >
        <Picker.Item label="Buea" value="Buea" />
        <Picker.Item label="Bamenda" value="Bamenda" />
        <Picker.Item label="Douala" value="Douala" />
        <Picker.Item label="Yaounde" value="yaounde" />
      </Picker>
    </View>
    </View>
  );
}

export default LocationFilter;
