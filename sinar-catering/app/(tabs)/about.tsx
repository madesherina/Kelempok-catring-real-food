import ButtonBlob from "@/components/ButtonBlob";
import { IMAGES } from "@/utils/constants";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function About() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#E8DCC8" }}>
      <StatusBar barStyle="dark-content" />

      <Image
        source={IMAGES.bg}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          width: width,
          height: height * 1.2,
        }}
        resizeMode="cover"
      />

      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            paddingHorizontal: 25,
            paddingVertical: 10,
            alignItems: "flex-end",
          }}
        >
          <Pressable onPress={() => router.push("/cart")}>
            <FontAwesome
              name="shopping-cart"
              size={32}
              style={{ color: "#6d724c" }}
            />
          </Pressable>
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Image source={IMAGES.logo} style={{ width: 100, height: 100 }} />
        </View>

        <View style={{ marginTop: 10, alignItems: "center" }}>
          <ButtonBlob title="Sinar" color="#c66b4b" />
          <View style={{ marginTop: -10 }}>
            <ButtonBlob title="Catering Real Food" color="#6d724c" />
          </View>
        </View>

        <View style={{ marginTop: 30, position: "relative" }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Poppins_400Regular",
              width: "90%",
              marginHorizontal: "auto",
              fontSize: 16,
            }}
          >
            Sinar Catering RF adalah layanan catering makanan sehat yang
            berbasis di Bali. Kami menyediakan pilihan menu beragam, dengan
            bahan-bahan berkualitas. Fokus kami adalah kenyamanan dan kesehatan
            bagi pelanggan melalui makanan yang nyata dan alami.
          </Text>
          <Image
            source={IMAGES.paper}
            style={{
              position: "absolute",
              top: 0,
              // left: "5%",
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
            resizeMode="cover"
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
