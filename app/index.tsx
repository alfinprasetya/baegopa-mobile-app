import { StatusBar } from "expo-status-bar";
import { Button, Image, View } from "react-native";

import logo from "../assets/images/baegopa-logo.png";

export default function App() {
  return (
    <View className="flex-1 items-center justify-around bg-primary">
      <Image className="w-[250px] h-[250px]" source={logo} />
      <Button title="masuk" />
      <StatusBar style="auto" />
    </View>
  );
}
