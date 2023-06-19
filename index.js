// Function to show the loading screen
function showLoadingScreen() {
    document.getElementById('preloader').style.display = 'flex';
  }
  
  // Function to hide the loading screen
  function hideLoadingScreen() {
    document.getElementById('preloader').style.display = 'none';
  }
  
  // Delay in milliseconds for the loading screen
  const loadingDelay = 2000; // Change this value to set your desired delay
  
  // Show the loading screen after the delay
  setTimeout(showLoadingScreen, loadingDelay);
  
  // Example usage: Simulate content loading
  setTimeout(hideLoadingScreen, loadingDelay + 3000); // Hide the loading screen after an additional delay (3 seconds in this example)