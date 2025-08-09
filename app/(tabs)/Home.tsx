import Slide from '@/components/carousel/Slide';
import FilterContent from '@/components/filtercontent';
import FilterButton from '@/components/pressable/FilterButton';
import { filterCardData } from '@/Data/filterata';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Home = () => {
  return (
    <SafeAreaView
       style={{ flex: 1 }} 
       edges={['top', 'left', 'right']}
    >
      
      <ScrollView>
      <View>
        <Slide/>
      </View>
      <View className='flex-1 mt-4'> {/* {filters} */}
        <FilterButton/>
      </View>
      <View>
        <FilterContent items={filterCardData}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
