inputNumber = prompt("Input your number")

if (inputNumber === null || inputNumber.trim()==="" || isNaN(inputNumber)){
    alert("Invalid Number")
}
else if (inputNumber > 0){
    alert("It's a positive number");
}
else if(inputNumber == 0){
    alert("Zero");
}
else if (inputNumber < 0){
    alert("Negative Number")
}