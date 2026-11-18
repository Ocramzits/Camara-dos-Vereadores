import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-container">
        <div className="hero-texto">
          <span className="hero-emblema">Portal Legislativo Oficial</span>
          <h1 id="titulo-inicio">Bem-vindo à Câmara Municipal de Buriti Grande</h1>
          <p>
            Acompanhe as sessões plenárias, conheça os vereadores eleitos e participe ativamente
            das decisões que constroem o futuro da nossa cidade.
          </p>
          <div className="hero-acoes">
            <Link className="botao-destaque" to="/sessoes">Ver próximas sessões</Link>
            <Link className="botao-secundario" to="/noticias">Últimas notícias</Link>
          </div>
        </div>

        <figure className="hero-figura">
          <img src="/img/hero.jpg" alt="Vista panorâmica da cidade de Buriti Grande" className="hero-img" />
          <figcaption className="hero-legenda">Buriti Grande – Vista panorâmica do município</figcaption>
        </figure>
      </div>
    </section>
  );
}
