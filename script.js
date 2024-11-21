// Grab necessary elements
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit');
const errorMessage = document.querySelector('.text-error');
const iconError = document.querySelector('.icon-error');

// Function to validate email format
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form from submitting immediately
  
  // Get the email value from the input field
  const email = emailInput.value.trim();

  // Clear previous error messages
  errorMessage.textContent = '';
  iconError.style.display = 'none';

  // Check if the email is empty or invalid
  if (!email) {
    errorMessage.textContent = 'Email cannot be empty';
    iconError.style.display = 'inline-block';
  } else if (!validateEmail(email)) {
    errorMessage.textContent = 'Please provide a valid email address';
    iconError.style.display = 'inline-block';
  } else {
    // Handle valid email (you can add more functionality like form submission here)
    errorMessage.textContent = 'Thank you for subscribing!';
    errorMessage.style.color = '#44d838'; // Green color for success
    iconError.style.display = 'none'; // Hide the error icon on success
    emailInput.value = ''; // Optionally clear the input field after success
  }
}

// Attach the event listener to the submit button
submitButton.addEventListener('click', handleFormSubmit);
