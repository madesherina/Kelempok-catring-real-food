import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  title?: string;
  onPress?: () => void;
}

export default function OrderNowButton({
  title = "Order Now",
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {/* Shadow layer */}
      <View style={styles.shadowLayer} />

      {/* Button main */}
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  shadowLayer: {
    width: 278,
    height: 72,
    backgroundColor: "#b5a88c",
    borderRadius: 35,
    position: "absolute",
    top: 8,
    borderWidth: 4,
    borderColor: "black",
  },

  button: {
    width: 280,
    height: 70,
    backgroundColor: "white",
    borderRadius: 35,
    borderWidth: 4,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#444",
    fontFamily: "Poppins_400Regular",
  },

  topHighlight: {
    width: 80,
    height: 7,
    backgroundColor: "black",
    borderRadius: 10,
    position: "absolute",
    top: 8,
    right: 35,
  },

  bottomLine: {
    width: 200,
    height: 6,
    backgroundColor: "black",
    borderRadius: 10,
    position: "absolute",
    bottom: 10,
  },
});
