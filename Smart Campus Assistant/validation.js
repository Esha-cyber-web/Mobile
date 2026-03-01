function validateLogin(username, password) {
  if (!username || !password) {
    alert("Username or Password cannot be empty!");
    return false;
  }
  return true;
}