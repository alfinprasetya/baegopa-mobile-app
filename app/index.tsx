import { useFonts } from "expo-font";
import { Link, router, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Image, SafeAreaView, ScrollView, View } from "react-native";

import AppButton from "@/components/AppButton";
import { images } from "@/constants/image";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded, error] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontLoaded) SplashScreen.hideAsync();
  }, [fontLoaded, error]);

  if (!fontLoaded && !error) return null;

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 items-center justify-around">
          <Image className="w-[250px] h-[250px]" source={images.Logo} />
          <View className="gap-y-3">
            <View>
              <AppButton
                title="Masuk"
                handlePress={() => router.push("/(auth)/sign-in")}
                containerStyles="w-[200px] h-[50px]"
                textStyles="text-lg"
              />
            </View>
            <View>
              <AppButton
                title="Daftar"
                handlePress={() => router.push("/(auth)/sign-up")}
                containerStyles="w-[200px] h-[50px]"
                textStyles="text-lg"
              />
            </View>
            <Link
              className="text-center font-RoboBold text-suface"
              href="/home"
            >
              Mode Tamu
            </Link>
          </View>
          <StatusBar style="light" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
