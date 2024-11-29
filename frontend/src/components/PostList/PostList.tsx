import { FlatList, StyleSheet } from 'react-native';

import { PostItem } from '../PostItem';

import type { Post } from '@/src/types';

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostItem post={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 20
  }
});
