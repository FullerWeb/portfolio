document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var formData = new FormData(this);
  var jsonData = {};
  console.log(jsonData)

  formData.forEach(function (value, key) {
    jsonData[key] = value;
  });

  fetch('https://script.google.com/macros/s/AKfycbwMkQcoBiT2_HgyasKoKX9vNh3KtAROf0aBHslZhxGHz3snf8YaXOMqcFEPfWBEJd-2cA/exec', {
    method: 'POST',
    body: JSON.stringify(jsonData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        console.log('Form submitted successfully');
        // Handle success as needed
      } else {
        console.error('Form submission failed');
        // Handle error as needed
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error as needed
    });
});
