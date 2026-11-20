import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children }) {
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
