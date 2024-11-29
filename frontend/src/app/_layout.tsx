import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <Stack
          screenOptions={{ headerShown: false, contentStyle: styles.container }}
        />
      </SafeAreaView>
    </View>
  );
}

const backgroundColor = '#fff';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor
  },
  safeAreaView: {
    flex: 1
  },
  stack: {
    flex: 1,
    backgroundColor
  }
});
