import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Inicio from './pages/Inicio.jsx';
import Noticias from './pages/Noticias.jsx';
import Vereadores from './pages/Vereadores.jsx';
import Sessoes from './pages/Sessoes.jsx';
import Contato from './pages/Contato.jsx';

export default function App() {
  const [cookiesAceitos, setCookiesAceitos] = useState(() => {
    return localStorage.getItem('alerta_cookies_aceito') === 'true';
  });

  useEffect(() => {
    if (!sessionStorage.getItem('tempo_inicio_sessao')) {
      sessionStorage.setItem('tempo_inicio_sessao', Date.now().toString());
    }
  }, []);

  const aceitarCookies = () => {
    localStorage.setItem('alerta_cookies_aceito', 'true');
    setCookiesAceitos(true);
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/vereadores" element={<Vereadores />} />
          <Route path="/sessoes" element={<Sessoes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </Layout>

      {!cookiesAceitos && (
        <div id="aviso-cookies">
          <p>Este site utiliza armazenamento local para melhorar sua experiência.</p>
          <button type="button" onClick={aceitarCookies}>
            Aceitar cookies
          </button>
        </div>
      )}
    </BrowserRouter>
  );
}
