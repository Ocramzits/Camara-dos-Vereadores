import { useState, useEffect, useRef } from 'react';

export default function Noticias() {
  const noticias = [
    {
      id: 1,
      data: '15 de setembro de 2026',
      datetime: '2026-09-15',
      titulo: 'Câmara aprova orçamento de 2027',
      resumo:
        'Os vereadores aprovaram, em votação plenária, a proposta orçamentária para o próximo ano com foco em saúde e infraestrutura.',
      texto:
        'Os vereadores aprovaram, em votação plenária realizada na tarde de terça-feira, a proposta orçamentária para o exercício de 2027. O orçamento, que totaliza R$ 12 milhões, tem como prioridades os setores de saúde pública e infraestrutura urbana. A proposta recebeu 8 votos favoráveis e 1 contrário, e seguirá para sanção do Executivo Municipal.',
      imagem: '/img/noticia-orcamento.jpg',
      alt: 'Plenário da Câmara Municipal durante a votação do orçamento municipal',
    },
    {
      id: 2,
      data: '10 de setembro de 2026',
      datetime: '2026-09-10',
      titulo: 'Audiência pública sobre transporte',
      resumo:
        'A população compareceu para debater melhorias nas linhas de ônibus, novos itinerários e tarifas municipais.',
      texto:
        'A Câmara Municipal realizou audiência pública para debater melhorias nas linhas de ônibus urbano de Buriti Grande. A população compareceu em número expressivo para discutir a criação de novos itinerários, revisão das tarifas praticadas e a necessidade de renovação da frota municipal. As demandas levantadas serão compiladas em relatório e encaminhadas à Secretaria Municipal de Transportes.',
      imagem: '/img/noticia-transporte.jpg',
      alt: 'Audiência pública com cidadãos discutindo melhorias no transporte coletivo',
    },
    {
      id: 3,
      data: '3 de setembro de 2026',
      datetime: '2026-09-03',
      titulo: 'Projeto de lei incentiva a reciclagem',
      resumo:
        'Nova proposta legislativa prevê a ampliação de pontos de coleta seletiva e incentivos fiscais para cooperativas locais.',
      texto:
        'Um novo projeto de lei apresentado na Câmara prevê a ampliação de pontos de coleta seletiva em toda a área urbana de Buriti Grande, além de incentivos fiscais para cooperativas de reciclagem locais. O texto, de autoria do vereador Marco Antônio, será debatido em comissão antes de seguir para votação em plenário. A expectativa é que seja votado ainda neste semestre.',
      imagem: '/img/noticia-reciclagem.jpg',
      alt: 'Projeto de preservação ambiental com recipientes de coleta seletiva e reciclagem',
    },
  ];

  const [noticiaSelecionada, setNoticiaSelecionada] = useState(null);
  const botaoFecharRef = useRef(null);

  function abrirModal(noticia) {
    setNoticiaSelecionada(noticia);
  }

  function fecharModal() {
    setNoticiaSelecionada(null);
  }

  useEffect(() => {
    function handleKeyDown(evento) {
      if (evento.key === 'Escape') {
        fecharModal();
      }
    }

    if (noticiaSelecionada) {
      document.addEventListener('keydown', handleKeyDown);
      if (botaoFecharRef.current) {
        botaoFecharRef.current.focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [noticiaSelecionada]);

  return (
    <section
      id="noticias"
      className="secao container"
      aria-labelledby="titulo-noticias"
    >
      <div className="secao-cabecalho">
        <h2 id="titulo-noticias">Últimas notícias</h2>
        <p className="secao-subtitulo">
          Fique por dentro das principais votações, audiências e projetos
          aprovados.
        </p>
      </div>

      <div className="grade">
        {noticias.map((n) => (
          <article key={n.id} className="card card-noticia">
            <figure className="noticia-figura">
              <img src={n.imagem} alt={n.alt} className="noticia-img" />
            </figure>
            <div className="card-corpo">
              <p className="noticia-data">
                <time dateTime={n.datetime}>{n.data}</time>
              </p>
              <h3>{n.titulo}</h3>
              <p>{n.resumo}</p>
              <a
                href="#noticias"
                className="link-noticia"
                aria-label={`Ler mais sobre ${n.titulo}`}
                onClick={(e) => {
                  e.preventDefault();
                  abrirModal(n);
                }}
              >
                Ler notícia completa <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {noticiaSelecionada && (
        <div
          id="modal-noticia"
          className="modal-aberto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-titulo"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              fecharModal();
            }
          }}
        >
          <div className="modal-caixa">
            <button
              ref={botaoFecharRef}
              type="button"
              className="modal-fechar"
              aria-label="Fechar notícia"
              onClick={fecharModal}
            >
              &times;
            </button>
            <p id="modal-data" className="noticia-data">
              {noticiaSelecionada.data}
            </p>
            <h2 id="modal-titulo">{noticiaSelecionada.titulo}</h2>
            <p id="modal-texto">{noticiaSelecionada.texto}</p>
          </div>
        </div>
      )}
    </section>
  );
}
