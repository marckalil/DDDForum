import { View, Text, StyleSheet } from 'react-native';

import { Link } from '@/src/components/Link';
import type { User } from '@/src/types';

function JoinButton() {
  return (
    <Link href="/sign-up" linkType="button">
      Join
    </Link>
  );
}

function UserAndLogout({ user }: { user: User }) {
  const { username } = user;
  return (
    <View style={styles.userAndLogoutContainer}>
      <Text>{username}</Text>
      <Text>logout</Text>
    </View>
  );
}

export function HeaderActionButton({ user }: { user: User | null }) {
  if (user === null) return <JoinButton />;
  return <UserAndLogout user={user} />;
}

const styles = StyleSheet.create({
  userAndLogoutContainer: {
    alignItems: 'flex-end'
  }
});
