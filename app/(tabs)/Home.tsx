import Slide from "@/components/carousel/Slide";
import FilterContent from "@/components/filtercontent";
import FilterButton from "@/components/pressable/FilterButton";
import { filterCardData } from "@/Data/filterata";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Guest House");
  const [modalVisible, setModalVisible] = useState(false);

  // Filter items based on activeCategory
  const filteredItems =
    activeCategory === "All"
      ? filterCardData
      : filterCardData.filter((item) => item.type === activeCategory);

  // Open modal for a category
  const openModal = (category: string) => {
    setActiveCategory(category);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Slide />

        <View className="flex-1 mt-4">
          <FilterButton
            onPress={(index, type) => setActiveCategory(type)}
          />
        </View>

        <View>
          <FilterContent
            items={filteredItems}
            onSeeAll={() => openModal(activeCategory)} // pass modal trigger
          />
        </View>
      </ScrollView>

      {/* Modal */}
      {
        modalVisible?
        <View className="absolute top-0 left-0">
        <View>
          <MaterialCommunityIcons name="undo-variant" size={24} color="black" />
          <Text>Guest Houses</Text>
          <Ionicons name="search-outline" size={24} color="black" />

        </View>
      </View>
      :
      null
      }
    </View>
  );
};

export default Home;
