//Importaciones
import { useEffect } from "react";

import { StyleSheet, Text, Pressable, Button } from "react-native";
import Animated, { interpolateColor } from "react-native-reanimated";
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function HomeScreen() {
  //Se crean variables para el deslizamiento, el fondo y su opacidad
  const slide = useSharedValue(-1000);
  const background = useSharedValue(0);
  const opacity = useSharedValue(1);

  //Se utiliza useEffect para el manejo de estadpos de los componentes
  useEffect(() => {
    slide.value = withTiming(0, { duration: 2500 });
    background.value = withTiming(1, { duration: 1000 });
  });

  //Estilos animados
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: slide.value }],
    opacity: opacity.value,
  }));

  //Fondo con transición
  const backgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      background.value,
      [0, 1],
      ["#a7bb80", "#326355"]
    ),
  }));

  //Función para manejar el evento de presionar el botón
  const handlePress = () => {
    background.value = withTiming(background.value === 0 ? 1 : 0, {
      duration: 500,
    });
    opacity.value = withTiming(opacity.value === 1 ? 0 : 1, { duration: 500 });
  };

  //Retorno de la vista
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

//Estilos
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
