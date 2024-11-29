import { StyleSheet, View } from 'react-native';
import { usePathname } from 'expo-router';

import { HeaderActionButton } from './HeaderActionButton';
import { Logo } from './Logo';
import { TitleAndSubmission } from './TitleAndSubmission';

import { isWeb } from '@/src/helpers';

const shouldShowActionButton = (pathName: string) => {
  return pathName !== '/sign-up';
};

export function Header() {
  const pathName = usePathname();

  return (
    <View style={styles.header}>
      {isWeb && <Logo />}
      <TitleAndSubmission />
      {shouldShowActionButton(pathName) && (
        // <HeaderActionButton user={{ username: '@John' }} />
        <HeaderActionButton />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 16,
    marginBottom: 20
  }
});
