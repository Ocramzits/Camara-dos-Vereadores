import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx';
import Noticias from './pages/Noticias.jsx';
import Vereadores from './pages/Vereadores.jsx';
import Sessoes from './pages/Sessoes.jsx';
import Contato from './pages/Contato.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <header className="topo">
        <div className="container topo-conteudo">
          <div className="marca">
            <div className="marca-texto">
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p className="nome">Câmara Municipal de Buriti Grande</p>
                <p className="lema">Casa do Povo &ndash; Legislando com Transparência</p>
              </Link>
            </div>
          </div>
        </div>

        <nav className="menu" aria-label="Menu principal de navegação">
          <ul className="container menu-lista">
            <li>
              <NavLink to="/" end>Início</NavLink>
            </li>
            <li>
              <NavLink to="/noticias">Notícias</NavLink>
            </li>
            <li>
              <NavLink to="/vereadores">Vereadores</NavLink>
            </li>
            <li>
              <NavLink to="/sessoes">Sessões</NavLink>
            </li>
            <li>
              <NavLink to="/contato">Contato</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main id="conteudo" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/vereadores" element={<Vereadores />} />
          <Route path="/sessoes" element={<Sessoes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>

      <footer className="rodape">
        <div className="container rodape-conteudo">
          <div className="rodape-coluna">
            <p className="rodape-titulo">Câmara Municipal de Buriti Grande</p>
            <address>
              Praça dos Três Poderes, nº 100 &ndash; Centro<br />
              CEP: 64000-000 &ndash; Buriti Grande, PI<br />
              Atendimento: Segunda a Sexta, das 08h às 14h
            </address>
          </div>

          <div className="rodape-coluna rodape-links">
            <p className="rodape-titulo">Navegação Rápida</p>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/noticias">Notícias</Link></li>
              <li><Link to="/vereadores">Vereadores</Link></li>
              <li><Link to="/sessoes">Sessões Plenárias</Link></li>
              <li><Link to="/contato">Fale com a Câmara</Link></li>
            </ul>
          </div>
        </div>

        <div className="container rodape-base">
          <p>&copy; 2026 Câmara Municipal de Buriti Grande. Trabalho acadêmico desenvolvido para a disciplina de Programação para a Web I (UFPI).</p>
        </div>
      </footer>
    </BrowserRouter>
  );
}
