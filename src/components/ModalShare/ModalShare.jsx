import { useState } from "react";
import css from "./ModalShare.module.css";
import icons from "../../sprite.svg";

const ModalShare = ({ closeModal }) => {
  const [isCopyText, setIsCopyText] = useState(false);

  const url = window.location.href;

  const handleShare = (socialMedia) => {
    let shareUrl = "";

    switch (socialMedia) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      default:
        console.log("Ця функція не підтримується в цьому браузері");
        break;
    }
    return shareUrl;
  };

  const onClick = () => {
    navigator.clipboard.writeText(url);

    setIsCopyText(true);

    setTimeout(() => {
      setIsCopyText(false);
    }, 5000);
  };

  return (
    <div className={css.wrapper}>
      <button className={css.buttonClose} onClick={closeModal}>
        <svg className={css.svgClose} width="30px" height="30px">
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>
      <h3 className={css.header}> Поділіться сайтом з друзями!</h3>
      <p className={css.text}>
        Надішліть посилання на сайт через cоціальні мережі
      </p>
      <ul className={css.list}>
        <li>
          <a
            className="link"
            href={handleShare("telegram")}
            target="_blank"
            rel="noreferrer"
          >
            <svg className={css.svg} width="48px" height="48px">
              <use href={`${icons}#icon-telegram`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            className="link"
            href={handleShare("facebook")}
            target="_blank"
            rel="noreferrer"
          >
            <svg className={css.svg} width="48px" height="48px">
              <use href={`${icons}#icon-facebook`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            className="link"
            href={handleShare("linkedin")}
            target="_blank"
            rel="noreferrer"
          >
            <svg className={css.svg} width="48px" height="48px">
              <use href={`${icons}#icon-linkedin`}></use>
            </svg>
          </a>
        </li>
      </ul>
      <p className={css.text}> або скопіюйте лінк</p>

      <button className={css.copyButton} type="button" onClick={onClick}>
        {isCopyText ? (
          <p className={css.textCopy}>Посилання скопійовано!</p>
        ) : (
          <div className={css.wrapperText}>
            <p className={css.textCopy}>Скопіювати посилання </p>
            <svg className={css.svgShare} width="32px" height="32px">
              <use href={`${icons}#icon-share`}></use>
            </svg>
          </div>
        )}
      </button>
    </div>
  );
};

export default ModalShare;
