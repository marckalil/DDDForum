import { StyleSheet, View } from 'react-native';

import { Content } from './Content';
import { Header } from './Header';

import { isWeb } from '@/src/helpers';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <View style={isWeb ? styles.webContainer : styles.container}>
      <Header />
      <Content>{children}</Content>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  webContainer: {
    width: 900,
    alignSelf: 'center'
  }
});
