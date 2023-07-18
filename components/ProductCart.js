import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

const ProductCart = ({ title, price, description, category, image }) => {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();

  return (
    <View className="w-full bg-white px-5 rounded-2xl p-5 my-5 dark:bg-gray-50/10">
      <View className="bg-white rounded-xl">
        <Image
          source={{ uri: image }}
          className="w-full h-72"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View>
        <View className="mt-3">
          <Text className="text-black/50 text-sm dark:text-white/70">
            {category}
          </Text>
          <Text className="text-lg font-bold text-black dark:text-white">
            {title}
          </Text>
          <View className="flex-row justify-between items-center my-2">
            <View className="flex-row gap-3 items-center">
              <AntDesign
                name="minuscircleo"
                size={24}
                color={colorScheme === "light" ? "black" : "white"}
                onPress={() => setCount(count - 1)}
              />
              <Text className="text-xl font-bold dark:text-white">{count}</Text>
              <AntDesign
                name="pluscircleo"
                size={24}
                color={colorScheme === "light" ? "black" : "white"}
                onPress={() => setCount(count + 1)}
              />
            </View>
            <Text className="font-bold text-xl text-gray-900 dark:text-white">
              $ {price * count}
            </Text>
          </View>
          <Text
            numberOfLines={2}
            className=" font-bold text-sm dark:text-white my-2"
          >
            {description}
          </Text>
          <TouchableOpacity className="p-3 bg-black dark:bg-white rounded-full mx-5 my-4">
            <Text className="text-xl font-bold text-white text-center dark:text-gray-900">
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCart;
