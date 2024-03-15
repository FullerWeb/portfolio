// Function to handle opening and closing the modal
function getModal() {
  console.log('Attempting to get modal');

  // Get the modal
  var modal = document.getElementById('contactModal');

  // Get the button that opens the modal
  var connectBtn = document.getElementById("connect-button");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  connectBtn.onclick = function () {
    modal.style.display = "flex";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Form submission handling
  document.getElementById("contactForm").onsubmit = function (event) {
    event.preventDefault(); // Prevent form submission
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
      })




    modal.style.display = "none";
  };
}
