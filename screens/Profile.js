import { View, Text } from "react-native";
import React from "react";
import Button from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Profile</Text>

      <Button
        title="Çıkış Yap"
        onPress={async () => {
          await AsyncStorage.removeItem("userInfo");
          navigation.navigate("Main");
        }}
        filled
        style={{
          marginTop: 18,
          marginBottom: 4,
        }}
      />
    </View>
  );
}
