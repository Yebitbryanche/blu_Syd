import LocationFilter from '@/components/locationFilter';
import ProductFilters from '@/components/pressable/productFilters';
import ProductHeader from '@/components/productHeader';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const guesthouse = () => {
  return (
    <SafeAreaView
      style={{ flex: 1 }} 
      edges={['top', 'left', 'right']}
    >
        <ProductHeader title='Guest Houses'/>
        <LocationFilter/>
        <ProductFilters/>
    </SafeAreaView>   
  );
}

export default guesthouse;
