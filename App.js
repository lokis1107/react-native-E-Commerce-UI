import { View, Text, Switch } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native";
import ProductList from "./components/ProductList";
import MenuBar from "./components/MenuBar";

const App = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-black">
      <StatusBar hidden />
      <View className="flex-row justify-between items-center px-5 my-5">
        <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          E-Commerce
        </Text>
        <Switch
          value={colorScheme === "dark"}
          onChange={toggleColorScheme}
          className="px-5"
        />
      </View>
      <View>
        <MenuBar />
      </View>
      <View>
        <ProductList />
      </View>
    </SafeAreaView>
  );
};

export default App;
