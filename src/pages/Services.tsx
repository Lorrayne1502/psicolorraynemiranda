import { MessagesSquare, Heart, ShieldCheck, Bookmark, AlarmCheck, Clock, CreditCard, Check, AlertTriangle, Phone } from 'lucide-react';
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
      
      {/* Emergency Notice */}
      <section className="bg-red-50 border-l-4 border-red-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-start">
            <AlertTriangle size={24} className="text-red-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-red-800 mb-3">
                Importante: Situações de Emergência
              </h3>
              <div className="text-red-700 space-y-3">
                <p>
                  <strong>Em caso de emergência psiquiátrica, ideação suicida ou risco iminente à vida, 
                  procure imediatamente:</strong>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">SAMU</h4>
                    <p className="text-2xl font-bold text-red-600">192</p>
                    <p className="text-sm">Atendimento médico de urgência</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">CVV</h4>
                    <p className="text-2xl font-bold text-red-600">188</p>
                    <p className="text-sm">Centro de Valorização da Vida</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">Emergência</h4>
                    <p className="text-2xl font-bold text-red-600">190/193</p>
                    <p className="text-sm">Polícia Militar / Bombeiros</p>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  <strong>Importante:</strong> A psicoterapia online não substitui atendimento médico de emergência. 
                  Em situações de crise aguda, busque ajuda presencial imediata em hospitais ou unidades de pronto atendimento.
                </p>
              </div>
            </div>
          </div>
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
      
      {/* Limitações e Emergências */}
      <section className="bg-[#FCE4EE] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Limitações do Atendimento Online"
            subtitle="Informações importantes sobre o alcance e limitações da psicoterapia online"
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* O que a terapia online pode oferecer */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#D8EBDD] rounded-full flex items-center justify-center mr-4">
                    <Check size={24} className="text-[#94B89A]" />
                  </div>
                  <h3 className="text-xl font-semibold">O que posso oferecer</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={16} className="text-[#94B89A] mt-1 mr-2 flex-shrink-0" />
                    <span>Psicoterapia individual para questões emocionais</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-[#94B89A] mt-1 mr-2 flex-shrink-0" />
                    <span>Acolhimento em momentos de sofrimento</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-[#94B89A] mt-1 mr-2 flex-shrink-0" />
                    <span>Desenvolvimento de estratégias de enfrentamento</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-[#94B89A] mt-1 mr-2 flex-shrink-0" />
                    <span>Orientação para autocuidado e bem-estar</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-[#94B89A] mt-1 mr-2 flex-shrink-0" />
                    <span>Suporte em transições e mudanças de vida</span>
                  </li>
                </ul>
              </div>
              
              {/* Limitações */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#FCE4EE] rounded-full flex items-center justify-center mr-4">
                    <AlertTriangle size={24} className="text-[#F0A8C8]" />
                  </div>
                  <h3 className="text-xl font-semibold">Limitações importantes</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertTriangle size={16} className="text-[#F0A8C8] mt-1 mr-2 flex-shrink-0" />
                    <span>Não realizo atendimento de emergências psiquiátricas</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={16} className="text-[#F0A8C8] mt-1 mr-2 flex-shrink-0" />
                    <span>Não substituo tratamento médico ou psiquiátrico</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={16} className="text-[#F0A8C8] mt-1 mr-2 flex-shrink-0" />
                    <span>Não atendo casos de risco iminente à vida</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={16} className="text-[#F0A8C8] mt-1 mr-2 flex-shrink-0" />
                    <span>Não prescrevo ou oriento sobre medicamentos</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={16} className="text-[#F0A8C8] mt-1 mr-2 flex-shrink-0" />
                    <span>Não realizo avaliações para laudos ou perícias</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Protocolo de Emergência */}
            <div className="bg-red-50 border border-red-200 p-8 rounded-lg">
              <div className="flex items-start mb-6">
                <Phone size={32} className="text-red-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-red-800 mb-2">
                    Protocolo para Situações de Emergência
                  </h3>
                  <p className="text-red-700">
                    Conforme as diretrizes do Conselho Federal de Psicologia (CFP)
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-3">
                    Se você está em crise ou com pensamentos de autolesão:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h5 className="font-semibold text-red-700 mb-2">1. Busque ajuda imediata</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Ligue 192 (SAMU)</li>
                        <li>• Vá ao hospital mais próximo</li>
                        <li>• Procure um familiar ou amigo</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h5 className="font-semibold text-red-700 mb-2">2. Suporte 24h disponível</h5>
                      <ul className="text-sm space-y-1">
                        <li>• CVV: 188 (24h gratuito)</li>
                        <li>• Chat CVV: cvv.org.br</li>
                        <li>• CAPS mais próximo</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-3">
                    Minha responsabilidade profissional:
                  </h4>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong>Quebra de sigilo:</strong> Em situações de risco iminente à vida, 
                        posso quebrar o sigilo profissional para proteger você, conforme Art. 10 
                        do Código de Ética Profissional do Psicólogo.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong>Encaminhamento:</strong> Orientarei sobre a necessidade de 
                        atendimento presencial especializado quando necessário.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong>Comunicação com familiares:</strong> Em casos extremos, 
                        poderei contatar familiares ou pessoas de referência para garantir sua segurança.
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <p className="text-red-700 font-medium">
                    Lembre-se: Buscar ajuda é um ato de coragem e autocuidado. 
                    Você não está sozinha nessa jornada.
                  </p>
                </div>
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
                Os atendimentos são pensados para serem acessíveis, com possibilidade de valores reduzidos conforme horário e disponibilidade de vagas sociais. Os reajustes são comunicados com antecedência e sempre conversados com cuidado e transparência. O pagamento pode ser feito via PIX. Consulte também sobre opções de pacotes com desconto.
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