import FavItems from "@/components/favItems";
import Header from "@/components/header/header";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Favourites = () => {
  return (
    <SafeAreaView
      style={{ flex: 1 }} 
      edges={['top', 'left', 'right']}
    >
      <View>
        <Header title={"Favorites"} />
        <FavItems />
      </View>
    </SafeAreaView>
  );
};

export default Favourites;
