import { useState } from "react";
import css from "./ReturnBtn.module.css";
import icons from "../../sprite.svg";

const ReturnBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <button
        onClick={scrollToTop}
        className={isVisible ? css.scrollToTopBtnActive : css.scrollToTopBtn}
        type="button"
      >
        <svg className={css.iconArrow} width="25" height="29">
          <use href={`${icons}#icon-arrow`}></use>
        </svg>
      </button>
    </>
  );
};

export default ReturnBtn;
