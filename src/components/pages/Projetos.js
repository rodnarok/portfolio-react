import Card from "../layout/Card";
import styles from "./Projetos.module.css";
import ilus from "../img/Ilustração.svg";

// importando projetos
import imgCosts from "../img/projects/costs.png";

function Projetos() {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>Projetos</h1>
        <img className={styles.ilustra} src={ilus} alt="Ilustração" />
      </div>
      <div className={styles.projs}>
        <a href="https://resonant-pudding-e4f9c9.netlify.app/">
          <Card name="Costs" img={imgCosts} type="proj" />
        </a>
        <Card name="Em breve" />
        <Card name="Em breve" />
        <Card name="Em breve" />
        <Card name="Em breve" />
      </div>
    </section>
  );
}

export default Projetos;
