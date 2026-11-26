import { useState, useEffect, useRef } from 'react';

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch('/data/noticias.json')
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error('Falha ao carregar as notícias');
        }
        return resposta.json();
      })
      .then((dados) => {
        setNoticias(dados);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

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

      {carregando && <p>Carregando notícias...</p>}
      {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}

      {!carregando && !erro && (
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
      )}

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
