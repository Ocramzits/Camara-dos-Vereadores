export default function Vereadores() {
  const vereadores = [
    {
      nome: 'Guylherme Santos Lima',
      cargo: 'Presidente da Câmara',
      mandato: '2025 – 2028',
      foto: '/img/Guylherme.png',
    },
    {
      nome: 'Domingos de Melo',
      cargo: 'Vice-presidente',
      mandato: '2025 – 2028',
      foto: '/img/Domingos.png',
    },
    {
      nome: 'Marco Antônio',
      cargo: 'Primeiro Secretário',
      mandato: '2025 – 2028',
      foto: '/img/marco.png',
    },
    {
      nome: 'Talita da Luz',
      cargo: 'Vereadora',
      mandato: '2025 – 2028',
      foto: '/img/antonio.jpg',
    },
  ];

  return (
    <section id="vereadores" className="secao container">
      <div className="secao-cabecalho">
        <h2 id="titulo-vereadores">Vereadores</h2>
        <p className="secao-subtitulo">Conheça os parlamentares que representam os interesses dos cidadãos de Buriti Grande.</p>
      </div>

      <div className="grade">
        {vereadores.map((v) => (
          <article key={v.nome} className="card card-vereador">
            <div className="foto-moldura">
              <img src={v.foto} alt={`Foto do vereador ${v.nome}`} className="avatar-img" />
            </div>
            <h3>{v.nome}</h3>
            <p className="cargo-vereador">{v.cargo}</p>
            <p className="mandato-vereador">Mandato: {v.mandato}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
