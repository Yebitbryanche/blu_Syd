import React from "react";
import { Image, Text, View } from "react-native";

interface NotificationProps {
  image: any;
  text: string;
  duration: string;
}

const Notification: React.FC<NotificationProps> = ({
  image,
  text,
  duration,
}) => {
  return (
    <View className="flex flex-row bg-gray-300 p-4 rounded-lg gap-5  items-start">
      <View>
        <Image source={image} />
      </View>
      <View className="flex-1">
        <Text className="text-sm pb-2">{text}</Text>
        <Text className="text-sm text-gray-500" >{duration}</Text>
      </View>
    </View>
  );
};

export default Notification;
