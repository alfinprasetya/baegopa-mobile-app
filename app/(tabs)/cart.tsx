import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Pressable,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppButton from "@/components/AppButton";
import Carousel from "@/components/Carousel";
import { category } from "@/data/categories";
import { menu } from "@/data/menu";

const Cart = () => {
  const [value, setValue] = useState(true);
  const [selectedCategory, selectCategory] = useState(0);

  const listCategory = category.map((item, index) => (
    <Pressable
      className="flex-1 flex-row items-center justify-between my-4 mx-2"
      key={item}
      onPress={() => selectCategory(index)}
    >
      <Text className="text-suface text-center w-[90%]">{item}</Text>
      <View
        className={`bg-accent h-4/5 w-[5%] rounded-full ${selectedCategory === index ? "" : "hidden"}`}
      />
    </Pressable>
  ));

  const handleSetValue = () => {
    const newValue = !value;
    setValue(() => newValue);
  };

  return (
    <SafeAreaView className="bg-primary-100 h-full">
      <View className="h-[15%] w-[55%] justify-center px-4">
        <TypeSwitch handleSetValue={handleSetValue} value={value} />
        <LocationButton />
      </View>
      <View className="bg-primary h-[85%] flex-row">
        <View className="bg-primary-200 h-full basis-1/4 py-2">
          {listCategory}
        </View>
        <View className="h-full basis-3/4 items-center justify-center">
          <View className="h-[98%] w-[95%] bg-suface rounded-xl">
            <MenuList scrollTo={selectedCategory} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const LocationButton = () => {
  return (
    <AppButton
      containerStyles="h-10 my-1 justify-start px-3"
      title="Candhi Mendhut"
      icon={<FontAwesome6 name="location-dot" size={18} color="black" />}
      handlePress={() => {}}
      textStyles="font-RoboRegular"
    />
  );
};

type TypeSwitchProps = {
  handleSetValue: () => void;
  value: boolean;
};

const TypeSwitch: React.FC<TypeSwitchProps> = ({ handleSetValue, value }) => {
  return (
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
  );
};

type MenuListProps = {
  scrollTo: number;
};

const MenuList: React.FC<MenuListProps> = ({ scrollTo }) => {
  const sectionListRef = useRef<SectionList>(null);

  useEffect(() => {
    if (scrollTo === 0) {
      sectionListRef.current?.scrollToLocation({
        sectionIndex: scrollTo,
        itemIndex: 0,
        viewOffset: 175,
      });
      return;
    }
    sectionListRef.current?.scrollToLocation({
      sectionIndex: scrollTo - 1,
      itemIndex: 0,
    });
  }, [scrollTo]);

  return (
    <SectionList
      ref={sectionListRef}
      sections={menu}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => (
        <View className="flex-row justify-between items-baseline m-4">
          <View className="flex-row">
            <Image
              className="rounded-full w-20 h-20"
              resizeMode="contain"
              source={item.image}
            />
            <Text className="font-RoboBold text-xs mx-2">{item.name}</Text>
          </View>
          <Pressable className="">
            <FontAwesome name="plus-circle" size={22} color="black" />
          </Pressable>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text className="mx-8 mt-4 font-RoboMedium">{title}</Text>
      )}
      ListHeaderComponent={() => (
        <View className="m-2">
          <Text className="mb-2 mx-6 font-RoboBold">Promo</Text>
          <Carousel />
        </View>
      )}
      getItemLayout={(menu, index) => ({
        length: 76,
        offset: 76 * index + 175,
        index,
      })}
    />
  );
};
