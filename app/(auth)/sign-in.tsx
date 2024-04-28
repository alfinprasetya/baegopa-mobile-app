import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/image";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <Image
        source={images.BGWhite}
        className="absolute w-full h-full -bottom-20"
      />
      <Image
        source={images.Logo}
        resizeMode="contain"
        className="absolute w-[150] h-[150] right-8 top-16"
      />
      <View className="absolute w-full h-4/6 bottom-0 px-8">
        <Text className="font-RoboMedium text-xl">Halo, Hungers!</Text>
      </View>
    </SafeAreaView>
  );
};
export default SignIn;
