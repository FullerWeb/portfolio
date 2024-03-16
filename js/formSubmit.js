document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission
  document.getElementById("submit-btn").disabled = true;
  document.getElementById("message").textContent =
    "Submitting...";
  document.getElementById("message").style.display = "block";
  // Collect the form data
  var formData = new FormData(this);
  var keyValuePairs = [];
  for (var pair of formData.entries()) {
    keyValuePairs.push(pair[0] + "=" + pair[1]);
  }

  var formDataString = keyValuePairs.join("&");

  // Send a POST request to your Google Apps Script
  fetch(
    "https://script.google.com/macros/s/AKfycbxhTvHi2qhQ6UiPggbQnF_qwl66xZN9FBXzHniysURLNdEMta1Q5NK8EltgvGeODO-z/exec",
    {
      redirect: "follow",
      method: "POST",
      body: formDataString,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  )
    .then(function (response) {
      // Check if the request was successful
      if (response) {
        if (response.status == 200){
          document.getElementById("message").textContent =
            "Thanks for reaching out. I will be in touch shortly. - Mark Fuller";
        }
        return response; 
      } else {
        throw new Error("Failed to submit the form.");
      }
    })
    .then(function (data) {
      document.getElementById("contactForm").reset();
      

    })
    .catch(function (error) {
      // Handle errors, you can display an error message here
      console.error(error);
      document.getElementById("message").textContent =
        "Something happened while attempting to send your message. Please try again.";
      document.getElementById("message").style.display = "block";
    });
});