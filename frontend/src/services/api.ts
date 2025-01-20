import axios from 'axios';

import { Post, User } from '@/src/types';
import { SignUpFormInput } from '@/src/components/SignUpForm';

const baseURL = 'http://localhost:3000';

export const api = {
  signup: async (user: SignUpFormInput): Promise<User> =>
    axios
      .post(`${baseURL}/users/new`, user)
      .then((res) => {
        console.log(res.data);
        const { data: user } = res.data;
        return user;
      })
      .catch((err) => {
        if (err.response) {
          // Server responded with a status other than 200 range
          console.error('Response error:', err.response.data);
        } else if (err.request) {
          // Request was made but no response received
          console.error('Request error:', err.request);
        } else {
          // Something else happened
          console.error('Error:', err.message);
        }
        throw new Error(err);
      }),
  getPosts: async (): Promise<Post[]> =>
    axios
      .get(`${baseURL}/posts?sort=recent`)
      .then((res) => {
        console.log(res.data);
        const {
          data: { posts }
        } = res.data;
        const mappedPosts: Post[] = posts.map((post: any) => ({
          id: post.id,
          title: post.title,
          createdAt: post.dateCreated,
          author: post.memberPostedBy.user,
          comments: post.comments.map((comment: any) => ({
            message: comment.text
          })),
          votes: post.votes.map((vote: any) => ({
            id: vote.id,
            postId: post.id,
            voteType: vote.voteType
          }))
        }));
        return mappedPosts;
      })
      .catch((err) => {
        if (err.response) {
          // Server responded with a status other than 200 range
          console.error('Response error:', err.response.data);
        } else if (err.request) {
          // Request was made but no response received
          console.error('Request error:', err.request);
        } else {
          // Something else happened
          console.error('Error:', err.message);
        }
        throw new Error(err);
      })
};
