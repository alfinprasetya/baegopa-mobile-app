import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

type TabsIconProps = {
  icon: any;
  color: string;
  focused: boolean;
};

const TabsIcon: React.FC<TabsIconProps> = ({ icon, color, focused }) => {
  return (
    <View className={`items-center justify-center ${focused ? "-mt-8" : ""}`}>
      <View className="w-12 p-2 items-center justify-center">
        <View
          className={`w-12 h-12 bg-suface rounded-full absolute ${focused ? "" : "hidden"}`}
        />
        <FontAwesome name={icon} size={32} color={color} />
      </View>
      <View
        className={`bg-accent w-8 h-2 rounded-full mt-2 ${focused ? "" : "hidden"}`}
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#0E1C16",
          tabBarInactiveTintColor: "#FDFDFD",
          tabBarStyle: {
            backgroundColor: "#224C34",
            borderTopColor: "#0E1C16",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <TabsIcon icon="home" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <TabsIcon icon="shopping-cart" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <TabsIcon icon="user" color={color} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
