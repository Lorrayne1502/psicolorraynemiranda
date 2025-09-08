import React, { useState, useEffect } from 'react';

type Post = {
  id: string;
  title: string;
  content: string;
  date: string;
};

const AdminWrapper: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [password, setPassword] = useState('');

  const [posts, setPosts] = useState<Post[]>(() => {
    const saved = localStorage.getItem('posts');
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  // Verifica se já está logado no carregamento
  useEffect(() => {
    const logged = localStorage.getItem('isAdmin');
    if (logged === 'true') setIsLogged(true);
  }, []);

  const MY_PASSWORD = 'minhasenha123'; // sua senha secreta

  const handleLogin = () => {
    if (password === psicolorraynemt39636) {
      setIsLogged(true);
      localStorage.setItem('isAdmin', 'true');
    } else {
      alert('Senha incorreta!');
    }
    setPassword('');
  };

  const handleLogout = () => {
    setIsLogged(false);
    localStorage.removeItem('isAdmin');
  };

  const savePosts = (updatedPosts: Post[]) => {
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleAddOrEditPost = () => {
    if (editingId) {
      // Editar post existente
      const updatedPosts = posts.map((p) =>
        p.id === editingId ? { ...p, title, content } : p
      );
      savePosts(updatedPosts);
      setEditingId(null);
    } else {
      // Adicionar novo post
      const newPost: Post = {
        id: Date.now().toString(),
        title,
        content,
        date: new Date().toLocaleDateString(),
      };
      savePosts([...posts, newPost]);
    }
    setTitle('');
    setContent('');
  };

  const handleEdit = (post: Post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditingId(post.id);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que quer excluir este post?')) {
      const updatedPosts = posts.filter((p) => p.id !== id);
      savePosts(updatedPosts);
    }
  };

  if (!isLogged) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Login de Administrador</h2>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Painel Administrativo</h2>
      <button onClick={handleLogout} style={{ marginBottom: '1rem' }}>
        Logout
      </button>

      <input
        type="text"
        placeholder="Título do post"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
      />
      <textarea
        placeholder="Conteúdo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ display: 'block', marginBottom: '0.5rem', width: '100%', height: '100px' }}
      />
      <button onClick={handleAddOrEditPost}>
        {editingId ? 'Salvar Alterações' : 'Adicionar Post'}
      </button>

      <h3 style={{ marginTop: '2rem' }}>Posts existentes:</h3>
      {posts.length === 0 && <p>Nenhum post ainda.</p>}
      <ul>
        {posts.map((p) => (
          <li key={p.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '0.5rem' }}>
            <strong>{p.title}</strong> - {p.date}
            <p>{p.content}</p>
            <button onClick={() => handleEdit(p)} style={{ marginRight: '0.5rem' }}>
              Editar
            </button>
            <button onClick={() => handleDelete(p.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminWrapper;

