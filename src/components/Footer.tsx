import { Link } from 'react-router-dom';
import { Heart, Linkedin, Mail, PhoneCall } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5DC] pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#333333]">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="text-[#C8B6E2] mr-2" />
                <a 
                  href="mailto:lorrayne.mirandat@hotmail.com" 
                  className="hover:text-[#C8B6E2] transition-colors"
                >
                  lorrayne.mirandat@hotmail.com
                </a>
              </li>
              <li className="flex items-center">
                <PhoneCall size={18} className="text-[#C8B6E2] mr-2" />
                <a 
                  href="https://wa.me/5531989551307" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#C8B6E2] transition-colors"
                >
                  (31) 98955-1307
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin size={18} className="text-[#C8B6E2] mr-2" />
                <a 
                  href="https://linkedin.com/in/lorrayne-miranda-teixeira" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#C8B6E2] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#333333]">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#C8B6E2] transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-[#C8B6E2] transition-colors">Sobre</Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-[#C8B6E2] transition-colors">Serviços</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#C8B6E2] transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-[#C8B6E2] transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#333333]">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/termos-de-uso" className="hover:text-[#C8B6E2] transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="hover:text-[#C8B6E2] transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li className="text-[#666666]">
                CRP 07/39636
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E8E8B0] text-center text-[#666666]">
          <p className="flex items-center justify-center">
            © {currentYear} Lorrayne Miranda. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm flex items-center justify-center">
            Feito com <Heart size={14} className="mx-1 text-[#F8C8DC]" /> para cuidar da sua saúde mental
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;