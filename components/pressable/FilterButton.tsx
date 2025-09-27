import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface ButtonItems {
  className?: string;
  onPress?: (index: number, type: string) => void;
}

export interface ButtonTypes {
  title: string;
  icon?: any;
}

const button_data = [
  {
    title: "Guest House",
    icon: <FontAwesome name="home" size={20} />
  },
  {
    title: "Car",
    icon: <Ionicons name="car" size={20} />
  },
  {
    title: "Hotel",
    icon: <FontAwesome6 name="building" size={20} />
  }
];

const FilterButton = ({ className, onPress }: ButtonItems) => {
  const [activeFilter, setActiveFilter] = useState(0);

  const handlePress = (index: number, title: string) => {
    setActiveFilter(index);
    if (onPress) {
      onPress(index, title); // 🔹 call parent handler
    }
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex items-center flex-row pb-2">
        {button_data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index, item.title)}
            className={
              activeFilter === index
                ? `mx-3 px-4 py-3 bg-blue-600 flex justify-center gap-x-3 flex-row rounded-full`
                : `mx-3 py-3 px-4 border border-blue-600 border-1 flex gap-x-3 flex-row justify-center rounded-full`
            }
          >
            <Text
              className={
                activeFilter === index
                  ? `text-white font-bold`
                  : `text-blue-600 font-bold`
              }
            >
              {item.icon}
            </Text>
            <Text
              className={
                activeFilter === index
                  ? `text-white font-bold text-md`
                  : `text-md text-blue-600 font-bold`
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default FilterButton;
