import { Link } from 'react-router-dom';

export default function Footer() {
  function voltarAoTopo(evento) {
    evento.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="rodape">
      <div className="container rodape-conteudo">
        <div className="rodape-coluna">
          <p className="rodape-titulo">Câmara Municipal de Buriti Grande</p>
          <address>
            Praça dos Três Poderes, nº 100 &ndash; Centro
            <br />
            CEP: 64000-000 &ndash; Buriti Grande, PI
            <br />
            Atendimento: Segunda a Sexta, das 08h às 14h
          </address>
        </div>

        <div className="rodape-coluna rodape-links">
          <p className="rodape-titulo">Navegação Rápida</p>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/noticias">Notícias</Link>
            </li>
            <li>
              <Link to="/vereadores">Vereadores</Link>
            </li>
            <li>
              <Link to="/sessoes">Sessões Plenárias</Link>
            </li>
            <li>
              <Link to="/contato">Fale com a Câmara</Link>
            </li>
          </ul>
        </div>

        <div className="rodape-coluna rodape-topo-link">
          <a className="botao-topo" href="#conteudo" onClick={voltarAoTopo}>
            Voltar ao topo &uarr;
          </a>
        </div>
      </div>

      <div className="container rodape-base">
        <p>
          &copy; 2026 Câmara Municipal de Buriti Grande. Trabalho acadêmico
          desenvolvido para a disciplina de Programação para a Web I (UFPI).
        </p>
      </div>
    </footer>
  );
}
