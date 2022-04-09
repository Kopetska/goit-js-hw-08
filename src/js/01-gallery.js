import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
    <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>
  </li>`
  )
  .join(" ");

gallery.insertAdjacentHTML("afterbegin", markup);

new SimpleLightbox(".gallery a", {
  navText: ["<", ">"],
  captionsData: "alt",
  captionsPosition: "bottom",
  captionsDelay: 250,
  overlay: true,
  nav: true,
  captionSelector: "img",
});
