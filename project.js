/*la proprietà scroll-snap non supporta le animazioni che ho usato nel resto del sito*/
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