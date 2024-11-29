export type User = {
  id: number;
  username: string;
};

export type Vote = {
  id: number;
  postId: number;
  voteType: 'Upvote' | 'Downvote';
};

export type Comment = {
  message: string;
};

export type Post = {
  id: number;
  author: User;
  title: string;
  createdAt: string;
  comments: Comment[];
  votes: Vote[];
};
