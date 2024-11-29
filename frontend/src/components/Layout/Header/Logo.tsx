import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import DddForumLogo from '@/assets/images/ddd-forum-logo.png';

export function Logo() {
  return <Image source={DddForumLogo} style={styles.logo} />;
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    aspectRatio: 1
  }
});
