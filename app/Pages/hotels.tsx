import LocationFilter from '@/components/locationFilter';
import ProductFilters from '@/components/pressable/productFilters';
import ProductHeader from '@/components/productHeader';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Hotels = () => {
  return (
    <SafeAreaView
      style={{ flex: 1 }} 
      edges={['top', 'left', 'right']}
    >
        <ProductHeader title='Hotels'/>
        <LocationFilter/>
        <ProductFilters/>
    </SafeAreaView>    
  );
}

export default Hotels;
