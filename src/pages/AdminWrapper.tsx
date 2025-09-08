import React from 'react';
import Admin from './pages/Admin';
import { Navigate } from 'react-router-dom';

const AdminWrapper: React.FC = () => {
  // Aqui você verifica se o usuário está autenticado
  const isAuthenticated = Boolean(localStorage.getItem('userLogged')); // exemplo simples

  if (!isAuthenticated) {
    // Se não estiver logado, redireciona para o blog ou login
    return <Navigate to="/blog" replace />;
  }

  // Se estiver autenticado, exibe o Admin
  return (
    <div>
      <header style={{ padding: '1rem', backgroundColor: '#f2f2f2' }}>
        <h2>Painel Administrativo</h2>
      </header>
      <main style={{ padding: '1rem' }}>
        <Admin />
      </main>
    </div>
  );
};

export default AdminWrapper;
