// Hide the loading screen when page is fully loaded
let windowLoaded = false
let modelLoaded = false

document.querySelector('#model-viewer').addEventListener('load', () => {
  console.log('model loaded');
  modelLoaded = true
  hideLoadingScreen()
})
window.addEventListener('load', () => {
  console.log('window loaded');
  windowLoaded = true
  hideLoadingScreen()
})
const hideLoadingScreen = () => {
  if (windowLoaded && modelLoaded) {
    console.log('both page and model are loaded');
    document.getElementById('preloader').style.display = 'none';
  }
}