
function getFormValue() {
  // Get the form element by its ID
  const form = document.getElementById("myForm");
  
  // Get the values of the first and last name fields
  const firstName = form.elements.firstName.value;
  const lastName = form.elements.lastName.value;
  
  // Display the values using alert()
  alert("First Name: " + firstName + "\nLast Name: " + lastName);
}

// Attach the function to the form's submit event
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  getFormValue(); // Call the getFormValue() function to display the values
});
