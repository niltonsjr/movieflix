import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary main-nav">
      <Link to="/" className="nav-text-logo">
        MovieFlix
      </Link>
      <Link to="/" className="nav-exit-buttom">
        Salir
      </Link>
    </nav>
  );
};

export default Navbar;
