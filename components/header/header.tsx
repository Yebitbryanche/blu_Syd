import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const [modal, setModal] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [query, setQuery] = useState("");

  const toggleDropdown = () => setModal((prev) => !prev);
  const toggleSearch = () => setSearchActive((prev) => !prev);

  return (
    <View className="flex flex-row items-center justify-between p-5 relative bg-white">
      {/* Left icon */}
      <TouchableOpacity>
        <FontAwesome6 name="user-circle" size={34} color="blue" />
      </TouchableOpacity>

      {/* Title or Search */}
      <View className="flex-1 mx-4">
        {searchActive ? (
          <TextInput
            className="border rounded-lg px-3 py-2"
            placeholder="Search..."
            value={query}
            onChangeText={setQuery}
            autoFocus
          />
        ) : (
          <Text className="font-bold text-2xl text-center">{title}</Text>
        )}
      </View>

      {/* Right icons */}
      <View className="flex flex-row items-center gap-5">
        <TouchableOpacity onPress={toggleSearch}>
          <Octicons name="search" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleDropdown}>
          {modal ? (
            <AntDesign name="close" size={24} color="black" />
          ) : (
            <SimpleLineIcons name="options-vertical" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>

      {/* Dropdown menu */}
      {modal && (
        <View className="absolute right-5 top-16 bg-white rounded-lg shadow-lg p-4 w-40 z-10">
          <TouchableOpacity className="flex flex-row items-center gap-3 py-2">
            <AntDesign name="setting" size={20} color="black" />
            <Text>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row items-center gap-3 py-2">
            <MaterialIcons name="help-outline" size={20} color="black" />
            <Text>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row items-center gap-3 py-2">
            <AntDesign name="login" size={20} color="black" />
            <Text>Signup/Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
