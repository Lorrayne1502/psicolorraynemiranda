import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { ChevronRight, GraduationCap, Heart, Lightbulb, Trophy } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#F5F5DC] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Sobre Mim"
                subtitle="Psicóloga Clínica CRP 07/39636"
              />
              <p className="text-[#666666] mb-6">
                Olá! Sou Lorrayne Miranda, psicóloga clínica com formação em abordagem humanista-existencial, 
                dedicada ao atendimento de mulheres jovens e adultas.
              </p>
              <p className="text-[#666666] mb-6">
                Acredito que a psicoterapia é um caminho privilegiado para o autoconhecimento e transformação pessoal. 
                Por meio de um espaço seguro e acolhedor, trabalho para que você possa reconhecer seus recursos internos 
                e desenvolver seu potencial pleno.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-[#DFD6F0] text-[#A68FCA] px-4 py-2 rounded-full text-sm font-medium">Abordagem Humanista</span>
                <span className="bg-[#D8EBDD] text-[#94B89A] px-4 py-2 rounded-full text-sm font-medium">Saúde Mental</span>
                <span className="bg-[#FCE4EE] text-[#F0A8C8] px-4 py-2 rounded-full text-sm font-medium">Empoderamento Feminino</span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/images/perfil.jpg" 
                  alt="Lorrayne Miranda - Psicóloga" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg';
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-[#C8B6E2] font-semibold">CRP 07/39636</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Formação e Experiência */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Formação e Experiência"
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Formação 1 */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border-l-4 border-[#C8B6E2]">
                <div className="flex items-start">
                  <div className="bg-[#DFD6F0] p-2 rounded-full mr-4">
                    <GraduationCap size={24} className="text-[#A68FCA]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Graduação em Psicologia</h3>
                    <p className="text-[#666666] mb-2">Centro Universitário UniÚnica</p>
                    <p className="text-sm text-[#999999]">2018 - 2022</p>
                  </div>
                </div>
              </div>
              
              {/* Experiência */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border-l-4 border-[#B8D8BE]">
                <div className="flex items-start">
                  <div className="bg-[#D8EBDD] p-2 rounded-full mr-4">
                    <Trophy size={24} className="text-[#94B89A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Experiência Clínica</h3>
                    <p className="text-[#666666] mb-4">
                      Atuo no atendimento clínico com foco em:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight size={18} className="text-[#B8D8BE] mt-1 mr-2 flex-shrink-0" />
                        <span>Ansiedade e transtornos de humor</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight size={18} className="text-[#B8D8BE] mt-1 mr-2 flex-shrink-0" />
                        <span>Autoestima e desenvolvimento pessoal</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight size={18} className="text-[#B8D8BE] mt-1 mr-2 flex-shrink-0" />
                        <span>Relacionamentos interpessoais</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight size={18} className="text-[#B8D8BE] mt-1 mr-2 flex-shrink-0" />
                        <span>Questões relacionadas ao universo feminino</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Abordagem */}
      <section className="bg-[#FCE4EE] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Abordagem Humanista-Existencial"
            subtitle="Uma visão integrativa centrada na pessoa"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#666666] mb-6">
                A abordagem humanista-existencial baseia-se na compreensão da pessoa como um ser integral, 
                único e em constante processo de desenvolvimento. Ela valoriza:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Heart size={20} className="text-[#F0A8C8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Autenticidade</h3>
                    <p className="text-[#666666]">
                      Valorização da expressão genuína de sentimentos e pensamentos, promovendo o 
                      autoconhecimento e o desenvolvimento pessoal.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Heart size={20} className="text-[#F0A8C8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Empatia</h3>
                    <p className="text-[#666666]">
                      Compreensão profunda da experiência subjetiva da pessoa, criando um ambiente 
                      de acolhimento e aceitação.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Heart size={20} className="text-[#F0A8C8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Escuta Ativa</h3>
                    <p className="text-[#666666]">
                      Atenção plena e presença no momento terapêutico, permitindo a expressão livre 
                      e o aprofundamento da autocompreensão.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Heart size={20} className="text-[#F0A8C8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Confiança</h3>
                    <p className="text-[#666666]">
                      Construção de um vínculo terapêutico baseado na confiança e no respeito mútuo, 
                      essencial para o processo de transformação pessoal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <Lightbulb size={32} className="text-[#F0A8C8]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Minha Filosofia</h3>
                <p className="text-[#666666] mb-6">
                  "Acredito que cada pessoa é única em sua jornada e possui dentro de si 
                  os recursos necessários para seu crescimento e transformação. Como terapeuta, 
                  meu papel é criar um espaço seguro onde você possa explorar seus pensamentos, 
                  sentimentos e experiências com liberdade e autenticidade."
                </p>
                <p className="text-[#666666] mb-6">
                  "Na terapia humanista-existencial, você é a protagonista do seu processo. 
                  Juntas, trabalharemos para fortalecer sua conexão consigo mesma, 
                  desenvolver recursos de enfrentamento e construir uma vida mais alinhada 
                  com seus valores e potencialidades."
                </p>
                <p className="text-right text-[#C8B6E2] font-semibold italic">
                  — Lorrayne Miranda
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button to="/contato" size="lg">
              Agende uma Consulta
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;