import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="menu" aria-label="Menu principal de navegação">
      <ul className="container menu-lista">
        <li>
          <NavLink to="/" end>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink to="/noticias">Notícias</NavLink>
        </li>
        <li>
          <NavLink to="/vereadores">Vereadores</NavLink>
        </li>
        <li>
          <NavLink to="/sessoes">Sessões</NavLink>
        </li>
        <li>
          <NavLink to="/contato">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
}
