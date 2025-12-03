import ButtonBlob from "@/components/ButtonBlob";
import { products, TProduct } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { IMAGES } from "@/utils/constants";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import { useRouter } from "expo-router";
import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function Orders() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const addProductToCart = useCart((state) => state.addProduct);

  const handleAddProductToCart = (product: TProduct) => {
    addProductToCart(product);
    Alert.alert("Keranjang", "Berhasil ditambahkan ke keranjang");
  };

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

      <View
        style={{
          flex: 1,
          top: insets.top,
          right: insets.right,
          left: insets.left,
          paddingBottom: insets.bottom + 35,
        }}
      >
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 25,
              paddingVertical: 10,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Pressable onPress={() => router.back()}>
              <FontAwesome
                name="arrow-left"
                size={32}
                style={{ color: "#6d724c" }}
              />
            </Pressable>
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
            <ButtonBlob title="Menu" color="#c66b4b" />
            <View style={{ marginTop: -10 }}>
              <ButtonBlob title="Catering" color="#6d724c" />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              gap: 10,
              paddingHorizontal: 25,
              marginTop: 30,
            }}
          >
            {products.map((product) => (
              <View
                key={product.id}
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: 10,
                  paddingVertical: 15,
                  paddingHorizontal: 20,
                  position: "relative",
                }}
              >
                <View style={{ marginBottom: 15 }}>
                  <Image
                    source={product.image}
                    style={{
                      width: "100%",
                      height: 180,
                      borderRadius: 10,
                    }}
                  />
                </View>

                <Text
                  style={{
                    color: "#715123",
                    fontFamily: "Poppins_700Bold",
                    fontSize: 20,
                    marginBottom: 8,
                  }}
                >
                  {product.name}
                </Text>
                <Text
                  style={{
                    color: "#ae8f58",
                    fontFamily: "Poppins_600SemiBold",
                    fontSize: 16,
                    marginBottom: 12,
                  }}
                >
                  Rp {product.price}, - / hari
                </Text>
                <View
                  style={{ flexDirection: "column", gap: 4, paddingBottom: 20 }}
                >
                  {product.materials.map((material) => (
                    <Text
                      style={{
                        fontFamily: "Poppins_400Regular",
                        color: "#8c816e",
                        fontSize: 14,
                      }}
                    >
                      - {material}
                    </Text>
                  ))}
                </View>

                <Pressable
                  style={{ position: "absolute", bottom: 0, right: 0 }}
                  onPress={() => {
                    handleAddProductToCart(product);
                  }}
                >
                  <FontAwesome
                    name="plus-circle"
                    size={44}
                    style={{
                      color: "#8ccdb0",
                      position: "absolute",
                      right: 15,
                      bottom: 15,
                    }}
                  />
                </Pressable>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
