// Event listener to toggle the menu button
document.querySelector('.menu-btn').addEventListener('click', function (event) {
  console.log('Menu button clicked');
  // Toggle the class .menu-open on the body element
  document.body.classList.toggle('menu-open');
  event.stopPropagation(); // Prevents the click event from propagating to the document body immediately
});

// Event listener to close the menu when anywhere outside of it is clicked
document.addEventListener('click', function (event) {
  console.log('Attempting to close the menu')
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-sm');

  // Check if the click event occurred outside of the menu button and the nav menu
  if (!menuBtn.contains(event.target) && !nav.contains(event.target)) {
    // If so, remove the .menu-open class from the body
    document.body.classList.remove('menu-open');
  }
});

