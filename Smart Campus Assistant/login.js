document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if(!username || !password) {
    alert("Username or Password cannot be empty!");
  } else {
    alert("Login Successful!");
  }
});