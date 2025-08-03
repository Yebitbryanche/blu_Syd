import React from 'react';
import { View } from 'react-native';

const Triangle = () => {
  return (
     <View
    style={{
      width: 0,
      height: 0,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderTopWidth: 10,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderTopColor: "#005EE9", // triangle color
      marginBottom: 1,
    }}
  />
  );
}

export default Triangle;
