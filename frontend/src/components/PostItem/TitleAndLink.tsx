import { StyleSheet, Text, View } from 'react-native';

import { Link } from '@/src/components/Link';

export function TitleAndLink({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.postTitle}>
        {title}
      </Text>
      <Link href="/">link</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8
  },
  postTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold'
  }
});
