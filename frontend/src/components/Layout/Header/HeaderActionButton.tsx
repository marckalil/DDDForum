import { View, Text } from 'react-native';

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
  return (
    <View>
      <Text>{user.username}</Text>
      <Text>logout</Text>
    </View>
  );
}

export function HeaderActionButton({ user }: { user?: User }) {
  if (user === undefined) return <JoinButton />;
  return <UserAndLogout user={user} />;
}
