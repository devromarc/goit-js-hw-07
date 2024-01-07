import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

const createGallery = (el) => {
  return el
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
        </li>`;
    })
    .join("");
};

const galleryImageSet = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryImageSet);

// Handle click event in the gallery
const onGalleryClick = (event) => {
  event.preventDefault();

  // console.log(event);

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalURL = event.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${originalURL}">`);

  instance.show();

  const handleOnESCpress = (event) => {
    // console.log(event);
    if (event.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", handleOnESCpress);
    }
  };
  window.addEventListener("keydown", handleOnESCpress);
};

galleryContainer.addEventListener("click", onGalleryClick);
