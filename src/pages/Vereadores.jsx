import { useState } from 'react';
import VereadorCard from '../components/VereadorCard.jsx';

export default function Vereadores() {
  const vereadores = [
    {
      nome: 'Guylherme Santos Lima',
      cargo: 'Presidente da Câmara',
      mandato: '2025 – 2028',
      foto: '/img/Guylherme.png',
      email: 'guylherme.lima@camaraburitigrande.pi.leg.br',
    },
    {
      nome: 'Domingos de Melo',
      cargo: 'Vice-presidente',
      mandato: '2025 – 2028',
      foto: '/img/Domingos.png',
      email: 'domingos.melo@camaraburitigrande.pi.leg.br',
    },
    {
      nome: 'Marco Antônio',
      cargo: 'Primeiro Secretário',
      mandato: '2025 – 2028',
      foto: '/img/marco.png',
      email: 'marco.antonio@camaraburitigrande.pi.leg.br',
    },
    {
      nome: 'Talita da Luz',
      cargo: 'Vereadora',
      mandato: '2025 – 2028',
      foto: '/img/antonio.jpg',
      email: 'talita.luz@camaraburitigrande.pi.leg.br',
    },
  ];

  const [favorito, setFavorito] = useState(() => {
    try {
      return localStorage.getItem('vereador_favorito') || '';
    } catch {
      return '';
    }
  });

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
    </section>
  );
}
