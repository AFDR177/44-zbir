import React, { useRef, useState } from "react";

import Modal from "react-modal";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Important from "./components/Important/Important";
import Reward from "./components/Reward/Reward";
import Footer from "./components/Footer/Footer";
import ReturnBtn from "./components/ReturnBtn/ReturnBtn";
import StatusBar from "./components/StatusBar/StatusBar";

Modal.setAppElement("#root");

const App = () => {
  const goalRef = useRef(null);
  const aboutRef = useRef(null);
  const importantRef = useRef(null);
  const reward = useRef(null);

  const [currentSection, setCurrentSection] = useState("");
  const [previewSection, setPreviewSection] = useState("");

  //Прокрутка до секции Мета
  const scrollToGoal = () => {
    goalRef.current.scrollIntoView({ behavior: "smooth" });
    SectionId(dataHeader.menu[0].id);
  };

  //Прокрутка до секции Про бригаду
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
    SectionId(dataHeader.menu[1].id);
  };

  //Прокрутка до секции Чому це важливо
  const scrollToImportant = () => {
    importantRef.current.scrollIntoView({ behavior: "smooth" });
    SectionId(dataHeader.menu[2].id);
  };

  //Прокрутка до секции Гільза за донат
  const scrollToReward = () => {
    reward.current.scrollIntoView({ behavior: "smooth" });
    SectionId(dataHeader.menu[3].id);
  };

  // Id  секции
  const SectionId = (sectionId) => {
    setPreviewSection(sectionId); // Устанавливаем новое значение id секции 
    setCurrentSection(currentSection); // Записываем текущее значение id секции в предыдущее значение
  }


  //Данные для Хедера
  const dataHeader = {
    menu: [
      {
        id: 11,
        name: "Мета",
        link: scrollToGoal,
      },
      {
        id: 12,
        name: "Про бригаду",
        link: scrollToAbout,
      },
      {
        id: 13,
        name: "Чому це важливо",
        link: scrollToImportant,
      },
      {
        id: 14,
        name: "Гільза за донат",
        link: scrollToReward,
      },

    ],
  };

  return (
    <>
      <Header list={dataHeader.menu} idPreview={previewSection} />
      <Hero />
      <StatusBar goalRef={goalRef} />
      <About aboutRef={aboutRef} />
      <Important importantRef={importantRef} />
      <Reward reward={reward} />
      <Footer />
      <ReturnBtn />

    </>
  );
};

export default App;
