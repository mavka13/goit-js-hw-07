import { galleryItems } from './gallery-items.js';
// Change code below this line

const markupGallery = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
  })
  .join("");



 const gallery = document.querySelector(".gallery");
gallery.innerHTML = markupGallery;



const modalWindow = event =>{
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
      }
    const instance = basicLightbox.create(`<img src="${event.target.src}"width="800" height="600">`);

instance.show()

}

gallery.addEventListener("click", modalWindow)





//  galleryEl.forEach((item) => {
//     const li = document.createElement("li")
//     li.className = "gallery__item";
//     const a = document.createElement("a")
//     a.className = "gallery__link";
//     a.href = item.original;
//     const img = document.createElement("img")
//     img.src = item.preview;
//     img.alt = item.description;
//     img.className = "gallery__image";
//     a.appendChild(img);
//     li.appendChild(a);
//     gallery.appendChild(li);
    

//  })