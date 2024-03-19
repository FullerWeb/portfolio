document.getElementById('enterBtn').addEventListener('click', async function () {
  // Fade out the splash page
  var splashPage = document.querySelector('.splash-page');
  splashPage.style.opacity = '0';
  await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1000ms (duration of the transition)
  splashPage.classList.add('hidden');

  // Show main website after the splash page transition completes
  var mainWebsite = document.querySelector('.main-website');
  // Apply max-width style to body
  document.body.classList.add('main-body');
  mainWebsite.classList.remove('hidden');

  // Fade in the main website
  var opacity = 0;
  var fadeInInterval = setInterval(function () {
    opacity += 0.1; // Adjust increment as needed for smoother/faster transition
    mainWebsite.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(fadeInInterval);
      mainWebsite.style.opacity = '1'; // Ensure opacity is set to 1 after transition completes
    }
  }, 100); // Adjust interval as needed for smoother/faster transition
});



