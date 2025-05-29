import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      try {
        // In a real app, you would send the data to a server here
        setFormSubmitted(true);
        setFormError(false);
      } catch (error) {
        setFormError(true);
      }
    }, 1000);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#DFD6F0] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle 
            title="Entre em Contato"
            subtitle="Estou aqui para tirar suas dúvidas e agendar sua consulta"
            centered
          />
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Envie uma mensagem</h2>
              
              {formSubmitted ? (
                <div className="bg-[#D8EBDD] text-[#94B89A] p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-2">Mensagem enviada com sucesso!</h3>
                  <p>
                    Obrigada por entrar em contato. Responderei sua mensagem em breve.
                  </p>
                </div>
              ) : formError ? (
                <div className="bg-red-100 text-red-600 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-2">Erro ao enviar mensagem</h3>
                  <p>
                    Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou 
                    entre em contato diretamente por e-mail ou telefone.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#666666] mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C8B6E2]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#666666] mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C8B6E2]"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#666666] mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C8B6E2]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#666666] mb-2">
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C8B6E2]"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="Agendamento">Agendamento de consulta</option>
                        <option value="Dúvidas">Dúvidas sobre atendimento</option>
                        <option value="Valores">Informações sobre valores</option>
                        <option value="Outro">Outro assunto</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-[#666666] mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C8B6E2]"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      <Send size={18} className="mr-2" />
                      Enviar mensagem
                    </Button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-[#F5F5DC] p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-semibold mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail size={24} className="text-[#C8B6E2] mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">E-mail</h3>
                      <a 
                        href="mailto:lorrayne.mirandat@hotmail.com" 
                        className="text-[#666666] hover:text-[#C8B6E2] transition-colors"
                      >
                        lorrayne.mirandat@hotmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-[#C8B6E2] mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Telefone</h3>
                      <a 
                        href="https://wa.me/5531989551307" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#666666] hover:text-[#C8B6E2] transition-colors"
                      >
                        (31) 98955-1307
                      </a>
                      <p className="text-sm text-[#999999] mt-1">
                        Atendimento de segunda a sexta, das 9h às 18h
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={24} className="text-[#C8B6E2] mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Endereço</h3>
                      <p className="text-[#666666]">
                        
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Linkedin size={24} className="text-[#C8B6E2] mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">LinkedIn</h3>
                      <a 
                        href="https://linkedin.com/in/lorrayne-miranda-teixeira"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#666666] hover:text-[#C8B6E2] transition-colors"
                      >
                        linkedin.com/in/lorrayne-miranda-teixeira
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Horários de Atendimento</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">Segunda-feira</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">Terça-feira</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">Quarta-feira</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">Quinta-feira</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">Sexta-feira</span>
                    <span>9:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">Sábado</span>
                    <span>Fechado</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">Domingo</span>
                    <span>Fechado</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button 
                    href="https://wa.me/5531989551307" 
                    variant="secondary" 
                    className="w-full"
                  >
                    <Phone size={18} className="mr-2" />
                    Agendar pelo WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27629.292546560483!2d-51.22850542089842!3d-30.03283970000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199cd2566acb1d%3A0x603111a89f87e91f!2sPorto%20Alegre%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1693499413404!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;