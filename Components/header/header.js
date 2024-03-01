// Function to fetch and inject header into the existing header element
function injectHeader(templatePath) {
  fetch(templatePath)
    .then(response => response.text())
    .then(html => {
      document.getElementById('header').innerHTML = html;
      // Attach event listener for the menu button
      document.querySelector('.menu-btn').addEventListener('click', function () {
        // Toggle the class .menu-open on the header element
        const header = document.getElementById('header'); // Assuming your header element has the ID 'header'
        if (header) {
          header.classList.toggle('menu-open');
        } else {
          console.error('Header element not found.');
        }
      });
    })
    .catch(error => console.error('Error fetching header template:', error));
}

// Call injectHeader function with the path to the header template
injectHeader('../Components/header/Header.html');
