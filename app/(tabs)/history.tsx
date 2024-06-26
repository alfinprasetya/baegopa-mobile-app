import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { transactions } from "@/data/transactions";

const History = () => {
  return (
    <SafeAreaView className="bg-primary-100 h-full">
      <View className="py-3 px-5">
        <Text className="text-suface font-RoboMedium text-2xl">
          Riwayat Pesanan
        </Text>
      </View>
      <View className="bg-primary h-[93%] flex justify-center items-center">
        <View className="bg-suface h-[95%] w-[90%] rounded-xl p-4">
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="flex flex-row justify-between my-3">
                <View className="flex flex-row items-start gap-x-4">
                  {item.transactionType === "Dine-In" ? (
                    <MaterialCommunityIcons
                      name="silverware-fork-knife"
                      size={36}
                      color="black"
                    />
                  ) : (
                    <FontAwesome6 name="bag-shopping" size={36} color="black" />
                  )}
                  <View>
                    <Text className="text-sm font-RoboBold">{item.branch}</Text>
                    <Text className="text-xs">{formatDate(item.date)}</Text>
                    <Text className="text-xs font-RoboBold">Rp {item.totalPrice.toLocaleString()}</Text>
                  </View>
                </View>
                <Text className="text-xs">{item.status}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

export default History;
