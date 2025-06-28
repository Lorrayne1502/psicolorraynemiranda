import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Lorrayne Miranda - Psicóloga Clínica | Psicoterapia Online para Mulheres",
  description = "Psicóloga clínica especializada no atendimento de mulheres. Psicoterapia online com abordagem humanista-existencial. CRP 07/39636",
  keywords = "psicóloga, psicoterapia, saúde mental, mulheres, terapia online, ansiedade, autoestima",
  image = "/images/perfil.jpg",
  url = "https://psicolorraynemiranda.netlify.app",
  type = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Lorrayne Miranda Teixeira" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;