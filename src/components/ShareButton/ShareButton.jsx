import styles from "./ShareButton.module.css";
import icons from "../../sprite.svg";

const ShareButton = ({ onClick }) => {
  return (
    <button className={styles.shareButton} onClick={onClick}>
      Поділитися
      <svg className={styles.svg}>
        <use href={`${icons}#icon-share`}></use>
      </svg>
    </button>
  );
};

export default ShareButton;
