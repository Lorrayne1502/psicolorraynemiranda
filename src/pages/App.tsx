import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import AdminWrapper from './AdminWrapper';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<AdminWrapper />} />
        <Route path="*" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
