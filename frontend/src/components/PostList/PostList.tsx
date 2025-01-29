import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import { PostItem } from '../PostItem';

import type { Post } from '@/src/types';

type PostListProps = {
  loadingPosts: boolean;
  posts: Post[];
};
export function PostList({ loadingPosts, posts }: PostListProps) {
  if (loadingPosts)
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );

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
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
