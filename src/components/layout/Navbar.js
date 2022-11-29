import { Link } from "react-router-dom";
import logo from "../img/favicon.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Home" />
      </Link>

      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            Inicio
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/sobre" className={styles.link}>
            Sobre mim
          </Link>
        </li>
        {/* <li className={styles.item}>Habilidades</li> */}
        <li className={styles.item}>
          <Link to="/projetos" className={styles.link}>
            Projetos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
