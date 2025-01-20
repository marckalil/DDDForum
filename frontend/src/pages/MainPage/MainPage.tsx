import { useEffect, useState } from 'react';

import { Layout, PostList } from '@/src/components';
import type { Post } from '@/src/types';
import { api } from '@/src/services';

export function MainPage() {
  const [loadingPosts, setLoadingPosts] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchAllPosts() {
      setLoadingPosts(true);
      try {
        const fetchedPosts = await api.getAllPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingPosts(false);
      }
    }
    fetchAllPosts();
  }, []);

  return (
    <Layout>
      <PostList loadingPosts={loadingPosts} posts={posts} />
    </Layout>
  );
}
