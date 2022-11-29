import Card from "../layout/Card";
import styles from "./Projetos.module.css";
import ilus from "../img/Ilustração.svg";

function Projetos() {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>Projetos</h1>
        <img className={styles.ilustra} src={ilus} alt="Ilustração" />
      </div>
      <div className={styles.projs}>
        <Card name="Em breve" />
        <Card name="Em breve" />
        <Card name="Em breve" />
        <Card name="Em breve" />
        <Card name="Em breve" />
      </div>
    </section>
  );
}

export default Projetos;
