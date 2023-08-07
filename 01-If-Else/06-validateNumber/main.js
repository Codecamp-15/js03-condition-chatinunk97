let inputNumber_1 = (prompt("First number"));
let inputNumber_2 = (prompt("Second number"));

if (inputNumber_1 == "" || inputNumber_2 ==""){
    alert("There is / are empty input(s)")
}
else if (!isNaN(inputNumber_1) || !isNaN(inputNumber_2) ){
    alert(+(inputNumber_2) + +(inputNumber_1))
}
else{
    alert("There is / are invalid number in the input(s)")
}