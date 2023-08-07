p = prompt("Please input your score")

grade = 
(p >= 80) ? "A" :
(p>=70 && p<=79) ? "B":
(p>=60 && p<=69) ? "C":
(p>=50 && p<=59) ? "D":
(p<50) ? "F": "Invalid Input"
alert(grade);