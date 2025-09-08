import React, { useState } from 'react';
import Button from './Button';

export interface UserPost {
  id: number;
  title: string;
  date: string;
  content: string;
  imageUrl?: string;
  tags: string[];
  suggestions: string[];
}

interface BlogManagerProps {
  onNewPost?: (post: UserPost) => void;
}

const BlogManager: React.FC<BlogManagerProps> = ({ onNewPost }) => {
  const [newPost, setNewPost] = useState({
    title: '',
    date: '',
    content: '',
    imageFile: null as File | null,
    tags: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewPost({ ...newPost, imageFile: e.target.files[0] });
    }
  };

  const resizeImage = (file: File, maxWidth: number, maxHeight: number): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        let { width, height } = img;
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.7));
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.date || !newPost.content) return;

    let imageUrl = '';
    if (newPost.imageFile) {
      imageUrl = await resizeImage(newPost.imageFile, 800, 600);
    }

    const userPost: UserPost = {
      id: Date.now(),
      title: newPost.title,
      date: newPost.date,
      content: newPost.content,
      imageUrl,
      tags: newPost.tags.split(',').map(t => t.trim()).filter(Boolean),
      suggestions: [],
    };

    onNewPost?.(userPost);

    const savedPosts = JSON.parse(localStorage.getItem('userPosts') || '[]');
    localStorage.setItem('userPosts', JSON.stringify([userPost, ...savedPosts]));

    setNewPost({ title: '', date: '', content: '', imageFile: null, tags: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={newPost.title}
        onChange={handleChange}
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#C8B6E2]"
      />
      <input
        type="date"
        name="date"
        value={newPost.date}
        onChange={handleChange}
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#C8B6E2]"
      />
      <textarea
        name="content"
        placeholder="Conteúdo"
        value={newPost.content}
        onChange={handleChange}
        className="w-full p-3 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-[#C8B6E2]"
      />
      <input
        type="text"
        name="tags"
        placeholder="Tags separadas por vírgula"
        value={newPost.tags}
        onChange={handleChange}
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#C8B6E2]"
      />
      <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
      <Button type="submit" className="w-full">
        Publicar
      </Button>
    </form>
  );
};

export default BlogManager;

