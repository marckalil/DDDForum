import { Stack, usePathname } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import ToastManager from 'toastify-react-native';

import { isWeb } from '../helpers';

import { UserProvider } from '@/src/contexts';

export default function RootLayout() {
  const pathName = usePathname();
  const headerShown: boolean = !isWeb && pathName !== '/';

  return (
    <UserProvider>
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView}>
          <Stack
            screenOptions={{ headerShown, contentStyle: styles.container }}
          />
        </SafeAreaView>
      </View>
      <ToastManager
        position="top"
        positionValue={8}
        width="auto"
        height="auto"
        style={{ padding: 12 }}
        textStyle={{ fontSize: 16, fontWeight: 'bold' }}
      />
    </UserProvider>
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
