import { Fragment } from "react";
import React, { useState, useEffect } from "react";


import css from "./Header.module.css";
import DonationBtn from "../DonationBtn/DonationBtn"
import logo from "./logo.svg";
import BurgerMenu from "./Burgermenu";
import Item from "./Item";



export default function Header({ list, idPreview }) {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Проверяем размер экрана при загрузке страницы

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // Обновляем состояние isMobile при изменении размера экрана
        };

        window.addEventListener('resize', handleResize); // Добавляем слушателя события resize

        return () => {
            window.removeEventListener('resize', handleResize); // Удаляем слушателя события при размонтировании компонента
        };
    }, []); // Пустой массив зависимостей, чтобы обработчик изменения размера экрана был установлен только один раз при монтировании компонента



    return (


        <>
            {isMobile ?

                <header className={css.headermobile}>
                    <a href="/">
                        <img src={logo} alt="Logo" height={64} />
                    </a>
                    <BurgerMenu list={list} idPreview={idPreview} />

                </header>
                :
                <header className={css.headerdesk}>
                    <a href="/">
                        <img src={logo} alt="Logo" height={84} />
                    </a>


                    <div className={css.header__block}>
                        <div className={css.header__menu}>
                            {list.map(({ id, ...rest }) => (
                                <Fragment key={id}>
                                    <Item {...rest} id={id} idPreview={idPreview} />
                                </Fragment>
                            ))}
                        </div>

                        <DonationBtn />
                    </div>

                </header>}
        </>
    );
}
