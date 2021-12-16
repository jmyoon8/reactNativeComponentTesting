import React from "react";
import {Button} from "react-native";

const Greeting = ({title, onPress}: {title: string; onPress: () => void}) => {
  return <Button title={title} onPress={onPress} />;
};

export default Greeting;
