import { FlatList, StyleSheet } from 'react-native';

import { PostItem } from '../PostItem';

import type { Post, Vote } from '@/src/types';

function getPostPoints(votes: Vote[]): number {
  let points = 0;
  for (const vote of votes) {
    points += vote.voteType === 'Upvote' ? 1 : -1;
  }
  return points;
}

const sortPostsByPopularity = (
  posts: Post[]
): { post: Post; popularity: number }[] => {
  return posts
    .map((post) => ({ post, popularity: getPostPoints(post.votes) }))
    .sort((a, b) => b.popularity - a.popularity);
};

export function PostList({ posts }: { posts: Post[] }) {
  const postsByPopularity = sortPostsByPopularity(posts);
  return (
    <FlatList
      data={postsByPopularity}
      renderItem={({ item }) => <PostItem {...item} />}
      keyExtractor={(item) => item.post.id.toString()}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 20
  }
});
