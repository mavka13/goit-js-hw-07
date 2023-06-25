import { galleryItems } from './gallery-items.js';
// Change code below this line



console.log(galleryItems);

 const gallery = document.querySelector(".gallery");


 galleryItems.forEach((item) => {
    const li = document.createElement("li")
    li.className = "gallery__item";
    const a = document.createElement("a")
    a.className = "gallery__link";
    a.href = item.original;
    const img = document.createElement("img")
    img.src = item.preview;
    img.alt = item.description;
    img.className = "gallery__image";
    a.appendChild(img);
    li.appendChild(a);
    gallery.appendChild(li);
    

 })


const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250, captionType: "alt",  });

