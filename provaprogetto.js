//* scroll back to top page logic
//! un casino farlo responsive, forse lascerei perdere
/* const container_scroll = document.querySelector(".container_scroll");
container_scroll.addEventListener('scroll', () => {
 console.log(container_scroll.scrollTop, container_scroll.scrollHeight - container_scroll.clientHeight);
 if (container_scroll.scrollTop > container_scroll.scrollHeight - container_scroll.clientHeight) {
  console.log('torna su');
  container_scroll.scrollTo({
   top: 0,
   behavior: "smooth"
  })
 }
}) */


//*al caricamento del modello, attiva animazione

document.addEventListener('DOMContentLoaded', () => {
 const allVideos = document.querySelectorAll('#video');
 allVideos.forEach(element => {
  console.log('play video 1');
  element.play()
 });
})