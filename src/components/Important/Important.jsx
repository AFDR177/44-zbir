import image1_320_2x from "../../images/important/image_1-320-2x.jpg";
import image1_420_2x from "../../images/important/image_1-420-2x.jpeg";
import image1_768_2x from "../../images/important/image_1-768-2x.jpg";
import image1_1024_2x from "../../images/important/image_1-1024-2x.jpg";
import image1_1280_2x from "../../images/important/image_1-1280-2x.jpeg";
import image1_1440_2x from "../../images/important/image_1-1440-2x.jpg";
import image2_320_2x from "../../images/important/image_2-320-2x.jpg";
import image2_420_2x from "../../images/important/image_2-420-2x.jpg";
import image2_768_2x from "../../images/important/image_2-768-2x.jpg";
import image2_1024_2x from "../../images/important/image_2-1024-2x.jpeg";
import image2_1280_2x from "../../images/important/image_2-1280-2x.jpeg";
import image2_1440_2x from "../../images/important/image_2-1440-2x.jpg";
import image3_320_2x from "../../images/important/image_3-320-2x.jpg";
import image3_420_2x from "../../images/important/image_3-420-2x.jpg";
import image3_768_2x from "../../images/important/image_3-768-2x.jpg";
import image3_1024_2x from "../../images/important/image_3-1024-2x.jpeg";
import image3_1280_2x from "../../images/important/image_3-1280-2x.jpeg";
import image3_1440_2x from "../../images/important/image_3-1440-2x.jpg";
import css from "./Important.module.css";

const importantList = [
  {
    title: "Авто - це швидкий та мобільний вихід на позиції",
    images: [
      { src: image1_320_2x, width: 320 },
      { src: image1_420_2x, width: 420 },
      { src: image1_768_2x, width: 768 },
      { src: image1_1024_2x, width: 1024 },
      { src: image1_1280_2x, width: 1280 },
      { src: image1_1440_2x, width: 1440 },
    ],
  },
  {
    title: "Авто - це потужний та надійний засіб доставки зброї",
    images: [
      { src: image2_320_2x, width: 320 },
      { src: image2_420_2x, width: 420 },
      { src: image2_768_2x, width: 768 },
      { src: image2_1024_2x, width: 1024 },
      { src: image2_1280_2x, width: 1280 },
      { src: image2_1440_2x, width: 1440 },
    ],
  },
  {
    title: "Авто - це бойовий побратим, який допомагає рятувати життя",
    images: [
      { src: image3_320_2x, width: 320 },
      { src: image3_420_2x, width: 420 },
      { src: image3_768_2x, width: 768 },
      { src: image3_1024_2x, width: 1024 },
      { src: image3_1280_2x, width: 1280 },
      { src: image3_1440_2x, width: 1440 },
    ],
  },
];

const Important = ({ importantRef }) => {
  return (
    <section className={css.section}>
      {/* маркер зупинки для scrollToImportant */}
      <span className={'scroll_mark'} ref={importantRef}></span>
      <h2 className={css.title}>Чому це важливо</h2>
      <ul className={css.list}>
        {importantList.map((item, index) => {
          const srcSetString = item.images
            .sort((a, b) => b.width - a.width)
            .map((image) => `${image.src} ${image.width}w`)
            .join(", ");
          return (
            <li className={css.item} key={index}>
              <div className={css.img_container}>
                <picture>
                  {item.images.map(({ src, width }) => (
                    <source
                      key={`${src}-${width}`}
                      srcSet={`${src} ${width}w`}
                      media={`(min-width: ${width}px)`}
                    />
                  ))}
                  <img
                    className={css.img}
                    src={item.images[0].src}
                    srcSet={srcSetString}
                    alt="Фото авто"
                  />
                </picture>
              </div>
              <p className={css.text}>{item.title}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Important;
