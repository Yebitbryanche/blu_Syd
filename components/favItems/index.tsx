import { propertyData } from "@/Data/property";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useState } from "react";
import { useRouter } from "expo-router";

import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const FavItems = () => {
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const router = useRouter();

  const toggleLike = (id: number) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <ScrollView>
      <View className="bg-white">
        {propertyData.map((item, index) => (
          <View
            key={index}
            style={{ width: width - 20 }}
            className="flex flex-row p-3 m-2 gap-4 rounded-lg bg-white shadow"
          >
            <Image
              className="w-[135px] h-[135px]"
              resizeMode="cover"
              source={item.image}
            />

            <View className="flex-1">
              <View className="flex flex-row items-start justify-between">
                <Text
                  className="text-xl font-bold flex-1"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.name}
                </Text>
                <TouchableOpacity
                  onPress={() => toggleLike(index)}
                  className="ml-2"
                >
                  {likedItems.includes(index) ? (
                    <AntDesign name="heart" size={22} color="red" />
                  ) : (
                    <AntDesign name="hearto" size={22} color="blue" />
                  )}
                </TouchableOpacity>
              </View>

              <Text
                className="text-gray-500 mt-1 flex-shrink"
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                {item.description}
              </Text>

              <View className="flex flex-row justify-between items-center mt-1">
                <Text className="font-semibold">XAF {item.price}</Text>
                <View className="flex flex-row items-center ml-2">
                  <FontAwesome name="star" size={18} color="gold" />
                  <Text className="ml-1">{item.rating}</Text>
                </View>
              </View>

              <View className="flex flex-row justify-between items-center mt-2">
                <View className="flex flex-row items-center flex-1 gap-1">
                  <FontAwesome6 name="location-dot" size={16} color="blue" />
                  <Text
                    className="ml-1 text-gray-600 flex-1"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.location}
                  </Text>
                </View>
                <TouchableOpacity
                  className="border border-primary rounded-3xl py-2 px-3"
                  // onPress={() => router.push(`/property/${item.id}`)}
                >
                  <Text className="text-primary font-semibold">
                    View details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default FavItems;
