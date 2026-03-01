// backend.js

const users = [{email: "user@test.com", password: "12345"}];

function login(email, password){
    const user = users.find(u => u.email === email && u.password === password);
    if(user){
        console.log("Login Successful");
    } else {
        console.log("Login Failed");
    }
}

// Test the function
login("user@test.com", "12345");
login("wrong@test.com", "11111");