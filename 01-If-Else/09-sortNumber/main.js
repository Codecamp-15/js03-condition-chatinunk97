let first_number_slot = -Infinity;
let second_number_slot = -Infinity;
let third_number_slot = -Infinity;

let first_number = prompt("1st Number");
let second_number = prompt("2nd Number");
let third_number = prompt("3rd Number");

if(
  first_number == null || first_number.trim() == "" || isNaN(first_number) ||
  second_number == null || second_number.trim() == "" || isNaN(second_number) ||
  third_number == null || third_number.trim() == "" || isNaN(third_number) 
){
  alert("There are invalid value inserted Please try again")
}



//////////// First Method////////////

// Changing prompt string to Numbers
// Can't change before cause it will not go through .trim()
// first_number = +first_number;
// second_number = +second_number;
// third_number = +third_number;

// // Deciding the first slot
// if (first_number > second_number) {
//   first_number_slot = first_number;
// } else if (second_number > first_number) {
//   first_number_slot = second_number;
//   if (third_number > second_number) {
//     first_number_slot = third_number;
//   }
// }
// // Deciding the second slot
// if (first_number > second_number_slot && first_number_slot != first_number) {
//   second_number_slot = first_number;
// }
// if (second_number > second_number_slot && first_number_slot != second_number) {
//   second_number_slot = second_number;
// }
// if (third_number > second_number_slot && first_number_slot != third_number) {
//   second_number_slot = third_number;
// }


// // Deciding the third slot
// if (first_number != first_number_slot && first_number != second_number_slot) {
//   third_number_slot = first_number;
// }
// else if (second_number != first_number_slot && second_number != second_number_slot) {
//   third_number_slot = second_number;
// }
// else if (third_number != first_number_slot && third_number != second_number_slot) {
//   third_number_slot = third_number;
// }

// alert(
//   first_number_slot + "  ----  " + second_number_slot + "  ----  " + third_number_slot
// );



//////////// Second Method with for loop ////////////

else {
  var arrayNumber = [];
  arrayNumber.push(+first_number, +second_number, +third_number)

  // Deciding the first slot
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > first_number_slot) {
      first_number_slot = arrayNumber[i]
    }
  }
  let index = arrayNumber.indexOf(first_number_slot)
  delete arrayNumber[index]

  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > second_number_slot) {
      second_number_slot = arrayNumber[i]
    }
  }
  index = arrayNumber.indexOf(second_number_slot)
  delete arrayNumber[index]

  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > third_number_slot) {
      third_number_slot = arrayNumber[i]
    }
  }
  alert(first_number_slot + "  ----  " + second_number_slot + "  ----  " + third_number_slot)
}