import { StyleSheet, View } from 'react-native';

import { VoteButtons } from './VoteButtons';
import { TitleAndLink } from './TitleAndLink';
import { PostInfo } from './PostInfo';

import type { Post } from '@/src/types';

type PostItemProps = {
  post: Post;
};

export function PostItem({ post }: PostItemProps) {
  const { title, author, createdAt, comments, votes } = post;

  return (
    <View style={styles.container}>
      <VoteButtons votes={votes} />
      <View style={styles.contentContainer}>
        <TitleAndLink title={title} />
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
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between'
  }
});
