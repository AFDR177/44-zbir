import css from "./Footer.module.css";

import { useState } from "react";
import Modal from "react-modal";

import ModalShare from "../ModalShare/ModalShare";
import ShareButton from "../ShareButton/ShareButton";

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  return (
    <footer className={css.sectionFooter}>
      <p className={css.text}>Допоможи іншим дізнатись про наш збір</p>
      <ShareButton onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="A modal window for sharing information in a social network."
        className={css.styledModal}
        overlayClassName={css.modalOverlay}
      >
        <ModalShare closeModal={closeModal} />
      </Modal>
      <p className={css.textBaza}>
        Розробка Baza Trainee Ukraine 2024 <br />© Всі права захищені
      </p>
    </footer>
  );
};

export default Footer;
