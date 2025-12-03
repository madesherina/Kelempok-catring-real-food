import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface ButtonBlobProps {
  title: string;
  color?: string;
  textColor?: string;
  variant?: "top" | "bottom";
}

export default function ButtonBlob({
  title,
  color = "#C46F52",
  textColor = "#fff",
  variant = "top",
}: ButtonBlobProps) {
  // SVG path untuk button atas (Sinar) - lebih pendek dan lebih melengkung
  const topBlobPath =
    "M 25 46 Q 12 10 45 3 Q 90 -1 140 5 Q 190 1 240 4 Q 275 12 288 46 Q 298 62 288 78 Q 273 115 240 120 Q 190 123 140 118 Q 90 124 45 121 Q 12 116 25 78 Q 12 62 25 46 Z";

  // SVG path untuk button bawah (Catering Real Food) - lebih panjang
  const bottomBlobPath =
    "M 30 60 Q 20 30 50 20 L 950 20 Q 980 30 970 60 Q 980 80 970 100 Q 970 120 950 125 L 50 125 Q 20 120 30 100 Q 20 80 30 60 Z";

  const selectedPath = variant === "top" ? topBlobPath : bottomBlobPath;
  const width = variant === "top" ? 300 : 1000;
  const height = variant === "top" ? 103 : 145;

  return (
    <View style={styles.container}>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <Path d={selectedPath} fill={color} />
      </Svg>
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  text: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "LeagueSpartan_700Bold",
  },
});
