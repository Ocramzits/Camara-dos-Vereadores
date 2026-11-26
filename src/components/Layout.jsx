import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const MAPA_SECOES = {
  '/': 'inicio',
  '/noticias': 'noticias',
  '/vereadores': 'vereadores',
  '/sessoes': 'sessoes',
  '/contato': 'contato',
};

export default function Layout({ children }) {
  const localizacao = useLocation();

  useEffect(() => {
    const secao = MAPA_SECOES[localizacao.pathname] || 'inicio';
    sessionStorage.setItem('secao_atual_visivel', secao);
  }, [localizacao.pathname]);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo" tabIndex="-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
