import { MessagesSquare, Heart, ShieldCheck, Bookmark, AlarmCheck, Clock, CreditCard, Check } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Services = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#DFD6F0] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle 
            title="Serviços"
            subtitle="Conheça os serviços que ofereço para cuidar da sua saúde mental e promover seu bem-estar"
            centered
          />
          <p className="text-[#666666] max-w-3xl mx-auto mb-8">
            Meus serviços são voltados para mulheres jovens e adultas que buscam autoconhecimento, 
            desenvolvimento pessoal e suporte emocional. Trabalho com uma abordagem humanista-existencial, 
            focada nas necessidades e potencialidades de cada pessoa. Realizo atendimentos exclusivamente online, 
            oferecendo mais praticidade e conforto para quem busca cuidar de si no ritmo da própria rotina.
          </p>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-3 bg-[#C8B6E2]"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-[#DFD6F0] rounded-full flex items-center justify-center mb-6">
                  <MessagesSquare size={28} className="text-[#A68FCA]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Psicoterapia Individual</h3>
                <p className="text-[#666666] mb-6">
                  Atendimento personalizado para mulheres que buscam autoconhecimento, desenvolvimento pessoal 
                  e superação de dificuldades emocionais.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check size={18} className="text-[#C8B6E2] mt-1 mr-2 flex-shrink-0" />
                    <span>Sessões personalizadas com abordagem humanista-existencial</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-[#C8B6E2] mt-1 mr-2 flex-shrink-0" />
                    <span>Foco no desenvolvimento de recursos internos e autoconhecimento</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-[#C8B6E2] mt-1 mr-2 flex-shrink-0" />
                    <span>Suporte para ansiedade, depressão e questões emocionais</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-[#C8B6E2] mt-1 mr-2 flex-shrink-0" />
                    <span>Atendimento online com flexibilidade de horários</span>
                  </li>
                </ul>
                <Button to="/contato" variant="primary" className="w-full">
                  Agendar Consulta
                </Button>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-3 bg-[#B8D8BE]"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-[#D8EBDD] rounded-full flex items-center justify-center mb-6">
                  <Heart size={28} className="text-[#94B89A]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Acolhimento Emocional</h3>
                <p className="text-[#666666] mb-6">
                  Um espaço seguro para expressar emoções, processar experiências difíceis 
                  e encontrar equilíbrio emocional em momentos de crise.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check size={18} className="text-[#B8D8BE] mt-1 mr-2 flex-shrink-0" />
                    <span>Suporte em momentos de crise ou sofrimento intenso</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-[#B8D8BE] mt-1 mr-2 flex-shrink-0" />
                    <span>Desenvolvimento de estratégias de autorregulação emocional</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-[#B8D8BE] mt-1 mr-2 flex-shrink-0" />
                    <span>Processamento de perdas, lutos e transições de vida</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-[#B8D8BE] mt-1 mr-2 flex-shrink-0" />
                    <span>Atendimento online prioritário para situações emergenciais</span>
                  </li>
                </ul>
                <Button to="/contato" variant="secondary" className="w-full">
                  Agendar Consulta
                </Button>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-3 bg-[#F8C8DC]"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-[#FCE4EE] rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck size={28} className="text-[#F0A8C8]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Orientação e Prevenção</h3>
                <p className="text-[#666666] mb-6">
                  Suporte para o desenvolvimento de habilidades emocionais, estratégias de enfrentamento 
                  e promoção de saúde mental.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check size={18} className="text-[#F8C8DC] mt-1 mr-2 flex-shrink-0" />
                    <span>Desenvolvimento de habilidades de enfrentamento</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-[#F8C8DC] mt-1 mr-2 flex-shrink-0" />
                    <span>Criação de rotinas de autocuidado e bem-estar</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-[#F8C8DC] mt-1 mr-2 flex-shrink-0" />
                    <span>Gerenciamento de estresse e prevenção de esgotamento</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-[#F8C8DC] mt-1 mr-2 flex-shrink-0" />
                    <span>Orientação online para relações saudáveis e assertividade</span>
                  </li>
                </ul>
                <Button to="/contato" variant="outline" className="w-full border-[#F8C8DC] text-[#F0A8C8] hover:bg-[#F8C8DC] hover:text-white">
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Como Funciona */}
      <section className="bg-[#F5F5DC] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Como Funciona"
            subtitle="Entenda o processo terapêutico e como podemos trabalhar juntas"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#DFD6F0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Bookmark size={24} className="text-[#A68FCA]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Agendamento</h3>
              <p className="text-[#666666]">
                Entre em contato para agendar sua primeira consulta através do formulário ou WhatsApp.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#D8EBDD] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessagesSquare size={24} className="text-[#94B89A]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Entrevista Inicial</h3>
              <p className="text-[#666666]">
                Conversamos online sobre suas necessidades e expectativas para o processo terapêutico.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#FCE4EE] rounded-full flex items-center justify-center mx-auto mb-4">
                <AlarmCheck size={24} className="text-[#F0A8C8]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Plano Terapêutico</h3>
              <p className="text-[#666666]">
                Definimos juntas os objetivos e a frequência das sessões de acordo com suas necessidades.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#DFD6F0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={24} className="text-[#A68FCA]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Processo Contínuo</h3>
              <p className="text-[#666666]">
                Iniciamos o processo terapêutico com sessões online regulares e avaliações periódicas do progresso.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Informações Práticas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Informações Práticas"
            subtitle="Detalhes importantes sobre os atendimentos"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Info 1 */}
            <div className="bg-white border border-[#DFD6F0] p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <Clock size={24} className="text-[#C8B6E2] mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Duração das Sessões</h3>
              </div>
              <p className="text-[#666666]">
                As sessões têm duração de 40 minutos e ocorrem semanalmente ou conforme a necessidade avaliada em conjunto.
              </p>
            </div>
            
            {/* Info 2 */}
            <div className="bg-white border border-[#D8EBDD] p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <CreditCard size={24} className="text-[#B8D8BE] mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Investimento</h3>
              </div>
              <p className="text-[#666666]">
                O valor por sessão varia entre R$100 e R$150, dependendo do horário e da disponibilidade de vagas com valor social. Os valores podem ser reajustados periodicamente, sempre com aviso prévio e combinado com cuidado com cada pessoa atendida. Aceito pagamento via PIX. Consulte sobre opções de combos com desconto.
              </p>
            </div>
            
            {/* Info 3 */}
            <div className="bg-white border border-[#FCE4EE] p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <AlarmCheck size={24} className="text-[#F8C8DC] mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Política de Cancelamento</h3>
              </div>
              <p className="text-[#666666]">
                Cancelamentos devem ser feitos com 24 horas de antecedência para remarcação sem custo. 
                Faltas sem aviso prévio serão cobradas normalmente.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[#666666] italic mb-8 max-w-3xl mx-auto">
              "Investir em terapia é investir em autoconhecimento, qualidade de vida e na 
              construção de relacionamentos mais saudáveis consigo e com os outros."
            </p>
            <Button to="/contato" size="lg">
              Agende sua Consulta
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;