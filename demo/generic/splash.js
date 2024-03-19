document.getElementById('enterBtn').addEventListener('click', function () {
  // Fade out the splash page
  var splashPage = document.querySelector('.splash-page');
  splashPage.style.opacity = '0';
  setTimeout(function () {
    splashPage.classList.add('hidden');
  }, 1000); // Set timeout to match the duration of the transition
  // Show main website
  var mainWebsite = document.querySelector('.main-website');
  mainWebsite.classList.remove('hidden');
  mainWebsite.style.opacity = '1'; // Change opacity to make the main website visible
  // Apply max-width style to body
  document.body.classList.add('main-body');
});

