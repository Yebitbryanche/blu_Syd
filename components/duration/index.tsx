import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface prop{
    time: string
}

const Duration: React.FC<prop> = ({time}) => {
  const [showIcon, setShowIcon] = useState(false);

  const toggleIcon = () => {
    setShowIcon((prev) => !prev);
  };

  return (
    <View className="flex flex-row items-center p-5 gap-3">
      <Text className="text-2xl text-primary">{time}</Text>
      <TouchableOpacity onPress={toggleIcon}>
        {showIcon ? (
          <AntDesign name="up" size={18} color="blue" />
        ) : (
          <AntDesign name="down" size={18} color="blue" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Duration;
