import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const translate = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const scaleX = useRef(new Animated.Value(1)).current;

  const startTranslate = () => {
    Animated.timing(translate, {
      toValue: 50,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(translate, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    });
  };

  const startChangeScale = () => {
    Animated.timing(scale, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scale, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    });
  };

  const startChangeScaleX = () => {
    Animated.timing(scaleX, {
      toValue: -2,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleX, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Button onPress={startTranslate} title="click here"></Button>
      <Animated.Text
        style={[
          { fontSize: 20, color: "blue", marginBottom: 20 },
          { transform: [{ translateX: translate }] },
        ]}
      >
        Translate X
      </Animated.Text>

      <Button onPress={startChangeScale} title="click here"></Button>
      <Animated.Text
        style={[
          { fontSize: 20, color: "blue", marginBottom: 20 },
          { transform: [{ scale: scale }] },
        ]}
      >
        scale
      </Animated.Text>

      <Button onPress={startChangeScaleX} title="click here"></Button>
      <Animated.Text
        style={[
          { fontSize: 20, color: "blue", marginBottom: 20 },
          { transform: [{ scaleX: scaleX }] },
        ]}
      >
        scale
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
