import { StyleSheet, View } from 'react-native';
import { usePathname } from 'expo-router';

import { HeaderActionButton } from './HeaderActionButton';
import { Logo } from './Logo';
import { TitleAndSubmission } from './TitleAndSubmission';

import { isWeb } from '@/src/helpers';
import { useUserContext } from '@/src/contexts';

const shouldShowActionButton = (pathName: string) => {
  return pathName !== '/sign-up';
};

export function Header() {
  const pathName = usePathname();
  const { user } = useUserContext();

  return (
    <View style={styles.header}>
      {isWeb && <Logo />}
      <TitleAndSubmission />
      {shouldShowActionButton(pathName) && <HeaderActionButton user={user} />}
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
