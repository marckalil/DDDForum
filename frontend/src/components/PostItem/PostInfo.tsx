import { StyleSheet, Text, View } from 'react-native';
import { differenceInDays } from 'date-fns';

import { Link } from '@/src/components/Link';
import type { User } from '@/src/types';

function Separator() {
  return <Text style={styles.separator}>•</Text>;
}

function getNumberOfDaysSince(date: string): number {
  const currentDate = new Date();
  const providedDate = new Date(date);
  return differenceInDays(currentDate, providedDate);
}

export function PostInfo({
  author,
  createdAt,
  numberOfComments
}: {
  author: User;
  createdAt: string;
  numberOfComments: number;
}) {
  const comments =
    numberOfComments < 2
      ? `${numberOfComments} comment`
      : `${numberOfComments} comments`;

  const elapsedDaysSincePostCreation = getNumberOfDaysSince(createdAt);
  const elapsedTime =
    elapsedDaysSincePostCreation < 2
      ? `${elapsedDaysSincePostCreation} day`
      : `${elapsedDaysSincePostCreation} days`;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{elapsedTime}</Text>
      <Separator />
      <Link href="/" style={styles.text}>
        {author.username}
      </Link>
      <Separator />
      <Text style={styles.text}>{comments}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  text: {
    fontSize: 14
  },
  separator: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
