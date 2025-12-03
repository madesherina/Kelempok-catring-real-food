import OrderNowButton from "@/components/OrderNowButton";
import { useCart } from "@/hooks/useCart";
import { IMAGES } from "@/utils/constants";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import { useRouter } from "expo-router";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Cart() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const carts = useCart((state) => state.carts);
  const decreaseQtyItem = useCart((state) => state.decreaseQty);
  const increaseQtyItem = useCart((state) => state.increaseQty);
  const pay = useCart((state) => state.pay);

  const handlePay = () => {
    Alert.alert("Pembayaran", "Berhasil dibayar");
    pay();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="dark-content" />

      <Image
        source={IMAGES.bgCart}
        style={{
          position: "absolute",
          top: -60,
          height: 300,
          width: "100%",
        }}
        resizeMode="contain"
      />
      <Image
        source={IMAGES.bgCart}
        style={{
          position: "absolute",
          top: -10,
          height: 300,
          width: "100%",
        }}
        resizeMode="contain"
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
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Pressable onPress={() => router.back()}>
              <FontAwesome
                name="arrow-left"
                size={32}
                style={{ color: "#6d724c" }}
              />
            </Pressable>
            <Image source={IMAGES.logo} style={{ width: 60, height: 60 }} />
            <View></View>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Poppins_700Bold",
              fontSize: 25,
              color: "#0d522c",
            }}
          >
            Keranjang
          </Text>

          {carts.length > 0 ? (
            <>
              <View
                style={{
                  flexDirection: "column",
                  gap: 10,
                  paddingHorizontal: 25,
                  marginTop: 30,
                }}
              >
                {carts.map((product) => (
                  <View
                    key={product.id}
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                      borderRadius: 10,
                      paddingVertical: 15,
                      paddingHorizontal: 20,
                      position: "relative",
                      borderWidth: 1,
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
                      style={{
                        flexDirection: "column",
                        gap: 4,
                        paddingBottom: 20,
                      }}
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

                    <View>
                      <View style={{ alignItems: "flex-end" }}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <Pressable
                            onPress={() => decreaseQtyItem(product.id)}
                          >
                            <FontAwesome
                              name="minus-circle"
                              size={44}
                              style={{
                                color: "#cd918cff",
                              }}
                            />
                          </Pressable>
                          <Text
                            style={{
                              fontSize: 20,
                              fontFamily: "Poppins_600SemiBold",
                            }}
                          >
                            {product.qty}
                          </Text>
                          <Pressable
                            onPress={() => increaseQtyItem(product.id)}
                          >
                            <FontAwesome
                              name="plus-circle"
                              size={44}
                              style={{
                                color: "#8ccdb0",
                              }}
                            />
                          </Pressable>
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
              </View>

              <View style={{ marginVertical: 20 }}>
                <OrderNowButton title="Bayar" onPress={handlePay} />
              </View>
            </>
          ) : (
            <View style={{ marginTop: 150 }}>
              <Text
                style={{
                  textAlign: "center",
                  width: "60%",
                  fontFamily: "Poppins_400Regular",
                  marginHorizontal: "auto",
                }}
              >
                Keranjang makanan kosong, silahkan kembali ke halaman orders
                untuk memilih makanan
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
