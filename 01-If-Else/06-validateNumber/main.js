let inputNumber_1 = (prompt("First number"));
let inputNumber_2 = (prompt("Second number"));

if (inputNumber_1 == null || inputNumber_2 == null || inputNumber_1.trim() == "" || inputNumber_2.trim() == ""
    || isNaN(inputNumber_1) || isNaN(inputNumber_2)) {
    alert("Invalid number")
}
else {
    alert(+(inputNumber_2) + +(inputNumber_1))
}

