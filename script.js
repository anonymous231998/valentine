let currentPage = 1;
const totalPages = 4;

function nextPage(pageNumber) {
  if (currentPage < totalPages) {
    // Hide current page
    document.getElementById('page' + currentPage).style.display = 'none';
    
    // Show next page
    document.getElementById('page' + pageNumber).style.display = 'block';
    
    // Update current page
    currentPage = pageNumber;
  }
}

function showPasswordForm() {
  document.getElementById('page4').style.display = 'none';
  document.getElementById('password-form').style.display = 'block';
}

function checkPassword() {
  const password = document.getElementById('password').value;
  const correctPassword = "love123"; // Set your password here

  if (password === correctPassword) {
    // Hide the password form and show protected content
    document.getElementById('password-form').style.display = 'none';
    document.getElementById('protected-content').style.display = 'block';
  } else {
    // Show error message
    document.getElementById('error-message').style.display = 'block';
  }
}
