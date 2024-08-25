import { useEffect } from "react";

import { StyleSheet, Text, Pressable, Button } from "react-native";
import Animated from "react-native-reanimated";
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function HomeScreen() {
  const slide = useSharedValue(-1000);
  const fade = useSharedValue(0);

  useEffect(() => {
    slide.value = withTiming(0, { duration: 2500 });
    fade.value = withTiming(1, { duration: 2500 });
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: slide.value }],
  }));

  const handlePress = () => {
    fade.value = withTiming(fade.value === 0 ? 1 : 0, { duration: 500 });
  };

  const backgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: fade.value === 0 ? "red" : "blue",
  }));

  return (
    <>
      <Animated.View style={[styles.backgorund, backgroundStyle]}>
        <Animated.View style={animatedStyle}>
          <Text style={[styles.components, animatedStyle]}>
            Este Proyecto contiene React-Native-Reanimated
          </Text>
        </Animated.View>
        <Pressable style={styles.button}>
          <Button title="Iniciar" onPress={handlePress} />
        </Pressable>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  backgorund: {
    flex: 1,
    width: "100%",
  },

  components: {
    alignItems: "center",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    padding: 250,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});
