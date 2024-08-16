import { StyleSheet, Button } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Este proyecto esta utilizando react-native-reanimated
        </ThemedText>

        <ThemedView>
          <Button title="Ver código" onPress={() => {}} />
        </ThemedView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },

  startButton: {
    marginTop: 20,
  },
});
