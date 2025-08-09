import { Carousel } from '@/Data/carusel';
import React from 'react';
import { FlatList, Image, View } from 'react-native';


const Slide = () => {
  return (
    <View>
     <FlatList
     data={Carousel}
     renderItem={({item, index}) => <View className=""><Image source={item.content} /></View>}
     horizontal
     pagingEnabled
     bounces={false}

     />
    </View>
  );
}

export default Slide;
