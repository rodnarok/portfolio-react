import Card from "../layout/Card";
import styles from "./Projetos.module.css";
import ilus from "../img/Ilustração.svg";
// import { motion } from "framer-motion";
// import { useState, useEffect, useRef } from "react";

// importando projetos
import imgCosts from "../img/projects/costs.png";
import imgSimon from "../img/projects/simonGame.png";

// import imgCss from "../img/card-imgs/CSS.png";

// const projects = [imgCosts, imgSimon, imgCss, imgCosts, imgSimon, imgCss];

function Projetos() {
  // const carousel = useRef();
  // const [width, setWidth] = useState(0);

  // useEffect(() => {
  //   setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  // }, []);

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
        <a href="https://nimble-biscotti-5ce51e.netlify.app/">
          <Card name="Simon Game" img={imgSimon} type="proj" />
        </a>
        <Card name="Em breve" />
        <Card name="Em breve" />
      </div>
      {/* <div className={styles.carousel_section}>
        <motion.div
          ref={carousel}
          className={styles.carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className={styles.inner}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.0 }}
          >
            <motion.div className={styles.item}>
              <a href="https://resonant-pudding-e4f9c9.netlify.app/">
                <Card name="Costs" img={imgCosts} type="proj" />
              </a>
            </motion.div>
            <motion.div className={styles.item}>
              <a href="https://nimble-biscotti-5ce51e.netlify.app/">
                <Card name="Simon Game" img={imgSimon} type="proj" />
              </a>
            </motion.div>
            <motion.div className={styles.item}>
              <Card name="Em breve" />
            </motion.div>
            <motion.div className={styles.item}>
              <Card name="Em breve" />
            </motion.div>
            {/**************** {projects.map((proj) => (
              <motion.div className={styles.item} key={proj}>
                <img src={proj} alt={"Text alt"} />
              </motion.div>
            ))} }
          </motion.div>
        </motion.div>
      </div> */}
    </section>
  );
}

export default Projetos;
