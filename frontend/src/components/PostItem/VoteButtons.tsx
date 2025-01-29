import { StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Octicons';

import { Vote } from '@/src/types';

const ICON_SIZE = 24;

function computePostPopularity(votes: Vote[]): number {
  let points = 0;
  for (const vote of votes) {
    points += vote.voteType === 'Upvote' ? 1 : -1;
  }
  return points;
}

export function VoteButtons({ votes }: { votes: Vote[] }) {
  const popularity = computePostPopularity(votes);
  return (
    <View style={styles.container}>
      <Icon name="arrow-up" size={ICON_SIZE} />
      <Text>{popularity}</Text>
      <Icon name="arrow-down" size={ICON_SIZE} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4
  }
});
