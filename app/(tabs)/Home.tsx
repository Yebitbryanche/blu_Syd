import Slide from '@/components/carousel/Slide';
import FilterButton from '@/components/pressable/FilterButton';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Home = () => {
  return (
    <SafeAreaView className='flex flex-col'>
      <ScrollView>
      <View className='flex-1'>
        <Slide/>
      </View>
      <View className='flex-1 mt-4'> {/* {filters} */}
        <FilterButton className='bg-primary p-3 w-[100px] flex items-center rounded-3xl'/>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
