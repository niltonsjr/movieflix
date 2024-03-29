import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { removeAuthData } from "util/storage";
import { AuthContext } from "AuthContext";
import history from "util/history";
import { isAuthenticated } from "util/auth";
import { getTokenData } from "util/token";
import "./styles.css";

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: isAuthenticated(),
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: isAuthenticated(),
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: isAuthenticated(),
    });
    history.replace("/auth/login");
  };

  return (
    <nav className="navbar bg-primary main-nav">
      <div>
        <Link to={authContextData.authenticated ? "/movies" : "/" } className="nav-text-logo">
          MovieFlix
        </Link>
      </div>
      <div>
        {authContextData.authenticated && (
          <Link to="/" className="nav-exit-buttom" onClick={handleLogoutClick}>
            Sair
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
