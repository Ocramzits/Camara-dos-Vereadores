import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <>
      <section id="inicio" className="hero" aria-labelledby="titulo-inicio">
        <div className="container hero-container">
          <div className="hero-texto">
            <span className="hero-emblema">Portal Legislativo Oficial</span>
            <h1 id="titulo-inicio">
              Bem-vindo à Câmara Municipal de Buriti Grande
            </h1>
            <p>
              Acompanhe as sessões plenárias, conheça os vereadores eleitos e
              participe ativamente das decisões que constroem o futuro da nossa
              cidade.
            </p>
            <div className="hero-acoes">
              <Link className="botao-destaque" to="/sessoes">
                Ver próximas sessões
              </Link>
              <Link className="botao-secundario" to="/noticias">
                Últimas notícias
              </Link>
              <Link className="botao-secundario" to="/vereadores">
                Conhecer vereadores
              </Link>
            </div>
          </div>

          <figure className="hero-figura">
            <img
              src="/img/hero.jpg"
              alt="Vista panorâmica da cidade de Buriti Grande com suas ruas e praça central"
              className="hero-img"
            />
            <figcaption className="hero-legenda">
              Buriti Grande &ndash; Vista panorâmica do município
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        id="apresentacao"
        className="secao container"
        aria-labelledby="titulo-apresentacao"
      >
        <div className="secao-cabecalho">
          <h2 id="titulo-apresentacao">Sobre a Câmara Municipal</h2>
          <p className="secao-subtitulo">
            A Casa do Povo aberta para o exercício pleno da cidadania,
            transparência e democracia.
          </p>
        </div>

        <div className="grade">
          <article className="card">
            <div className="card-corpo">
              <h3>Atuação Legislativa</h3>
              <p>
                Elaboração, discussão e votação de projetos de lei, emendas e
                requerimentos fundamentais para o desenvolvimento socioeconômico
                de Buriti Grande.
              </p>
              <Link className="link-noticia" to="/sessoes">
                Acompanhar sessões &rarr;
              </Link>
            </div>
          </article>

          <article className="card">
            <div className="card-corpo">
              <h3>Transparência e Fiscalização</h3>
              <p>
                Acesso público e irrestrito aos atos do legislativo,
                demonstrativos das deliberações parlamentares e prestação de
                contas periódica aos munícipes.
              </p>
              <Link className="link-noticia" to="/noticias">
                Ver informativos &rarr;
              </Link>
            </div>
          </article>

          <article className="card">
            <div className="card-corpo">
              <h3>Participação Popular</h3>
              <p>
                Canal aberto e democrático através da Ouvidoria Municipal para
                envio de dúvidas, sugestões e solicitações de melhorias para a
                nossa cidade.
              </p>
              <Link className="link-noticia" to="/contato">
                Fale com a Câmara &rarr;
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
