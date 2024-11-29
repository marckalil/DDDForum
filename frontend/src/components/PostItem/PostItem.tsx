import { StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Octicons';
import { differenceInDays } from 'date-fns';

import { Link } from '@/src/components/Link';
import type { Post, User } from '@/src/types';

const ICON_SIZE = 24;
function VoteButtons({ popularity }: { popularity: number }) {
  return (
    <View style={styles.votesContainer}>
      <Icon name="arrow-up" size={ICON_SIZE} />
      <Text>{popularity}</Text>
      <Icon name="arrow-down" size={ICON_SIZE} />
    </View>
  );
}

function TitleAndLink({ id, title }: { id: number; title: string }) {
  return (
    <View style={styles.titleAndLink}>
      <Text numberOfLines={2} style={styles.postTitle}>
        {title}
      </Text>
      <Link href="/">link</Link>
    </View>
  );
}

function Separator() {
  return <Text style={styles.separator}>•</Text>;
}

function getNumberOfDaysSince(date: string): number {
  const currentDate = new Date();
  const providedDate = new Date(date);
  return differenceInDays(currentDate, providedDate);
}

function PostInfo({
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
    <View style={styles.postInfo}>
      <Text style={styles.postInfoText}>{elapsedTime}</Text>
      <Separator />
      <Link href="/" style={styles.postInfoText}>
        {author.username}
      </Link>
      <Separator />
      <Text style={styles.postInfoText}>{comments}</Text>
    </View>
  );
}

type PostItemProps = {
  post: Post;
  popularity: number;
};

export function PostItem({ post, popularity }: PostItemProps) {
  const { id, title, author, createdAt, comments, votes } = post;

  return (
    <View style={styles.container}>
      <VoteButtons popularity={popularity} />
      <View style={styles.contentContainer}>
        <TitleAndLink id={id} title={title} />
        <PostInfo
          author={author}
          createdAt={createdAt}
          numberOfComments={comments.length}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    borderRadius: 16,
    padding: 12,
    gap: 12
  },
  votesContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  titleAndLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8
  },
  postTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold'
  },
  postInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  postInfoText: {
    fontSize: 14
  },
  separator: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
