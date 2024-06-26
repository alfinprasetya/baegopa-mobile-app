import { Entypo, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import axios from "axios";
import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { getToken } from "@/utils/token-storage";

type TabsIconProps = {
  children: JSX.Element;
  focused: boolean;
};

const TabsIcon: React.FC<TabsIconProps> = ({ children, focused }) => {
  return (
    <View className={`items-center justify-center ${focused ? "-mt-8" : ""}`}>
      <View className="w-12 p-2 items-center justify-center">
        <View
          className={`w-12 h-12 bg-suface rounded-full absolute ${focused ? "" : "hidden"}`}
        />
        {children}
      </View>
      <View
        className={`bg-accent w-8 h-2 rounded-full mt-2 ${focused ? "" : "hidden"}`}
      />
    </View>
  );
};

const TabsLayout = () => {
  const [token, setToken] = useState<string>("");

  async function fetchToken() {
    const fetchedToken = await getToken();
    if (!fetchedToken) {
      alert("Token tidak ditemukan. Menggunakan mode tamu");
    } else {
      setToken(() => fetchedToken);
    }
  }

  useEffect(() => {
    fetchToken();
  }, []);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    if (token) {
      axios
        .get(`http://fierceface.cloud/auth/profile`, {
          cancelToken: cancelToken.token,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          alert("berhasil login dengan akun " + response.data.username);
        })
        .catch((error) => {
          alert(JSON.stringify(error));
        });
    }

    return () => {
      cancelToken.cancel();
    };
  }, [token]);

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
              <TabsIcon focused={focused}>
                <Entypo name="home" size={24} color={color} />
              </TabsIcon>
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <TabsIcon focused={focused}>
                <FontAwesome6 name="cart-shopping" size={24} color={color} />
              </TabsIcon>
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <TabsIcon focused={focused}>
                <FontAwesome6 name="clipboard-list" size={24} color={color} />
              </TabsIcon>
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <TabsIcon focused={focused}>
                <FontAwesome6 name="user-large" size={24} color={color} />
              </TabsIcon>
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
