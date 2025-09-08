import React, { useState } from 'react';

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
  const [showForm, setShowForm] = useState(false);
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
      imageUrl = await resizeImage(newPost.imageFile, 800, 600); // tamanho reduzido
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

    setNewPost({ title: '', date: '', content: '', imageFile: null, tags: '' });
    setShowForm(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="px-4 py-2 mb-4 rounded text-white"
        style={{ backgroundColor: 'var(--theme-color)' }}
      >
        {showForm ? 'Cancelar' : 'Adicionar Nova Postagem'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 bg-gray-100 p-4 rounded">
          <input
            type="text"
            name="title"
            placeholder="Título"
            value={newPost.title}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="date"
            name="date"
            value={newPost.date}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
          />
          <textarea
            name="content"
            placeholder="Conteúdo"
            value={newPost.content}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded h-32"
          />
          <input
            type="text"
            name="tags"
            placeholder="Tags separadas por vírgula"
            value={newPost.tags}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full mb-2"
          />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Publicar
          </button>
        </form>
      )}
    </div>
  );
};

export default BlogManager;

