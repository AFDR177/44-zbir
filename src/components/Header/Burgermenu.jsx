import React, { useState, Fragment } from "react";
import css from "./Burgermenu.module.css";
import burgermenu from "./burgermenu.svg";
import burgermenuclose from "./burgermenuclose.svg";
import Item from "./Item";




export default function BurgerMenu({ list, idPreview }) {
    const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия меню

    // Функция для переключения состояния открытия/закрытия меню
    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };

    // Функция для закрытия меню при выборе пункта меню
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="">
                {isOpen ? <img onClick={closeMenu}
                    src={burgermenuclose}
                    alt="burgmenuclose"
                    className={css.burgermenu__icon_close}
                    height={30} width={30} />
                    :
                    <img onClick={toggleMenu}
                        id="burgermenu"
                        src={burgermenu}
                        alt="burgmenu"
                        className={css.burgermenu__icon_open}
                        height={16} width={24}
                    />}
            </div>

            {isOpen && (
                <div className={css.burgermenu__content}>

                    <div className={css.burgermenu__item}>
                        {list.map(({ id, ...rest }) => (
                            <Fragment key={id}>
                                <Item {...rest} closeMenu={closeMenu} idPreview={idPreview} />
                            </Fragment>
                        ))}
                    </div>
                </div>
            )}
        </>
    )

}  