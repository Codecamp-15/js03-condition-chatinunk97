let login = prompt("Enter username");
let message;

message = 
login == "Employee" ? "hello" :
login == "Director" ? "Greetings":
login == "" ? "No Login": ""

alert(message)