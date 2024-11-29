import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

type User = {
  username: string;
};

type HeaderActionButtonProps = {
  user?: User;
};

function JoinButton() {
  return (
    <Link href="/join" style={styles.button}>
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

export function HeaderActionButton({ user }: HeaderActionButtonProps) {
  if (user === undefined) return <JoinButton />;
  return <UserAndLogout user={user} />;
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: 4
  }
});
