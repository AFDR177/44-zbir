import styles from "./Hero.module.css";
import DonationBtn from "../DonationBtn/DonationBtn";
import icons from "../../sprite.svg";

const Hero = () => {
  return (
    <>
      <div>
        <div className={styles.hero}>
          <div className={styles.heroBlock}>
            <div className={styles.heroContent}>
              <h3 className={styles.title}>Разом для фронту</h3>
              <p className={styles.text}>
                У запеклій боротьбі немає нічого важливішого за боєздатне
                військо!
              </p>
            </div>
            <div className={styles.button}>
              <DonationBtn />
            </div>
            <div className={styles.goal}>
              <span className={styles.text1}>Наша мета</span>
              <svg className={styles.svg}>
                <use href={`${icons}#arrow`}></use>
              </svg>
              <span className={styles.text2}>50 000 грн</span>
            </div>
          </div>
        </div>
        <div className={styles.goal_section}>
          <p className={styles.goal_text}>
            Широкомасштабне вторгнення продемонструвало на що ми, Українці,
            здатні заради свободи. Щодня воїни 44 ОМБр виборюють наше право
            вільно жити у нашій країні. І Героям потрібна справна техніка для
            пересування. Наша мета - зібрати кошти для ремонту авто і підтримки
            його в бойовій готовності для виконання завдань
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
