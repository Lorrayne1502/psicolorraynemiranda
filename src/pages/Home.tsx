import { ArrowRight, Heart, MessagesSquare, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-4">
        <div 
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6724359/pexels-photo-6724359.jpeg')] bg-cover bg-center"
          style={{ opacity: 0.15 }}
        ></div>
        <div className="container mx-auto z-10">
          <div className="max-w-3xl mx-auto text-center slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#333333] mb-6">
              Psicoterapia para Mulheres
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] mb-8">
              Um espaço seguro para você se conhecer, se acolher e transformar sua relação consigo mesma.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contato" size="lg">
                Agendar Consulta
              </Button>
              <Button to="/sobre" variant="outline" size="lg">
                Conheça meu trabalho
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <SectionTitle 
                title="Lorrayne Miranda Teixeira"
                subtitle="Psicóloga Clínica (CRP 07/39636)"
              />
              <p className="text-[#666666] mb-6">
                Sou especialista no atendimento de mulheres jovens e adultas, com uma abordagem humanista-existencial que valoriza a autenticidade, a escuta ativa e o acolhimento.
              </p>
              <p className="text-[#666666] mb-8">
                Acredito que cada pessoa possui recursos internos para o autodesenvolvimento e meu trabalho é facilitar esse processo de autoconhecimento e crescimento pessoal.
              </p>
              <Button to="/sobre" className="flex items-center">
                Saiba mais sobre mim <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/images/perfil.jpg" 
                  alt="Lorrayne Miranda Teixeira - Psicóloga" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-[#F5F5DC] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Como posso ajudar você"
            subtitle="Conheça os serviços que ofereço para promover seu bem-estar emocional e desenvolvimento pessoal"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#DFD6F0] rounded-full flex items-center justify-center mb-6">
                <MessagesSquare size={28} className="text-[#A68FCA]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Psicoterapia Individual</h3>
              <p className="text-[#666666] mb-6">
                Atendimento personalizado para mulheres que buscam autoconhecimento, desenvolvimento pessoal e superação de dificuldades emocionais.
              </p>
              <Button to="/servicos" variant="outline" size="sm">
                Saiba mais
              </Button>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#D8EBDD] rounded-full flex items-center justify-center mb-6">
                <Heart size={28} className="text-[#94B89A]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Acolhimento Emocional</h3>
              <p className="text-[#666666] mb-6">
                Um espaço seguro para expressar emoções, processar experiências difíceis e encontrar equilíbrio emocional em momentos de crise.
              </p>
              <Button to="/servicos" variant="outline" size="sm">
                Saiba mais
              </Button>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#FCE4EE] rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={28} className="text-[#F0A8C8]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Orientação e Prevenção</h3>
              <p className="text-[#666666] mb-6">
                Suporte para o desenvolvimento de habilidades emocionais, estratégias de enfrentamento e promoção de saúde mental.
              </p>
              <Button to="/servicos" variant="outline" size="sm">
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#C8B6E2] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Pronta para começar sua jornada?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Entre em contato para agendar sua consulta ou tirar dúvidas sobre o processo terapêutico.
          </p>
          <Button to="/contato" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#C8B6E2]">
            Entrar em contato
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;