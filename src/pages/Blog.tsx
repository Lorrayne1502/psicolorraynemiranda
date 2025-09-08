import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tags } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { blogData } from '../data/blogData';

interface Post {
  id: number;
  title: string;
  content: string;
  excerpt?: string;
  date: string;
  imageUrl?: string;
  tags: string[];
  suggestions?: string[];
  isUserPost?: boolean;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [userPosts, setUserPosts] = useState<Post[]>([]);

  // Carrega posts criados pelo usuário do localStorage
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('userPosts') || '[]');
    setUserPosts(savedPosts);
  }, []);

  const allPosts: Post[] = [
    ...userPosts,
    ...blogData.map(p => ({ ...p, suggestions: [], isUserPost: false }))
  ];

  const allTags = [...new Set(allPosts.flatMap(post => post.tags))];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="pt-24">
      {/* Hero + Pesquisa + Filtros */}
      <section className="bg-[#DFD6F0] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle 
            title="Blog"
            subtitle="Reflexões sobre saúde mental, autocuidado e o universo feminino"
            centered
          />
          <div className="max-w-xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 pl-12 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#C8B6E2] border-none"
              />
              <Search className="absolute top-3 left-4 text-[#A68FCA]" size={20} />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`flex items-center px-4 py-2 rounded-full text-sm ${
                  selectedTag === tag ? 'bg-[#C8B6E2] text-white' : 'bg-white text-[#666666] hover:bg-[#DFD6F0]'
                } transition-colors duration-300`}
              >
                <Tags size={14} className="mr-2" />
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-4">Nenhum artigo encontrado</h3>
              <p className="text-[#666666] mb-6">
                Não encontramos artigos correspondentes à sua pesquisa. Tente outros termos ou remova os filtros.
              </p>
              <Button onClick={() => { setSearchTerm(''); setSelectedTag(null); }}>
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const BlogCard: React.FC<{ post: Post }> = ({ post }) => {
  const [suggestions, setSuggestions] = useState(post.suggestions || []);
  const [input, setInput] = useState('');

  const addSuggestion = () => {
    if (!input) return;
    setSuggestions([...suggestions, input]);
    setInput('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      {post.imageUrl && (
        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
      )}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map(tag => (
            <span key={tag} className="inline-block bg-[#FCE4EE] text-[#F0A8C8] text-xs px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-[#666666] mb-4 line-clamp-3">{post.excerpt ?? post.content}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-[#999999]">{post.date}</span>
          <Link to={`/blog/${post.id}`} className="text-[#C8B6E2] font-medium hover:underline">Ler mais</Link>
        </div>

        {/* Sugestões */}
        <div>
          <h4 className="font-semibold mb-1">Sugestões para o próximo post:</h4>
          <div className="flex gap-2 mb-2">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua sugestão"
              className="flex-1 p-2 border rounded"
            />
            <button onClick={addSuggestion} className="bg-blue-600 text-white px-4 py-2 rounded">Enviar</button>
          </div>
          <ul className="text-sm list-disc list-inside">
            {suggestions.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
