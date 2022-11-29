import styles from "./SobreMim.module.css";
import photo from "../img/20220926_163610.jpg";

function SobreMim() {
  return (
    <section className={styles.section_principal}>
      <img className={styles.photo} src={photo} alt="perfil" />
      <div className={styles.text}>
        <h2>Olá! Eu me chamo Rodolfo Lima</h2>
        <p>
          Sou formado em Análise e Desenvolvimento de Sistemas, gosto muito de
          tecnologia e de aprender coisas novas.
        </p>
        <p>Atualmente entrando na área de desenvolvimento web Full-Stack</p>
      </div>
    </section>
  );
}

export default SobreMim;
