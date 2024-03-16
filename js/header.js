// Function to handle opening the menu
function openMenu(event) {
  // Toggle the class .menu-open on the body element
  document.body.classList.toggle('menu-open');
  event.stopPropagation(); // Prevents the click event from propagating to the document body immediately
}

// Function to handle closing the menu
function closeMenu(event) {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-sm');

  // Check if the click event occurred outside of the menu button and the nav menu
  if (!menuBtn.contains(event.target) && !nav.contains(event.target)) {
    // If so, remove the .menu-open class from the body
    document.body.classList.remove('menu-open');
    // Remove the event listener for closing the menu
    document.removeEventListener('click', closeMenu);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', openMenu);
  } else {
    console.error('Menu button not found!');
  }
});


