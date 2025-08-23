import { propertyData } from "@/Data/property";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

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
  return (
    <ScrollView>
      <View className="bg-white">
        {propertyData.map((item, index) => (
          <View
            key={index}
            style={{ width: width - 20 }}
            className="flex flex-row p-3 m-2 gap-4 rounded-lg bg-white shadow"
          >
            {/* Image */}
            <Image
              className="w-[135px] h-[135px]"
              resizeMode="cover"
              source={item.image}
            />

            {/* Content */}
            <View className="flex-1">
              {/* Title + Heart */}
              <View className="flex flex-row items-start justify-between">
                <Text
                  className="text-xl font-bold flex-1"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.name}
                </Text>
                <TouchableOpacity className="ml-2">
                  <AntDesign name="hearto" size={22} color="blue" />
                </TouchableOpacity>
              </View>

              {/* Description */}
              <Text
                className="text-gray-500 mt-1 flex-shrink"
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                {item.description}
              </Text>

              {/* Price + Rating */}
              <View className="flex flex-row justify-between items-center mt-1">
                <Text className="font-semibold">XAF {item.price}</Text>
                <View className="flex flex-row items-center ml-2">
                  <FontAwesome name="star" size={18} color="gold" />
                  <Text className="ml-1">{item.rating}</Text>
                </View>
              </View>

              {/* Location + Button */}
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
                <TouchableOpacity className="border border-primary rounded-3xl py-2 px-3">
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
