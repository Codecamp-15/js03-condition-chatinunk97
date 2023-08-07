let p = prompt("Input your score");

// Input Validation

if (p === null || p.trim() === '' || isNaN(num)) {
    alert('Invalid Number');
} 
else if (p >= 80 && p <=100){
    alert("Your score is " + p + " and you got A")
}
else if(p >=70 && p<=79){
    alert("Your score is " + p + " and you got B")
}
else if(p >=60 && p<=69){
    alert("Your score is " + p + " and you got C")
}
else if(p >=50 && p<=59){
    alert("Your score is " + p + " and you got D")
}
else if(p<50){
    alert("Your score is " + p + " and you got F")
}
else{
    alert("It's a invalid input Please try again")
}