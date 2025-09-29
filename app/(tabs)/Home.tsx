import Slide from "@/components/carousel/Slide";
import FilterContent from "@/components/filtercontent";
import FilterButton from "@/components/pressable/FilterButton";
import Search from "@/components/search";
import { filterCardData } from "@/Data/filterata";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Guest House");
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // 🔹 track search input

  // Filter items based on activeCategory & search query
  const filteredItems = filterCardData.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.type === activeCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Open modal for a category
  const openModal = (category: string) => {
    setActiveCategory(category);
    setModalVisible(true);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // 🔹 "padding" works well on iOS, "height" on Android
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled" // 🔹 dismiss keyboard on taps
      >
        <Search
          className="flex self-center absolute top-10 z-50 bg-zinc-100 w-[80%] rounded-full"
          onchange={(text: string) => setSearchQuery(text)}
        />

        <Slide />

        <View className="flex-1 mt-4">
          <FilterButton onPress={(index, type) => setActiveCategory(type)} />
        </View>

        <View>
          <FilterContent
            items={filteredItems}
            onSeeAll={() => openModal(activeCategory)}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Home;
