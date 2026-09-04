// pegando a div com as imagens e clonando em uma constante
const cloneSlide = document.querySelector('.logos-slide').cloneNode(true);
console.log(cloneSlide);

// inserir o cloneSlide dentro da div com a classse logos
document.querySelector('.logos').appendChild(cloneSlide);
