import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Inicio from './pages/Inicio.jsx';
import Noticias from './pages/Noticias.jsx';
import Vereadores from './pages/Vereadores.jsx';
import Sessoes from './pages/Sessoes.jsx';
import Contato from './pages/Contato.jsx';

export default function App() {
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
    </BrowserRouter>
  );
}
