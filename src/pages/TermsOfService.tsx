import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';

const TermsOfService = () => {
  return (
    <div className="pt-24">
      <SEO 
        title="Termos de Uso - Lorrayne Miranda Psicóloga"
        description="Termos de uso do site da psicóloga Lorrayne Miranda. Conheça as condições de utilização dos nossos serviços."
        url="https://psicolorraynemiranda.netlify.app/termos-de-uso"
      />
      
      {/* Hero Section */}
      <section className="bg-[#DFD6F0] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-[#C8B6E2] mb-8 hover:underline">
            <ArrowLeft size={16} className="mr-2" />
            Voltar ao início
          </Link>
          <SectionTitle 
            title="Termos de Uso"
            subtitle="Condições gerais de uso do site e dos serviços oferecidos"
          />
        </div>
      </section>
      
      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-sm text-[#999999] mb-8">
              <strong>Última atualização:</strong> 19 de dezembro de 2024
            </p>
            
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes 
              termos e condições de uso. Se você não concordar com qualquer parte destes termos, 
              não deve utilizar nosso site ou serviços.
            </p>
            
            <h2>2. Definições</h2>
            <ul>
              <li><strong>Site:</strong> Refere-se ao website da psicóloga Lorrayne Miranda Teixeira</li>
              <li><strong>Usuário:</strong> Qualquer pessoa que acesse ou utilize o site</li>
              <li><strong>Serviços:</strong> Consultas psicológicas, orientações e conteúdos oferecidos</li>
              <li><strong>Profissional:</strong> Lorrayne Miranda Teixeira, psicóloga CRP 07/39636</li>
            </ul>
            
            <h2>3. Uso do Site</h2>
            <h3>3.1 Finalidade</h3>
            <p>
              Este site destina-se exclusivamente a fornecer informações sobre serviços psicológicos, 
              conteúdo educativo sobre saúde mental e facilitar o agendamento de consultas.
            </p>
            
            <h3>3.2 Restrições de Uso</h3>
            <p>Você concorda em não utilizar o site para:</p>
            <ul>
              <li>Fins ilegais ou não autorizados</li>
              <li>Transmitir vírus, malware ou códigos maliciosos</li>
              <li>Violar direitos de propriedade intelectual</li>
              <li>Assediar, ameaçar ou intimidar outros usuários</li>
              <li>Coletar informações pessoais de outros usuários</li>
              <li>Interferir no funcionamento normal do site</li>
            </ul>
            
            <h2>4. Serviços Psicológicos</h2>
            <h3>4.1 Natureza dos Serviços</h3>
            <p>
              Os serviços oferecidos consistem em psicoterapia individual online para mulheres jovens 
              e adultas, utilizando abordagem humanista-existencial, conforme regulamentação do 
              Conselho Federal de Psicologia (CFP).
            </p>
            
            <h3>4.2 Modalidade de Atendimento</h3>
            <p>
              Os atendimentos são realizados exclusivamente na modalidade online, através de 
              plataformas seguras de videoconferência, em conformidade com a Resolução CFP nº 11/2018.
            </p>
            
            <h3>4.3 Agendamento e Cancelamento</h3>
            <ul>
              <li>Agendamentos devem ser feitos através dos canais oficiais disponibilizados</li>
              <li>Cancelamentos devem ser comunicados com 24 horas de antecedência</li>
              <li>Faltas sem aviso prévio serão cobradas normalmente</li>
              <li>O profissional reserva-se o direito de remarcar sessões em casos excepcionais</li>
            </ul>
            
            <h2>5. Responsabilidades</h2>
            <h3>5.1 Do Profissional</h3>
            <ul>
              <li>Manter sigilo profissional conforme Código de Ética da Psicologia</li>
              <li>Prestar serviços com qualidade e dentro dos padrões éticos</li>
              <li>Manter registro profissional ativo no CRP</li>
              <li>Respeitar os direitos e dignidade dos usuários</li>
            </ul>
            
            <h3>5.2 Do Usuário</h3>
            <ul>
              <li>Fornecer informações verdadeiras e atualizadas</li>
              <li>Comparecer pontualmente às sessões agendadas</li>
              <li>Comunicar cancelamentos dentro do prazo estabelecido</li>
              <li>Respeitar as orientações e limites profissionais</li>
              <li>Efetuar pagamentos conforme acordado</li>
            </ul>
            
            <h2>6. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site, incluindo textos, imagens, logos, vídeos e materiais 
              educativos, é protegido por direitos autorais e propriedade intelectual. 
              É vedada a reprodução, distribuição ou uso comercial sem autorização expressa.
            </p>
            
            <h2>7. Privacidade e Proteção de Dados</h2>
            <p>
              O tratamento de dados pessoais segue nossa Política de Privacidade e está em 
              conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018). 
              Consulte nossa Política de Privacidade para informações detalhadas.
            </p>
            
            <h2>8. Limitação de Responsabilidade</h2>
            <p>
              O site e os serviços são fornecidos "como estão". Não garantimos que o site 
              estará sempre disponível ou livre de erros. Nossa responsabilidade limita-se 
              aos serviços psicológicos prestados diretamente.
            </p>
            
            <h3>8.1 Exclusões</h3>
            <p>Não nos responsabilizamos por:</p>
            <ul>
              <li>Problemas técnicos de conexão à internet</li>
              <li>Falhas em equipamentos do usuário</li>
              <li>Interrupções de serviços de terceiros</li>
              <li>Danos indiretos ou consequenciais</li>
            </ul>
            
            <h2>9. Pagamentos e Reembolsos</h2>
            <h3>9.1 Formas de Pagamento</h3>
            <p>
              Os pagamentos são aceitos via PIX, transferência bancária ou outras formas 
              acordadas previamente. Os valores são informados no momento do agendamento.
            </p>
            
            <h3>9.2 Política de Reembolso</h3>
            <p>
              Reembolsos podem ser solicitados em casos específicos, conforme análise individual 
              e dentro dos direitos do consumidor estabelecidos pelo CDC.
            </p>
            
            <h2>10. Resolução de Conflitos</h2>
            <h3>10.1 Mediação</h3>
            <p>
              Eventuais conflitos serão preferencialmente resolvidos através de diálogo e mediação, 
              buscando sempre a melhor solução para ambas as partes.
            </p>
            
            <h3>10.2 Foro Competente</h3>
            <p>
              Para questões não resolvidas amigavelmente, fica eleito o foro da comarca de 
              Campo Bom/RS, com renúncia expressa a qualquer outro.
            </p>
            
            <h2>11. Modificações dos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. 
              As alterações entrarão em vigor imediatamente após sua publicação no site. 
              O uso continuado do site após as modificações constitui aceitação dos novos termos.
            </p>
            
            <h2>12. Disposições Gerais</h2>
            <ul>
              <li>Estes termos constituem o acordo integral entre as partes</li>
              <li>A invalidade de qualquer cláusula não afeta a validade das demais</li>
              <li>O não exercício de qualquer direito não constitui renúncia</li>
              <li>Estes termos são regidos pela legislação brasileira</li>
            </ul>
            
            <h2>13. Contato</h2>
            <p>
              Para dúvidas sobre estes termos ou questões relacionadas aos serviços, 
              entre em contato através dos canais oficiais:
            </p>
            <ul>
              <li><strong>E-mail:</strong> lorrayne.mirandat@hotmail.com</li>
              <li><strong>WhatsApp:</strong> (31) 98955-1307</li>
              <li><strong>CRP:</strong> 07/39636</li>
            </ul>
            
            <div className="bg-[#F5F5DC] p-6 rounded-lg mt-8">
              <p className="text-sm text-[#666666] mb-0">
                <strong>Importante:</strong> Estes termos estão em conformidade com a legislação brasileira, 
                incluindo o Marco Civil da Internet (Lei 12.965/2014), Código de Defesa do Consumidor 
                (Lei 8.078/1990), Lei Geral de Proteção de Dados (Lei 13.709/2018) e regulamentações 
                do Conselho Federal de Psicologia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;