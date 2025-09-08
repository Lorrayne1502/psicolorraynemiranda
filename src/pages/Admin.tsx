import { useState, useEffect } from 'react';
import Admin from './pages/Admin';
import { UserPost } from './components/BlogManager';

const AdminWrapper = () => {
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('userPosts') || '[]');
    setUserPosts(savedPosts);
  }, []);

  const handleNewPost = (post: UserPost) => {
    const updatedPosts = [post, ...userPosts];
    setUserPosts(updatedPosts);
    localStorage.setItem('userPosts', JSON.stringify(updatedPosts));
  };

  return <Admin onNewPost={handleNewPost} />;
};

export default AdminWrapper;
