import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import {
  setCookie,
  getCookie,
  gerarHashAnonimo,
  formatarDataHora,
} from '../utils/cookies.js';

const NIVEIS_FONTE = ['pequena', 'padrao', 'grande', 'extra-grande'];
const MAPA_FONTE = {
  pequena: '90%',
  padrao: '100%',
  grande: '115%',
  'extra-grande': '130%',
};

export default function Header() {
  const [tamanhoFonte, setTamanhoFonte] = useState('padrao');
  const [altoContraste, setAltoContraste] = useState(false);
  const [visitas, setVisitas] = useState('');
  const [ultimaVisita, setUltimaVisita] = useState('');
  const [idSessao, setIdSessao] = useState('');

  useEffect(() => {
    const tamanhoSalvo = getCookie('acessibilidade_tamanho_fonte');
    const tamanhoInicial =
      tamanhoSalvo && NIVEIS_FONTE.includes(tamanhoSalvo)
        ? tamanhoSalvo
        : 'padrao';
    setTamanhoFonte(tamanhoInicial);
    document.documentElement.style.fontSize = MAPA_FONTE[tamanhoInicial];

    const contrasteSalvo = getCookie('acessibilidade_alto_contraste');
    const contrasteAtivo = ['true', 'ativado', '1'].includes(contrasteSalvo);
    setAltoContraste(contrasteAtivo);
    document.body.classList.toggle('alto-contraste', contrasteAtivo);

    const ultimaDataCookie = getCookie('ultima_data_visita');
    if (ultimaDataCookie) {
      setUltimaVisita('Última visita: ' + formatarDataHora(ultimaDataCookie));
    } else {
      setUltimaVisita('Primeira visita ao portal');
    }
    setCookie('ultima_data_visita', new Date().toISOString());

    const contadorCookie = getCookie('contador_de_visitas');
    let contador = 1;
    if (contadorCookie) {
      const parsed = parseInt(contadorCookie, 10);
      if (!isNaN(parsed) && parsed >= 1) {
        contador = parsed + 1;
      }
    }
    setCookie('contador_de_visitas', contador.toString());
    setVisitas('Visitas: ' + contador);

    let sessao = getCookie('id_sessao_anonima');
    if (!sessao) {
      sessao = gerarHashAnonimo();
      setCookie('id_sessao_anonima', sessao);
    }
    setIdSessao(sessao);
  }, []);

  function aplicarFonte(novoTamanho) {
    setTamanhoFonte(novoTamanho);
    document.documentElement.style.fontSize = MAPA_FONTE[novoTamanho];
    setCookie('acessibilidade_tamanho_fonte', novoTamanho);
  }

  function alterarPassoFonte(passo) {
    const indice = NIVEIS_FONTE.indexOf(tamanhoFonte);
    const indiceBase = indice === -1 ? 1 : indice;
    const novoIndice = Math.max(
      0,
      Math.min(NIVEIS_FONTE.length - 1, indiceBase + passo)
    );
    aplicarFonte(NIVEIS_FONTE[novoIndice]);
  }

  function alternarAltoContraste() {
    const novoContraste = !altoContraste;
    setAltoContraste(novoContraste);
    document.body.classList.toggle('alto-contraste', novoContraste);
    setCookie('acessibilidade_alto_contraste', String(novoContraste));
  }

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
              onClick={() => alterarPassoFonte(-1)}
            >
              A-
            </button>
            <button
              type="button"
              id="btn-fonte-padrao"
              className="btn-acessibilidade"
              aria-label="Tamanho de fonte padrão"
              onClick={() => aplicarFonte('padrao')}
            >
              A
            </button>
            <button
              type="button"
              id="btn-aumentar-fonte"
              className="btn-acessibilidade"
              aria-label="Aumentar tamanho da fonte"
              onClick={() => alterarPassoFonte(1)}
            >
              A+
            </button>
            <button
              type="button"
              id="btn-alto-contraste"
              className="btn-acessibilidade"
              aria-pressed={altoContraste}
              onClick={alternarAltoContraste}
            >
              Alto Contraste
            </button>
          </div>
          <div className="barra-sessao-info">
            <span id="info-visitas" className="info-item">
              {visitas}
            </span>
            <span id="info-ultima-visita" className="info-item">
              {ultimaVisita}
            </span>
            {idSessao && (
              <span
                id="info-sessao"
                className="info-item"
                title={`ID da Sessão: ${idSessao}`}
              >
                {`Sessão: ${idSessao.substring(0, 8)}...`}
              </span>
            )}
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
