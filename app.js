document.addEventListener('DOMContentLoaded', function() {
var addBtn = document.getElementById("addBtn");
  if (addBtn) {
    addBtn.addEventListener("click", function () {
      window.location.href = "addMember.html"; 
    });
  }
  var viewBtn = document.getElementById("viewBtn");
  if (viewBtn) {
    viewBtn.addEventListener("click", function () {
      window.location.href = "viewMember.html"; 
    });
  }



  document.getElementById('submitButton').addEventListener('click', function() {
    // Collect values from input fields
    const member = {
      id: document.getElementById('Id').value,
      name: document.getElementById('Name').value,
      age: parseInt(document.getElementById('Age').value),
      dob: document.getElementById('DOB').value,
      address: document.getElementById('Address').value,
      email: document.getElementById('Email').value,
      number: document.getElementById('Number').value,
      guardian: document.getElementById('Guardian').value
    };
  
    // Send the member object to the server using fetch
    fetch('http://localhost:8080/addMember', { // Replace with your server's URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(member), // Convert the member object to JSON
    })
    .then(response => {
      // Check if the response has content
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      // Check if the response contains JSON
      return response.text().then(text => {
        return text ? JSON.parse(text) : {}; // If there's no content, return an empty object
      });
    })
    .then(data => {
      console.log('Success:', data); // Handle the success response
    })
    .catch((error) => {
      console.error('Error:', error); // Handle any errors that occur
    });
  });
  

});


function clearInputFields() {
  document.getElementById('ID').value = '';
  document.getElementById('Name').value = '';
  document.getElementById('Address').value = '';
  document.getElementById('Age').value = '';
  document.getElementById('DOB').value = "dd-mm-yyyy";
  document.getElementById('Email').value = '';
  document.getElementById('Number').value = '';
  document.getElementById('Guadian').value = '';
}

