import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppButton from "@/components/AppButton";

const Home = () => {
  const [value, setValue] = useState(true);

  const handleSetValue = () => {
    const newValue = !value;
    setValue(() => newValue);
  };
  return (
    <SafeAreaView className="bg-primary-100 h-full">
      <View className="h-[15%] w-[55%] justify-center px-4">
        <TouchableOpacity
          onPress={handleSetValue}
          className="bg-suface rounded-full flex-row items-center justify-evenly h-10 my-1"
        >
          <View
            className={`h-[80%] w-[45%] rounded-full items-center justify-center ${value ? "bg-suface-100" : "bg-suface"}`}
          >
            <Text className="font-RoboMedium">Dine In</Text>
          </View>
          <View
            className={`h-[80%] w-[45%] rounded-full items-center justify-center ${!value ? "bg-suface-100" : "bg-suface"}`}
          >
            <Text className="font-RoboMedium">Take Away</Text>
          </View>
        </TouchableOpacity>
        <AppButton
          containerStyles="h-10 my-1 justify-start px-3"
          title="Candhi Mendhut"
          icon={<FontAwesome6 name="location-dot" size={18} color="black" />}
          handlePress={() => {}}
          textStyles="font-RoboRegular"
        />
      </View>
      <View className="bg-primary h-[85%] flex-row">
        <View className="bg-primary-200 h-full basis-1/4" />
        <View className="h-full basis-3/4 items-center justify-center">
          <View className="h-[98%] w-[95%] bg-suface rounded-xl" />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
