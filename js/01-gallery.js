import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery")

const galleryItem = galleryItems.map(({preview, original, description}) => {
  return `<div class="gallery__item">
  <a class="gallery__link">
  <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
  </a>
  </div>`
}).join("")
gallery.insertAdjacentHTML("afterbegin", galleryItem)

gallery.addEventListener("click", onOpenModal);

let instance

function onOpenModal(event) {
  event.preventDefault()
  if (event.target.nodeName !== "IMG") {
    return
  }
  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => window.addEventListener('keyup', onCloseModal),
      onClose: () => window.removeEventListener('keyup', onCloseModal)
}
)
  instance.show()
}


function onCloseModal(event) {
  if (event.code === "Escape") {
    instance.close()
  }
}