import css from "./Header.module.css";


export default function Item({ name, link, id, closeMenu = () => { }, idPreview }) {

    const isActive = idPreview === id ? true : false;

    const handleClick = () => {
        closeMenu();
        link();
    }

    return (
        <div >
            <div onClick={handleClick} id="linkId"
                className={`${css.header__menu__item} ${isActive ? css.active : css.default} `}>
                {name}
            </div>
        </div >
    );
}