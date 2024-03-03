document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById('overlay');
  var disclaimer = document.getElementById('disclaimer');
  var closeBtn = document.getElementById('closeBtn');

  // Initially hide the disclaimer
  disclaimer.style.bottom = '-100%';

  overlay.style.display = 'block';
  disclaimer.style.display = 'block';

  setTimeout(function () {
    overlay.style.opacity = '1';
    // Animate the disclaimer to rise from the bottom
    disclaimer.style.bottom = '0';
    // Re-enable scrolling
    document.documentElement.style.overflowY = 'scroll';
  }, 100);

  closeBtn.addEventListener('click', function () {
    overlay.style.opacity = '0';
    // Animate the disclaimer to move back down
    disclaimer.style.bottom = '-100%';
    // Set overflow-y to scroll initially to avoid shifting
    document.documentElement.style.overflowY = 'scroll';
    setTimeout(function () {
      overlay.style.display = 'none';
      disclaimer.style.display = 'none';
      // Re-enable scrolling
      document.body.style.overflow = 'auto';
    }, 500); // Wait for the same duration as the transition (0.5s)
  });
});




document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.menu-toggle').classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
  });
});


