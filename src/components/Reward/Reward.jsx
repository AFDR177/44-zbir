import sleeve_320_1x from "../../images/reward/sleeve-320-1x.jpeg";
import sleeve_320_2x from "../../images/reward/sleeve-320-2x.jpeg";
import sleeve_420_1x from "../../images/reward/sleeve-420-1x.jpg";
import sleeve_420_2x from "../../images/reward/sleeve-420-2x.jpg";
import sleeve_768_1x from "../../images/reward/sleeve-768-1x.jpeg";
import sleeve_768_2x from "../../images/reward/sleeve-768-2x.jpeg";
import sleeve_1024_1x from "../../images/reward/sleeve-1024-1x.jpeg";
import sleeve_1024_2x from "../../images/reward/sleeve-1024-2x.jpeg";
import sleeve_1280_1x from "../../images/reward/sleeve-1280-1x.jpeg";
import sleeve_1280_2x from "../../images/reward/sleeve-1280-2x.jpeg";
import sleeve_1440_1x from "../../images/reward/sleeve-1920-1x.jpg";
import sleeve_1440_2x from "../../images/reward/sleeve-1920-2x.jpeg";
import css from "./Reward.module.css";

const Reward = ({ reward }) => {
  return (
    <section className={css.section}>
      {/* маркер зупинки для scrollToReward */}
      <span className={'scroll_mark'} ref={reward}></span>
      <h2 className={css.title}>Символ незламності - гільза за донат</h2>
      <div className={css.block}>
        <div className={css.text}>
          <p>Ворога зупиняє наш гнів. Його доставляють кулі.</p>
          <p>
            Мама молодого Героя - розписує гільзи від нашого гніву. ЇЇ син
            другий рік стоїть першим на шляху ворога, захищаючи наш з вами світ
            від пітьми.
          </p>
          <p>
            Ця гільза з поля бою з ручним розписом - символ спустошених війною
            душ. Неймовірно відважна мама загортає їх в яскраві та теплі фабри.{" "}
          </p>
          <p>
            Відправивши донат від 500 грн, залиш свої дані в коментарі при
            переказі, і ти матимеш можливість отримати в подарунок цей
            унікальний символ незламності.
          </p>
        </div>
        <div className={css.img_container}>
          <picture>
            <source
              srcSet={`${sleeve_1440_1x} 1440w, ${sleeve_1440_2x} 2880w`}
              media="(min-width: 1440px)"
            />
            <source
              srcSet={`${sleeve_1280_1x} 1280w, ${sleeve_1280_2x} 2560w`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${sleeve_1024_1x} 1024w, ${sleeve_1024_2x} 2048w`}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={`${sleeve_768_1x} 768w, ${sleeve_768_2x} 1536w`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${sleeve_420_1x} 420w, ${sleeve_420_2x} 840w`}
              media="(min-width: 420px)"
            />
            <source
              srcSet={`${sleeve_320_1x} 320w, ${sleeve_320_2x} 640w`}
              media="(min-width: 320px)"
            />
            <img className={css.img} src={sleeve_320_1x} alt="Sleeves" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Reward;
