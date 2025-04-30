import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export default function SEO({
  title = "Hyperquantum | Automatización inteligente para PYMEs Colombianas",
  description = "Impulsamos la transformación operativa de las pymes colombianas mediante soluciones de inteligencia artificial simples, eficientes y a su medida. Aumenta ventas y reduce costos con nuestros agentes inteligentes y procesos automatizados.",
  keywords = "automatización, inteligencia artificial, IA, pymes, colombia, transformación digital, eficiencia operativa, hyperquantum, agentes inteligentes, procesos automatizados, reducción de costos, aumento de ventas, optimización de procesos, eficiencia empresarial, productividad, ROI, machine learning, chatbots, asistentes virtuales, workflow automation, soluciones empresariales, innovación tecnológica, competitividad",
  ogImage = "/assets/og-image.jpg",
  ogUrl = "https://hyperquantum.com.co",
}: SEOProps) {
  return (
    <Helmet>
      {/* Metadatos básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Metadatos para Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      
      {/* Metadatos para Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Metadatos adicionales */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="geo.region" content="CO" />
      <meta name="geo.placename" content="Colombia" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
}