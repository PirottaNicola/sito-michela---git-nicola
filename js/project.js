/*
la proprietà scroll-snap non supporta le animazioni che ho usato nel resto del sito. 
Per questo motivo si è implementata una funzione che durante lo scrolling intercetta i vari elementi da animare ed applica loro la classe aos-animate
*/
const aosAnimation = document.querySelectorAll('[data-aos]');
const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
  if (entry.intersectionRatio > 0) {
   entry.target.classList.add('aos-animate');
  } else {
   entry.target.classList.remove('aos-animate');
  }
 });
});
aosAnimation.forEach(aosObject => {
 observer.observe(aosObject);
});