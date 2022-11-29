import Card from "../layout/Card";
import SobreMim from "../layout/SobreMim";
import styles from "./Home.module.css";
import reactImg from "../img/card-imgs/React-icon.png";
import mongoImg from "../img/card-imgs/mongodb (2).png";
import jscriptImg from "../img/card-imgs/JavaScript-logo.png";
import nodeImg from "../img/card-imgs/nodejs-1-logo-png-transparent.png";
import htmlImg from "../img/card-imgs/html.png";
import cssImg from "../img/card-imgs/CSS.png";
import bootImg from "../img/card-imgs/Bootstrap_logo.png";
import Projetos from "./Projetos";
function Home() {
  return (
    <div>
      <SobreMim />

      <section className={styles.skills_section}>
        <h1 className={styles.my_skills_h1}>Minhas Habilidades</h1>
        <div className={styles.skill_cards}>
          <Card name="React" img={reactImg} />
          <Card name="MongoDB" img={mongoImg} />
          <Card name="JavaScript" img={jscriptImg} />
          <Card name="Node.js" img={nodeImg} />
          <Card name="HTML" img={htmlImg} />
          <Card name="CSS" img={cssImg} />
          <Card name="Bootstrap" img={bootImg} />
        </div>
      </section>
      <div>
        <Projetos />
      </div>
    </div>
  );
}

export default Home;
