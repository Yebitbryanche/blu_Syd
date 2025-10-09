import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text } from "react-native";

export default function ProductDetail() {
  const { id, title, location, ratings, price, type } = useLocalSearchParams();

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-3xl font-bold mb-4">{title}</Text>
      <Text className="text-gray-500 mb-2">{location}</Text>
      <Text className="text-yellow-600 mb-2">⭐ {ratings} Ratings</Text>
      <Text className="text-blue-600 mb-4">💰 Price: {price}</Text>
      {type && <Text className="text-gray-700">Type: {type}</Text>}
    </ScrollView>
  );
}
