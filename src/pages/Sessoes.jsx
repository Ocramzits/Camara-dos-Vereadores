import { useState, useEffect } from 'react';
import { buscarSessoes } from '../services/api.js';

export default function Sessoes() {
  const [sessoes, setSessoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    buscarSessoes()
      .then((dados) => {
        setSessoes(dados);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

  const [filtroTipo, setFiltroTipo] = useState('todos');

  const sessoesFiltradas =
    filtroTipo === 'todos'
      ? sessoes
      : sessoes.filter(
          (s) => s.tipo.toLowerCase() === filtroTipo.toLowerCase()
        );

  return (
    <section
      id="sessoes"
      className="secao container"
      aria-labelledby="titulo-sessoes"
    >
      <div className="secao-cabecalho">
        <h2 id="titulo-sessoes">Calendário de sessões</h2>
        <p className="secao-subtitulo">
          Confira o cronograma de sessões públicas e acompanhe as deliberações
          em plenário.
        </p>
      </div>

      {carregando && <p>Carregando calendário de sessões...</p>}
      {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}

      {!carregando && !erro && (
        <>
          <div
            style={{
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <label
              htmlFor="filtro-sessao"
              style={{ fontWeight: 600, fontSize: '0.9rem' }}
            >
              Filtrar por tipo:
            </label>
            <select
              id="filtro-sessao"
              value={filtroTipo}
              onChange={(e) => setFiltroTipo(e.target.value)}
              style={{
                padding: '0.3rem 0.6rem',
                border: '1px solid #ccc',
                borderRadius: '3px',
              }}
            >
              <option value="todos">Todas as sessões</option>
              <option value="ordinária">Sessões Ordinárias</option>
              <option value="solene">Sessões Solenes</option>
            </select>
          </div>

          <div
            className="tabela-wrapper"
            role="region"
            aria-label="Tabela de sessões parlamentares, com rolagem horizontal em telas pequenas"
            tabIndex={0}
          >
            <table>
              <caption>Próximas sessões da Câmara de Buriti Grande</caption>
              <thead>
                <tr>
                  <th scope="col">Data</th>
                  <th scope="col">Horário</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Pauta Principal</th>
                </tr>
              </thead>
              <tbody>
                {sessoesFiltradas.map((s) => (
                  <tr key={s.data + s.horario}>
                    <td>{s.data}</td>
                    <td>{s.horario}</td>
                    <td>
                      <span className={`tag-sessao ${s.classeTag}`}>{s.tipo}</span>
                    </td>
                    <td>{s.pauta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}
