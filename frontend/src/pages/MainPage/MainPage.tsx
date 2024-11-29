import { Layout, PostList } from '@/src/components';
import type { Post } from '@/src/types';

const posts: Post[] = [
  {
    id: 1,
    title: 'Domain services vs Application services',
    author: { id: 3, username: 'John' },
    createdAt: '2024-11-28',
    comments: [{ message: 'Great post!' }, { message: 'I have a question...' }],
    votes: [{ id: 1, postId: 1, voteType: 'Upvote' }]
  },
  {
    id: 2,
    title: 'Ports and Adapters',
    author: { id: 2, username: 'Jane' },
    createdAt: '2024-11-20',
    comments: [{ message: 'I have a question...' }],
    votes: [
      { id: 2, postId: 2, voteType: 'Downvote' },
      { id: 5, postId: 2, voteType: 'Upvote' }
    ]
  },
  {
    id: 3,
    title: 'An introduction to Domain-Driven Design - DDD w/ TypeScript',
    author: { id: 1, username: 'John' },
    createdAt: '2024-11-23',
    comments: [
      { message: 'Great post!' },
      { message: 'I have a question...' },
      { message: 'Nice !' }
    ],
    votes: [
      { id: 1, postId: 3, voteType: 'Upvote' },
      { id: 4, postId: 3, voteType: 'Upvote' },
      { id: 6, postId: 3, voteType: 'Upvote' }
    ]
  }
];

export function MainPage() {
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
}
