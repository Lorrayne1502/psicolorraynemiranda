import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tags } from 'lucide-react';
import { blogData } from '../data/blogData';
import Button from '../components/Button';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || '0');
  
  const post = blogData.find(post => post.id === postId);
  
  if (!post) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-3xl font-semibold mb-4">Artigo não encontrado</h1>
          <p className="text-[#666666] mb-6">
            O artigo que você está procurando não existe ou foi removido.
          </p>
          <Button to="/blog">
            Voltar para o Blog
          </Button>
        </div>
      </div>
    );
  }

  // Find related posts (posts with at least one tag in common)
  const relatedPosts = blogData
    .filter(p => p.id !== postId && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${post.imageUrl})` 
        }}
      >
        <div className="container mx-auto px-4 text-center text-white z-10">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {post.tags.map(tag => (
              <span key={tag} className="inline-block bg-[#C8B6E2] bg-opacity-80 text-white text-sm px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center gap-4 text-sm opacity-90">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>5 min de leitura</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-[#C8B6E2] mb-8 hover:underline">
              <ArrowLeft size={16} className="mr-2" />
              Voltar para o blog
            </Link>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[#666666] mb-8 font-medium italic">
                {post.excerpt}
              </p>
              
              <h2>A importância do autocuidado</h2>
              <p>
                O autocuidado não é luxo, mas necessidade. Em uma sociedade que frequentemente valoriza a produtividade 
                acima do bem-estar, reservar tempo para si mesma torna-se um ato revolucionário. Quando priorizamos 
                nossas necessidades físicas, emocionais e mentais, não apenas melhoramos nossa qualidade de vida, mas 
                também nos tornamos mais presentes e eficientes em nossos relacionamentos e responsabilidades.
              </p>
              
              <p>
                A prática regular do autocuidado ajuda a:
              </p>
              
              <ul>
                <li>Reduzir níveis de estresse e ansiedade</li>
                <li>Melhorar a qualidade do sono</li>
                <li>Aumentar a clareza mental e foco</li>
                <li>Fortalecer o sistema imunológico</li>
                <li>Promover uma relação mais saudável consigo mesma</li>
              </ul>
              
              <h2>Encontrando equilíbrio na rotina</h2>
              <p>
                Um dos desafios mais comuns que enfrentamos é integrar práticas de autocuidado em uma rotina já cheia 
                de compromissos. No entanto, pequenas mudanças podem ter grande impacto. Começar com apenas cinco 
                minutos diários dedicados a uma atividade que nutra seu bem-estar pode ser o primeiro passo para uma 
                transformação significativa.
              </p>
              
              <blockquote>
                <p>
                  "O autocuidado é uma forma de honrar a si mesma e reconhecer seu valor. Não é egoísmo, mas um 
                  reconhecimento de que seu bem-estar é fundamental para tudo o mais em sua vida."
                </p>
              </blockquote>
              
              <h2>Praticando o autocuidado no dia a dia</h2>
              <p>
                O autocuidado pode manifestar-se de diversas formas, adequando-se às necessidades e preferências 
                de cada pessoa. Algumas práticas simples que podem ser incorporadas ao cotidiano incluem:
              </p>
              
              <h3>1. Autocuidado físico</h3>
              <p>
                Envolve cuidar do corpo através de uma alimentação balanceada, exercícios regulares, sono adequado 
                e check-ups médicos. Atividades como caminhadas ao ar livre, yoga ou simplesmente se movimentar 
                durante o dia contribuem para o bem-estar físico.
              </p>
              
              <h3>2. Autocuidado emocional</h3>
              <p>
                Reconhecer e expressar emoções de forma saudável é essencial. Práticas como escrever um diário, 
                conversar com pessoas queridas sobre seus sentimentos ou buscar apoio terapêutico são formas 
                de cuidar de sua saúde emocional.
              </p>
              
              <h3>3. Autocuidado mental</h3>
              <p>
                Alimentar a mente com estímulos positivos e permitir momentos de descanso mental. Leitura, 
                meditação, práticas de mindfulness ou simplesmente fazer pausas durante o dia para respirar 
                profundamente são formas de autocuidado mental.
              </p>
              
              <h3>4. Autocuidado social</h3>
              <p>
                Cultivar relacionamentos saudáveis e nutritivos, estabelecer limites claros e passar tempo com 
                pessoas que elevam seu espírito. Também significa reconhecer quando precisa de tempo sozinha.
              </p>
              
              <h3>5. Autocuidado espiritual</h3>
              <p>
                Conectar-se com algo maior que si mesma, seja através de práticas religiosas, contato com a 
                natureza, meditação ou atividades que tragam significado e propósito à sua vida.
              </p>
              
              <h2>Conclusão</h2>
              <p>
                O autocuidado não é uma tendência passageira, mas uma prática essencial para uma vida plena e 
                equilibrada. Ao dedicar tempo e atenção às suas necessidades, você não apenas melhora sua qualidade 
                de vida, mas também se torna uma pessoa mais presente e disponível para aqueles ao seu redor.
              </p>
              
              <p>
                Lembre-se: o autocuidado é uma jornada, não um destino. Pequenos passos consistentes levam a 
                grandes transformações ao longo do tempo. Comece hoje, com gentileza e paciência consigo mesma.
              </p>
            </div>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center flex-wrap gap-2">
                <Tags size={20} className="text-[#C8B6E2] mr-2" />
                {post.tags.map(tag => (
                  <Link 
                    key={tag} 
                    to={`/blog?tag=${tag}`} 
                    className="bg-[#FCE4EE] text-[#F0A8C8] px-3 py-1 rounded-full text-sm hover:bg-[#F8C8DC] transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Author */}
            <div className="mt-8 bg-[#F5F5DC] p-6 rounded-lg">
              <div className="flex items-center">
                <img 
                  src="/images/perfil.jpg" 
                  alt="Lorrayne Miranda Teixeira" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Lorrayne Miranda Teixeira</h3>
                  <p className="text-sm text-[#666666]">Psicóloga Clínica (CRP 07/39636)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#FAFAFA] py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-8">Artigos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full transition-transform duration-300 group-hover:-translate-y-1">
                      <img 
                        src={relatedPost.imageUrl} 
                        alt={relatedPost.title} 
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-[#C8B6E2] transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-[#999999]">{relatedPost.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;