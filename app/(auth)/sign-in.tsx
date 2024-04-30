import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppButton from "@/components/AppButton";
import AppForm from "@/components/AppForm";
import { images } from "@/constants/image";

const SignIn = () => {
  const [name, setName] = useState<string>();

  const handleLogin = () => {
    if (!name) {
      console.log("Username tidak boleh kosong");
      return;
    }
    router.replace("/(tabs)/home");
  };

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
      <View className="absolute w-full justify-between h-4/6 bottom-0 px-8 pb-24">
        <View>
          <Text className="font-RoboMedium text-xl">Halo, Hungers!</Text>
          <View className="items-center mt-8">
            <AppForm
              name="username"
              icon="user"
              width={300}
              height={50}
              value={name!}
              onChange={setName}
              customStyle="mb-4"
            />
          </View>
          <Link className="mt-2 mx-4" href="/(auth)/sign-up">
            Belum punya akun?
          </Link>
        </View>
        <AppButton
          title="Masuk"
          handlePress={handleLogin}
          containerStyles="bg-accent w-3/5 self-center h-12"
          textStyles="text-lg"
        />
      </View>
    </SafeAreaView>
  );
};
export default SignIn;
