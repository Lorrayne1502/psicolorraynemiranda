import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import Button from './Button';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start">
            <Cookie size={24} className="text-[#C8B6E2] mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-[#333333] mb-2">Uso de Cookies</h3>
              <p className="text-sm text-[#666666] max-w-2xl">
                Este site utiliza cookies para melhorar sua experiência de navegação e analisar o tráfego. 
                Os cookies são essenciais para o funcionamento adequado do site e não coletamos informações pessoais identificáveis.
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button 
              onClick={declineCookies}
              variant="outline"
              size="sm"
              className="whitespace-nowrap"
            >
              Recusar
            </Button>
            <Button 
              onClick={acceptCookies}
              size="sm"
              className="whitespace-nowrap"
            >
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;