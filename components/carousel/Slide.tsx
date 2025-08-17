import { Carousel } from '@/Data/carusel';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get("window");

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % Carousel.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  return (
    <View>
      <FlatList
        data={Carousel}
        ref={flatListRef}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="items-center justify-center" style={{ width }}>
            <Image
              source={typeof item.content === "string" ? { uri: item.content } : item.content}
              className="w-full h-[400px]"
              resizeMode="cover"
            />
          </View>
        )}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      {/* Indicators */}
      <View className="absolute bottom-1 flex-row self-center mt-2">
        {Carousel.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              flatListRef.current?.scrollToIndex({ index, animated: true });
              setCurrentIndex(index);
            }}
            className="mx-1"
          >
            <View
              className={` ${
                currentIndex === index
                  ? "bg-blue-600 w-6 h-2 rounded-lg"
                  : "bg-gray-300 w-2 h-2 rounded-full"
              }`}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Slide;
