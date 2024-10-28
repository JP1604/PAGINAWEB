// Header.jsx
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">informacion</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/tech">Estadísticas</Link></li>
          <li><Link to="/model">Marcas</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
