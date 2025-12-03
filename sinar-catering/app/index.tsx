import { useFocusEffect, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useFocusEffect(() => {
    router.replace("/(tabs)");
  });

  return null;
}
