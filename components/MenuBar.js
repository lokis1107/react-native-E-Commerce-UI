import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { menu } from "../data/MenuList";

const MenuBar = () => {
    const [active, setActive] = useState("All")
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="gap-3 mr-5 ml-5 mb-4">
        {menu.map((item, index) => {
            let isActive = item == active;
            let text = `text-xl dark:text-orange-100 ${isActive ? "font-bold": ""}`
          return (
            <TouchableOpacity key={index} onPress={()=> setActive(item)}>
              <Text className={text}>{item}</Text>
              {
                isActive?(
                    <Text className="font-bold dark:text-white -mt-3 ml-1 text-orange-500">__ _</Text>
                ):(null)
              }
              
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MenuBar;
