/*
Si implementa la funzione hideLoadingScreen() che è incaricata di nascondere la schermata di caricamento non appena la pagina (e in particolare il modello 3d al suo interno) è stata completamente caricata
*/
let windowLoaded = false
let modelLoaded = false
document.querySelector('#model-viewer').addEventListener('load', () => {
  modelLoaded = true
  hideLoadingScreen()
})
window.addEventListener('load', () => {
  windowLoaded = true
  hideLoadingScreen()
})
const hideLoadingScreen = () => {
  if (windowLoaded && modelLoaded) {
    document.getElementById('preloader').style.display = 'none';
  }
}