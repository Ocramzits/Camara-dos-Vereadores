import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';

export default function Header() {
  return (
    <header className="topo">
      <div className="barra-acessibilidade">
        <div className="container barra-acessibilidade-conteudo">
          <div className="acessibilidade-grupo">
            <span className="acessibilidade-rotulo">Acessibilidade:</span>
            <button
              type="button"
              id="btn-diminuir-fonte"
              className="btn-acessibilidade"
              aria-label="Diminuir tamanho da fonte"
            >
              A-
            </button>
            <button
              type="button"
              id="btn-fonte-padrao"
              className="btn-acessibilidade"
              aria-label="Tamanho de fonte padrão"
            >
              A
            </button>
            <button
              type="button"
              id="btn-aumentar-fonte"
              className="btn-acessibilidade"
              aria-label="Aumentar tamanho da fonte"
            >
              A+
            </button>
            <button
              type="button"
              id="btn-alto-contraste"
              className="btn-acessibilidade"
              aria-pressed="false"
            >
              Alto Contraste
            </button>
          </div>
          <div className="barra-sessao-info">
            <span id="info-visitas" className="info-item"></span>
            <span id="info-ultima-visita" className="info-item"></span>
            <span id="info-sessao" className="info-item"></span>
          </div>
        </div>
      </div>

      <div className="container topo-conteudo">
        <div className="marca">
          <div className="marca-texto">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p className="nome">Câmara Municipal de Buriti Grande</p>
              <p className="lema">
                Casa do Povo &ndash; Legislando com Transparência
              </p>
            </Link>
          </div>
        </div>

        <form
          className="busca-form"
          role="search"
          action="/noticias"
          method="get"
        >
          <label htmlFor="campo-busca" className="sr-only">
            Pesquisar no portal da Câmara
          </label>
          <div className="busca-campo">
            <input
              type="search"
              id="campo-busca"
              name="q"
              placeholder="Buscar no portal..."
              autoComplete="off"
            />
            <button
              type="submit"
              className="botao-busca"
              aria-label="Executar pesquisa"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </form>

        <button
          type="button"
          id="botao-tema"
          className="botao-tema"
          aria-pressed="false"
        >
          Tema escuro
        </button>
      </div>

      <Navbar />
    </header>
  );
}
