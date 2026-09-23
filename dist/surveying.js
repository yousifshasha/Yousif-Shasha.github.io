/* Surveying project page: spreadsheet lightbox only. */
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCaption = document.querySelector('#lightbox-caption');
const imageButtons = document.querySelectorAll('.image-button');
const closeButton = document.querySelector('.lightbox-close');

imageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    lightboxImage.src = button.dataset.image;
    lightboxImage.alt = button.querySelector('img').alt;
    lightboxCaption.textContent = button.dataset.caption || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  lightboxImage.src='';
}

closeButton.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if(event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape') closeLightbox();
});
