import { useEffect } from "react";

import { StyleSheet, Text, Pressable, Button } from "react-native";
import Animated from "react-native-reanimated";
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function HomeScreen() {
  const slide = useSharedValue(-2050);

  useEffect(() => {
    slide.value = withTiming(0, { duration: 2500 });
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: slide.value }],
  }));

  return (
    <>
      <Animated.View>
        <Animated.View style={animatedStyle}>
          <Text style={[styles.components, animatedStyle]}>
            Este Proyecto contiene React-Native-Reanimated
          </Text>
        </Animated.View>
        <Pressable style={styles.button}>
          <Button title="Iniciar" />
        </Pressable>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
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
