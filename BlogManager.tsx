import React, { useState } from 'react';

interface Post {
  title: string;
  date: string;
  content: string;
  image?: string; // imagem como base64
  suggestions: string[];
}

const BlogManager: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState<Post>({
    title: '',
    date: '',
    content: '',
    image: '',
    suggestions: []
  });
  const [suggestionInput, setSuggestionInput] = useState('');

  // Atualiza campos de texto
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  // Lê a imagem e converte para base64
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewPost({ ...newPost, image: event.target?.result as string });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Publica post
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.date || !newPost.content) return;
    setPosts([newPost, ...posts]);
    setNewPost({ title: '', date: '', content: '', image: '', suggestions: [] });
    setShowForm(false);
  };

  // Adiciona sugestão
  const handleSuggestionSubmit = (postIndex: number) => {
    if (!suggestionInput) return;
    const updatedPosts = [...posts];
    updatedPosts[postIndex].suggestions.push(suggestionInput);
    setPosts(updatedPosts);
    setSuggestionInput('');
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Botão para abrir formulário */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="px-4 py-2 mb-4 rounded text-white"
        style={{ backgroundColor: 'var(--theme-color)' }} // cor do tema
      >
        {showForm ? 'Cancelar' : 'Adicionar Nova Postagem'}
      </button>

      {/* Formulário */}
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
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full mb-2"
          />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Publicar
          </button>
        </form>
      )}

      {/* Posts */}
      <div>
        {posts.map((post, index) => (
          <div key={index} className="mb-6 p-4 border rounded shadow-sm">
            <h2 className="text-xl font-bold mb-1">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-2">{post.date}</p>
            {post.image && (
              <img src={post.image} alt={post.title} className="mb-2 rounded max-h-64 object-cover w-full" />
            )}
            <p className="mb-2">{post.content}</p>

            {/* Campo de sugestões */}
            <div className="mt-4">
              <h3 className="font-semibold mb-1">Sugestões para o próximo post:</h3>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Digite sua sugestão"
                  value={suggestionInput}
                  onChange={(e) => setSuggestionInput(e.target.value)}
                  className="flex-1 p-2 border rounded"
                />
                <button
                  onClick={() => handleSuggestionSubmit(index)}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Enviar
                </button>
              </div>
              <ul className="text-sm list-disc list-inside">
                {post.suggestions.map((sug, i) => (
                  <li key={i}>{sug}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManager;
