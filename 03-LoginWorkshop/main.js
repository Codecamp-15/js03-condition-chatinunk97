let user = prompt("Put in your username");
if (user === null || user.trim() === "") {
    user = "guest"
    alert("Welcome " + user)
}

else if (user.toLowerCase() === "codecamp") {
    let password = prompt("Please enter your password")
    if (password === "123456") {
        alert("Welcome " + user)
    }
    else {
        alert("Wrong password")
    }
}
else{
    user = "guest"
    alert("Welcome " + user)
}
