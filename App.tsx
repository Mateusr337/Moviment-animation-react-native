import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const anim = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(anim, {
      toValue: 150,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(anim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button onPress={startAnimation} title="click here"></Button>
      <Animated.Text
        style={[
          { fontSize: 20, color: "blue" },
          { transform: [{ translateY: anim }] },
        ]}
      >
        Surprise, thank you!
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
