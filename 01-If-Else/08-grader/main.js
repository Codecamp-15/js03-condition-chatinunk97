let p = prompt("Input your score");

// Input Validation

if (p === null || p.trim() === '' || isNaN(p)) {
    alert('Invalid Number');
} 
else if (p >= 80 && p <=100){
    alert("Your score is " + p + " and you got an A")
}
else if(p >=70 && p<=79){
    alert("Your score is " + p + " and you got an B")
}
else if(p >=60 && p<=69){
    alert("Your score is " + p + " and you got an C")
}
else if(p >=50 && p<=59){
    alert("Your score is " + p + " and you got an D")
}
else if(p<50 && p>=0){
    alert("Your score is " + p + " and you got an F")
}
else{
    alert("It's a invalid input Please try again")
}