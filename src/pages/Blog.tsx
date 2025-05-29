import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tags } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { blogData } from '../data/blogData';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Extract all unique tags from blogData
  const allTags = [...new Set(blogData.flatMap(post => post.tags))];
  
  // Filter blog posts based on search term and selected tag
  const filteredPosts = blogData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#DFD6F0] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle 
            title="Blog"
            subtitle="Reflexões sobre saúde mental, autocuidado e o universo feminino"
            centered
          />
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar artigos..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full py-3 px-4 pl-12 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#C8B6E2] border-none"
              />
              <Search className="absolute top-3 left-4 text-[#A68FCA]" size={20} />
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`flex items-center px-4 py-2 rounded-full text-sm ${
                  selectedTag === tag 
                    ? 'bg-[#C8B6E2] text-white' 
                    : 'bg-white text-[#666666] hover:bg-[#DFD6F0]'
                } transition-colors duration-300`}
              >
                <Tags size={14} className="mr-2" />
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
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
                Não encontramos artigos correspondentes à sua pesquisa. Tente com outros termos ou remova os filtros.
              </p>
              <Button onClick={() => { setSearchTerm(''); setSelectedTag(null); }}>
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="bg-[#F5F5DC] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-4">
                Receba novos artigos em seu e-mail
              </h2>
              <p className="text-[#666666]">
                Inscreva-se para receber novos artigos, dicas de saúde mental e conteúdos exclusivos.
              </p>
            </div>
            
            <form className="max-w-xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-grow py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B6E2] border border-gray-200"
                  required
                />
                <Button type="submit">
                  Inscrever-se
                </Button>
              </div>
              <p className="text-xs text-[#999999] mt-4 text-center">
                Ao se inscrever, você concorda com nossa Política de Privacidade. 
                Você pode cancelar sua inscrição a qualquer momento.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { id, title, excerpt, date, imageUrl, tags } = post;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <Link to={`/blog/${id}`} className="block">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map(tag => (
            <span key={tag} className="inline-block bg-[#FCE4EE] text-[#F0A8C8] text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/blog/${id}`} className="block">
          <h3 className="text-xl font-semibold mb-2 hover:text-[#C8B6E2] transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-[#666666] mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-[#999999]">{date}</span>
          <Link 
            to={`/blog/${id}`} 
            className="text-[#C8B6E2] font-medium hover:underline"
          >
            Ler mais
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;