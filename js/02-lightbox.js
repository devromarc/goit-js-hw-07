import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

const createGallery = (el) => {
  return el
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`;
    })
    .join("");
};

const galleryImageSet = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryImageSet);

// By creating a new instance with new SimpleLightbox(...), the constructor of the SimpleLightbox class is automatically called.

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
