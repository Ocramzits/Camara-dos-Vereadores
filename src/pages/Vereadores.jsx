import { useState, useEffect } from 'react';
import VereadorCard from '../components/VereadorCard.jsx';
import { buscarVereadores } from '../services/api.js';

export default function Vereadores() {
  const [vereadores, setVereadores] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [favorito, setFavorito] = useState(() => {
    try {
      return localStorage.getItem('vereador_favorito') || '';
    } catch {
      return '';
    }
  });

  useEffect(() => {
    buscarVereadores()
      .then((dados) => {
        setVereadores(dados);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

  function handleFavoritar(nome) {
    const novoFavorito = favorito === nome ? '' : nome;
    setFavorito(novoFavorito);
    try {
      if (novoFavorito) {
        localStorage.setItem('vereador_favorito', novoFavorito);
      } else {
        localStorage.removeItem('vereador_favorito');
      }
    } catch {
      return;
    }
  }

  return (
    <section
      id="vereadores"
      className="secao container"
      aria-labelledby="titulo-vereadores"
    >
      <div className="secao-cabecalho">
        <h2 id="titulo-vereadores">Vereadores</h2>
        <p className="secao-subtitulo">
          Conheça os parlamentares que representam os interesses dos cidadãos de
          Buriti Grande.
        </p>
      </div>

      {carregando && <p>Carregando vereadores...</p>}
      {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}

      {!carregando && !erro && (
        <div className="grade">
          {vereadores.map((v) => (
            <VereadorCard
              key={v.nome}
              vereador={v}
              favorito={favorito === v.nome}
              onFavoritar={handleFavoritar}
            />
          ))}
        </div>
      )}
    </section>
  );
}
