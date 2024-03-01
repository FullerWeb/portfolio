// Function to fetch and inject footer into the existing footer element
function injectFooter(templatePath) {
  fetch(templatePath)
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
      // Call the function to show testimonials after injecting footer HTML
      showTestimonials();
    })
    .catch(error => console.error('Error fetching footer template:', error));
}

// Function to show testimonials
function showTestimonials() {
  const testimonials = document.querySelectorAll('.plug');
  let currentTestimonialIndex = 0;

  function showNextPlug() {
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('visible');
    });
    testimonials[currentTestimonialIndex].classList.add('visible');
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  }

  showNextPlug(); // Show the first testimonial immediately
  setInterval(showNextPlug, 8000); // Change testimonial every 8 seconds
}

// Call injectFooter function with the path to the footer template
injectFooter('../Components/footer/Footer.html');
