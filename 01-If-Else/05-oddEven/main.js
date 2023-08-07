let inputNumber = prompt("Input your number")

if (inputNumber === null || inputNumber.trim()==="" || isNaN(inputNumber)){
    alert("Invalid Number")
}
else if (inputNumber%2 == 0){
    alert("Even Number")
}
else if (inputNumber%2 != 0){
    alert("Odd Number")
}