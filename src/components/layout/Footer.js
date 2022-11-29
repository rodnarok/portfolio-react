import { FaGithub, FaLinkedin } from "react-icons/fa";
//import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://github.com/rodnarok">
            <FaGithub />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/rodolfo-lima-ab948086/">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
