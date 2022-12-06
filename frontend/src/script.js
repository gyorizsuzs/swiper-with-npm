import Swiper from 'swiper';
import 'swiper/css';
import './script.css';

window.addEventListener('load', async () => {
  console.log('loaded');
  const images = await getJson('/images');
  console.log(images);
  const rootEelement = document.getElementById('root');
  rootEelement.insertAdjacentHTML(
    'beforeend',
    swiperComponent(images, swiperImageComponent)
  );

  const swiper = new Swiper('.swiper', {
    loop: true,
  });
});

const getJson = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const swiperImageComponent = (image) => {
  return `
        <div class="swiper-slide">
            <h2>${image.title}</h2>
            <image src="public/${image.url}">
        </div>
    `;
};

const swiperComponent = (data, component) => {
  return `
    <div class="swiper">
        <div class="swiper-wrapper">
            ${data
              .map((element) => {
                return component(element);
              })
              .join(' ')}
        </div>
    </div>
    `;
};

/* const swiperImageTextComponent = (text, component) => {
  return `
        <div>
            <p>${text}</p>
            ${component}
        </div>
    `;
}; */
