import styles from "./Card.module.css";

function Card({ name, img }) {
  console.log(styles.classe);
  return (
    <div className={styles.skill_card}>
      <h3>{name}</h3>
      <hr />
      <div className={styles.img_box}>
        <img className={styles.skill_img} src={img} alt={name} />
      </div>
    </div>
  );
}

export default Card;
