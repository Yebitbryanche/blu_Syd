import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Prop {
  time: string;
  expanded: boolean;
  onToggle: () => void;
}

const Duration: React.FC<Prop> = ({ time, expanded, onToggle }) => {
  return (
    <View className="flex flex-row items-center p-5 gap-3">
      <Text className="text-2xl text-primary">{time}</Text>
      <TouchableOpacity onPress={onToggle}>
        {expanded ? (
          <AntDesign name="up" size={18} color="blue" />
        ) : (
          <AntDesign name="down" size={18} color="blue" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Duration;
