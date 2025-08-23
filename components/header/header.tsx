import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  title: string;
}


const Header = ({ title }: HeaderProps) => {
  return (
    <View className="flex flex-row items-center justify-between p-5">
      <TouchableOpacity>
        <FontAwesome6 name="user-circle" size={34} color="blue" />
      </TouchableOpacity>
      <View>
        <Text className="font-bold text-2xl">{title}</Text>
      </View>
      <View className="flex flex-row items-center gap-5">
        <TouchableOpacity>
          <Octicons name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <SimpleLineIcons name="options-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
