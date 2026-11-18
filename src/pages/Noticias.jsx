export default function Noticias() {
  return (
    <section id="noticias" className="secao container">
      <div className="secao-cabecalho">
        <h2 id="titulo-noticias">Últimas notícias</h2>
        <p className="secao-subtitulo">Fique por dentro das principais votações, audiências e projetos aprovados.</p>
      </div>

      <div className="grade">
        <article className="card card-noticia">
          <figure className="noticia-figura">
            <img src="/img/noticia-orcamento.jpg" alt="Plenário durante a votação" className="noticia-img" />
          </figure>
          <div className="card-corpo">
            <p className="noticia-data">15 de setembro de 2026</p>
            <h3>Câmara aprova orçamento de 2027</h3>
            <p>Os vereadores aprovaram, em votação plenária, a proposta orçamentária com foco em saúde e infraestrutura.</p>
          </div>
        </article>

        <article className="card card-noticia">
          <figure className="noticia-figura">
            <img src="/img/noticia-transporte.jpg" alt="Audiência pública com cidadãos" className="noticia-img" />
          </figure>
          <div className="card-corpo">
            <p className="noticia-data">10 de setembro de 2026</p>
            <h3>Audiência pública sobre transporte</h3>
            <p>A população compareceu para debater melhorias nas linhas de ônibus, novos itinerários e tarifas.</p>
          </div>
        </article>

        <article className="card card-noticia">
          <figure className="noticia-figura">
            <img src="/img/noticia-reciclagem.jpg" alt="Projeto de preservação ambiental" className="noticia-img" />
          </figure>
          <div className="card-corpo">
            <p className="noticia-data">3 de setembro de 2026</p>
            <h3>Projeto de lei incentiva a reciclagem</h3>
            <p>Nova proposta prevê ampliação de pontos de coleta seletiva e incentivos fiscais para cooperativas.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
