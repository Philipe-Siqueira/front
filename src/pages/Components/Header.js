import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
// import { Container } from './styles';

export default function Header(props) {
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand"><FaReact /> EXPRESS DELIVERY</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/users">Perfil <span className="sr-only">(Página atual)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/delivery">Entregas</Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
  );
}
