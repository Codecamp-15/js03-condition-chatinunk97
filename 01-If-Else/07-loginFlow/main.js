let username = prompt("Input username");
let password = prompt("Password")

// Check username and password
if (username == ""){
    alert("username is required");
}
if (password == ""){
    alert("Password is required")
}
else{
    if (username == "admin" && password =="1234"){
        alert("Hello")
    }
    else if (username == "john" && password =="qwerty"){
        alert("Hello")
    }
    else{
        alert("Invalid username of password")
    }
}


