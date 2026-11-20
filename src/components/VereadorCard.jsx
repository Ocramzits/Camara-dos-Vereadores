export default function VereadorCard({ vereador, favorito, onFavoritar }) {
  function handleKeyDown(evento) {
    if (evento.key === 'Enter' || evento.key === ' ') {
      evento.preventDefault();
      if (onFavoritar) {
        onFavoritar(vereador.nome);
      }
    }
  }

  function handleClick() {
    if (onFavoritar) {
      onFavoritar(vereador.nome);
    }
  }

  return (
    <article
      className={`card card-vereador ${favorito ? 'vereador-favorito' : ''}`}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`${vereador.nome}, ${vereador.cargo}. Clique ou pressione Enter para favoritar.`}
    >
      <div className="foto-moldura">
        <img
          src={vereador.foto}
          alt={`Foto do vereador ${vereador.nome}`}
          className="avatar-img"
        />
      </div>
      <h3>{vereador.nome}</h3>
      <p className="cargo-vereador">{vereador.cargo}</p>
      <p className="mandato-vereador">Mandato: {vereador.mandato}</p>
      {vereador.email && (
        <p
          className="noticia-data"
          style={{ marginTop: '0.5rem', wordBreak: 'break-all' }}
        >
          {vereador.email}
        </p>
      )}
    </article>
  );
}
