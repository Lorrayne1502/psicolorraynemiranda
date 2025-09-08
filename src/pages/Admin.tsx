import React, { useState } from 'react';
import BlogManager, { UserPost } from '../components/BlogManager';
import Button from '../components/Button';

interface AdminProps {
  onNewPost: (post: UserPost) => void;
}

const Admin: React.FC<AdminProps> = ({ onNewPost }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'minha-senha-secreta') { // substitua por sua senha
      setLoggedIn(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  if (!loggedIn) {
    return (
      <div className="pt-24 flex items-center justify-center min-h-screen bg-[#FAFAFA]">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4 text-[#333333]">Login da Autora</h2>
          <input
            type="password"
            placeholder="Digite a senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#C8B6E2]"
          />
          <Button onClick={handleLogin} className="w-full">
            Entrar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 container mx-auto px-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-[#333333]">Painel de Publicação</h2>
        <BlogManager onNewPost={onNewPost} />
      </div>
    </div>
  );
};

export default Admin;

