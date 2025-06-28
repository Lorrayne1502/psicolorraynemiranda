import { ArrowLeft, Shield, Eye, Lock, UserCheck, Database, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24">
      <SEO 
        title="Política de Privacidade - Lorrayne Miranda Psicóloga"
        description="Política de privacidade e proteção de dados do site da psicóloga Lorrayne Miranda. Saiba como protegemos suas informações pessoais."
        url="https://psicolorraynemiranda.netlify.app/politica-de-privacidade"
      />
      
      {/* Hero Section */}
      <section className="bg-[#DFD6F0] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-[#C8B6E2] mb-8 hover:underline">
            <ArrowLeft size={16} className="mr-2" />
            Voltar ao início
          </Link>
          <SectionTitle 
            title="Política de Privacidade"
            subtitle="Como coletamos, usamos e protegemos suas informações pessoais"
          />
        </div>
      </section>
      
      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FCE4EE] p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <Shield size={24} className="text-[#F0A8C8] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Compromisso com sua Privacidade</h3>
                  <p className="text-[#666666]">
                    Esta Política de Privacidade está em conformidade com a Lei Geral de Proteção 
                    de Dados (LGPD - Lei 13.709/2018) e demais normas aplicáveis. Seu sigilo e 
                    privacidade são fundamentais para nosso trabalho.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-[#999999] mb-8">
                <strong>Última atualização:</strong> 19 de dezembro de 2024
              </p>
              
              <h2>1. Identificação do Controlador</h2>
              <div className="bg-white border border-[#DFD6F0] p-6 rounded-lg mb-6">
                <ul className="space-y-2 mb-0">
                  <li><strong>Nome:</strong> Lorrayne Miranda Teixeira</li>
                  <li><strong>Profissão:</strong> Psicóloga Clínica</li>
                  <li><strong>CRP:</strong> 07/39636</li>
                  <li><strong>E-mail:</strong> lorrayne.mirandat@hotmail.com</li>
                  <li><strong>WhatsApp:</strong> (31) 98955-1307</li>
                </ul>
              </div>
              
              <h2>2. Informações que Coletamos</h2>
              
              <h3>2.1 Dados Fornecidos Voluntariamente</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#F5F5DC] p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <UserCheck size={20} className="text-[#C8B6E2] mr-2" />
                    <h4 className="font-semibold">Dados de Contato</h4>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>Nome completo</li>
                    <li>E-mail</li>
                    <li>Telefone/WhatsApp</li>
                    <li>Mensagens enviadas</li>
                  </ul>
                </div>
                
                <div className="bg-[#F5F5DC] p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Database size={20} className="text-[#B8D8BE] mr-2" />
                    <h4 className="font-semibold">Dados Clínicos</h4>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>Informações de anamnese</li>
                    <li>Histórico terapêutico</li>
                    <li>Registros de sessões</li>
                    <li>Evolução do tratamento</li>
                  </ul>
                </div>
              </div>
              
              <h3>2.2 Dados Coletados Automaticamente</h3>
              <ul>
                <li><strong>Dados de navegação:</strong> Páginas visitadas, tempo de permanência, origem do acesso</li>
                <li><strong>Informações técnicas:</strong> Endereço IP, tipo de navegador, sistema operacional</li>
                <li><strong>Cookies:</strong> Pequenos arquivos para melhorar a experiência de navegação</li>
              </ul>
              
              <h2>3. Finalidades do Tratamento</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-[#DFD6F0] p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-[#C8B6E2]">Prestação de Serviços</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Agendamento de consultas</li>
                    <li>• Realização de psicoterapia</li>
                    <li>• Acompanhamento terapêutico</li>
                    <li>• Elaboração de relatórios</li>
                    <li>• Comunicação profissional</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-[#D8EBDD] p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-[#B8D8BE]">Melhorias e Comunicação</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Resposta a dúvidas</li>
                    <li>• Envio de lembretes</li>
                    <li>• Melhoria dos serviços</li>
                    <li>• Análise de uso do site</li>
                    <li>• Comunicações importantes</li>
                  </ul>
                </div>
              </div>
              
              <h2>4. Base Legal para o Tratamento</h2>
              <p>O tratamento de seus dados pessoais é fundamentado nas seguintes bases legais da LGPD:</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#DFD6F0] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-sm font-semibold text-[#A68FCA]">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Consentimento (Art. 7º, I)</h4>
                    <p className="text-sm text-[#666666]">Para envio de comunicações e uso de cookies não essenciais</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#D8EBDD] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-sm font-semibold text-[#94B89A]">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Execução de Contrato (Art. 7º, V)</h4>
                    <p className="text-sm text-[#666666]">Para prestação dos serviços psicológicos contratados</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#FCE4EE] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-sm font-semibold text-[#F0A8C8]">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Legítimo Interesse (Art. 7º, IX)</h4>
                    <p className="text-sm text-[#666666]">Para melhoria dos serviços e segurança do site</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#FAFAEB] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-sm font-semibold text-[#E8E8B0]">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cumprimento de Obrigação Legal (Art. 7º, II)</h4>
                    <p className="text-sm text-[#666666]">Para atender exigências do Conselho Federal de Psicologia</p>
                  </div>
                </div>
              </div>
              
              <h2>5. Compartilhamento de Dados</h2>
              <p>
                Seus dados pessoais não são vendidos, alugados ou compartilhados com terceiros para 
                fins comerciais. O compartilhamento ocorre apenas nas seguintes situações:
              </p>
              
              <ul>
                <li><strong>Prestadores de serviços:</strong> Plataformas de videoconferência, serviços de e-mail (com contratos de confidencialidade)</li>
                <li><strong>Obrigações legais:</strong> Quando exigido por lei ou ordem judicial</li>
                <li><strong>Emergências:</strong> Para proteger a vida ou segurança (conforme Código de Ética da Psicologia)</li>
                <li><strong>Consentimento:</strong> Quando você autorizar expressamente</li>
              </ul>
              
              <h2>6. Segurança dos Dados</h2>
              <div className="bg-[#D8EBDD] p-6 rounded-lg mb-6">
                <div className="flex items-start">
                  <Lock size={24} className="text-[#94B89A] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Medidas de Proteção</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Criptografia de dados em trânsito e em repouso</li>
                      <li>• Acesso restrito e controlado às informações</li>
                      <li>• Backups seguros e regulares</li>
                      <li>• Monitoramento de segurança contínuo</li>
                      <li>• Treinamento em proteção de dados</li>
                      <li>• Plataformas certificadas para atendimento online</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h2>7. Retenção de Dados</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-[#F5F5DC]">
                      <th className="border border-gray-200 p-3 text-left">Tipo de Dado</th>
                      <th className="border border-gray-200 p-3 text-left">Período de Retenção</th>
                      <th className="border border-gray-200 p-3 text-left">Base Legal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-3">Dados de contato</td>
                      <td className="border border-gray-200 p-3">Até 5 anos após último contato</td>
                      <td className="border border-gray-200 p-3">Legítimo interesse</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3">Prontuários psicológicos</td>
                      <td className="border border-gray-200 p-3">Mínimo 5 anos (CFP)</td>
                      <td className="border border-gray-200 p-3">Obrigação legal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">Dados de navegação</td>
                      <td className="border border-gray-200 p-3">12 meses</td>
                      <td className="border border-gray-200 p-3">Legítimo interesse</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3">Cookies</td>
                      <td className="border border-gray-200 p-3">Conforme configuração</td>
                      <td className="border border-gray-200 p-3">Consentimento</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2>8. Seus Direitos</h2>
              <p>Conforme a LGPD, você possui os seguintes direitos sobre seus dados pessoais:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-[#DFD6F0] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#C8B6E2] mb-2">Direitos de Acesso</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Confirmação de tratamento</li>
                    <li>• Acesso aos dados</li>
                    <li>• Correção de dados</li>
                    <li>• Portabilidade</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-[#D8EBDD] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#B8D8BE] mb-2">Direitos de Controle</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Eliminação de dados</li>
                    <li>• Revogação do consentimento</li>
                    <li>• Oposição ao tratamento</li>
                    <li>• Informações sobre compartilhamento</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-[#FCE4EE] p-6 rounded-lg mb-6">
                <div className="flex items-start">
                  <AlertTriangle size={24} className="text-[#F0A8C8] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Importante sobre Dados Clínicos</h4>
                    <p className="text-sm text-[#666666]">
                      Os prontuários psicológicos são protegidos pelo sigilo profissional e devem ser 
                      mantidos por no mínimo 5 anos conforme resolução do CFP. A eliminação destes 
                      dados pode não ser possível devido a obrigações legais e éticas da profissão.
                    </p>
                  </div>
                </div>
              </div>
              
              <h2>9. Cookies e Tecnologias Similares</h2>
              
              <h3>9.1 Tipos de Cookies Utilizados</h3>
              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600">Cookies Essenciais</h4>
                  <p className="text-sm text-[#666666]">
                    Necessários para o funcionamento básico do site. Não podem ser desabilitados.
                  </p>
                </div>
                
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600">Cookies de Funcionalidade</h4>
                  <p className="text-sm text-[#666666]">
                    Melhoram a experiência do usuário, lembrando preferências e configurações.
                  </p>
                </div>
                
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-600">Cookies Analíticos</h4>
                  <p className="text-sm text-[#666666]">
                    Coletam informações sobre como o site é utilizado para melhorias futuras.
                  </p>
                </div>
              </div>
              
              <h3>9.2 Gerenciamento de Cookies</h3>
              <p>
                Você pode gerenciar suas preferências de cookies através das configurações do seu 
                navegador ou através do banner de consentimento exibido no site.
              </p>
              
              <h2>10. Transferência Internacional</h2>
              <p>
                Alguns serviços utilizados (como plataformas de videoconferência) podem processar 
                dados fora do Brasil. Nesses casos, garantimos que:
              </p>
              <ul>
                <li>Os fornecedores possuem certificações de segurança adequadas</li>
                <li>Existem contratos de proteção de dados</li>
                <li>São respeitados os padrões internacionais de privacidade</li>
                <li>Há conformidade com a LGPD para transferências internacionais</li>
              </ul>
              
              <h2>11. Menores de Idade</h2>
              <p>
                Os serviços são direcionados a mulheres adultas. Para atendimento de menores de 18 anos:
              </p>
              <ul>
                <li>É necessário consentimento dos pais ou responsáveis</li>
                <li>Aplicam-se proteções especiais conforme LGPD</li>
                <li>O sigilo profissional é mantido conforme Código de Ética</li>
                <li>Dados são tratados com cuidado especial</li>
              </ul>
              
              <h2>12. Alterações nesta Política</h2>
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente. Alterações significativas 
                serão comunicadas através do site ou por e-mail. A data da última atualização está 
                sempre indicada no início do documento.
              </p>
              
              <h2>13. Contato e Exercício de Direitos</h2>
              <div className="bg-[#F5F5DC] p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Para exercer seus direitos ou esclarecer dúvidas:</h4>
                <ul className="space-y-2">
                  <li><strong>E-mail:</strong> lorrayne.mirandat@hotmail.com</li>
                  <li><strong>WhatsApp:</strong> (31) 98955-1307</li>
                  <li><strong>Horário de atendimento:</strong> Segunda a sexta, 9h às 19h</li>
                </ul>
                <p className="text-sm text-[#666666] mt-4">
                  Responderemos sua solicitação em até 15 dias úteis, conforme previsto na LGPD.
                </p>
              </div>
              
              <h2>14. Autoridade Nacional de Proteção de Dados (ANPD)</h2>
              <p>
                Caso não esteja satisfeito com nossas respostas, você pode contatar a ANPD através 
                do site <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-[#C8B6E2] hover:underline">www.gov.br/anpd</a> 
                ou pelos canais oficiais disponibilizados pelo órgão.
              </p>
              
              <div className="bg-[#DFD6F0] p-6 rounded-lg mt-8">
                <p className="text-sm text-[#666666] mb-0">
                  <strong>Compromisso:</strong> Esta Política de Privacidade reflete nosso compromisso 
                  com a transparência e proteção de seus dados pessoais, em conformidade com a 
                  legislação brasileira e os mais altos padrões éticos da profissão de psicólogo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;