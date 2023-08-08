/////////// In-Class Method /////////////////
let x = prompt("No1");
let y = prompt("No2");
let z = prompt("No3");
if (
  x == null ||
  x.trim() == "" ||
  isNaN(x) ||
  y == null ||
  y.trim() == "" ||
  isNaN(y) ||
  z == null ||
  z.trim() == "" ||
  isNaN(z)
) {
  alert("There are invalid value inserted Please try again");
} else {
  let max;
  let mid;
  let min;
  if (x >= y && x >= z) {
    max = x;
    if (y >= z) {
      mid = y;
      min = z;
    } else {
      mid = z;
      min = y;
    }
  } else if (y >= x && y >= z) {
    max = y;
    if (x >= z) {
      mid = x;
      min = z;
    } else {
      mid = z;
      min = x;
    }
  } else {
    max = z;
    if (y >= x) {
      mid = y;
      min = x;
    } else {
      mid = x;
      min = y;
    }
  }

  alert(max + " " + mid + " " + min);
}

//////////// Homework ////////////////////
////It's longer cause this method puts numbers in to slot and
/// compare with the other input so it creates many loops //
// let first_number_slot = -Infinity;
// let second_number_slot = -Infinity;
// let third_number_slot = -Infinity;

// let first_number = prompt("1st Number");
// let second_number = prompt("2nd Number");
// let third_number = prompt("3rd Number");

// if (
//   first_number == null || first_number.trim() == "" || isNaN(first_number) ||
//   second_number == null || second_number.trim() == "" || isNaN(second_number) ||
//   third_number == null || third_number.trim() == "" || isNaN(third_number)
// ) {
//   alert("There are invalid value inserted Please try again")
// }

//////////// First Method Does not support duplicate inputs////////////

// Changing prompt string to Numbers
// Can't change before cause it will not go through .trim()

// Deciding the first slot
// else {
//   first_number = +first_number;
//   second_number = +second_number;
//   third_number = +third_number;

//   if (first_number > second_number && first_number > third_number) {
//     first_number_slot = first_number;
//   } else if (second_number > third_number) {
//     first_number_slot = second_number;
//   }
//   else if(third_number > second_number){
//     first_number_slot = third_number;
//   }
//   // Deciding the second slot
//   if (first_number > second_number_slot && first_number_slot != first_number) {
//     second_number_slot = first_number;
//   }
//   if (second_number > second_number_slot && first_number_slot != second_number) {
//     second_number_slot = second_number;
//   }
//   if (third_number > second_number_slot && first_number_slot != third_number) {
//     second_number_slot = third_number;
//   }

//   // Deciding the third slot
//   if (first_number != first_number_slot && first_number != second_number_slot) {
//     third_number_slot = first_number;
//   }
//   else if (second_number != first_number_slot && second_number != second_number_slot) {
//     third_number_slot = second_number;
//   }
//   else if (third_number != first_number_slot && third_number != second_number_slot) {
//     third_number_slot = third_number;
//   }

//   alert(
//     first_number_slot + "  ----  " + second_number_slot + "  ----  " + third_number_slot
//   );
// }

//////////// Second Method with for loop + Array, support duplicate input ////////////

// else {
//   var arrayNumber = [];
//   arrayNumber.push(+first_number, +second_number, +third_number)

//   // Deciding the first slot
//   for (let i = 0; i < arrayNumber.length; i++) {
//     if (arrayNumber[i] > first_number_slot) {
//       first_number_slot = arrayNumber[i]
//     }
//   }
//   let index = arrayNumber.indexOf(first_number_slot)
//   delete arrayNumber[index]

//   for (let i = 0; i < arrayNumber.length; i++) {
//     if (arrayNumber[i] > second_number_slot) {
//       second_number_slot = arrayNumber[i]
//     }
//   }
//   index = arrayNumber.indexOf(second_number_slot)
//   delete arrayNumber[index]

//   for (let i = 0; i < arrayNumber.length; i++) {
//     if (arrayNumber[i] > third_number_slot) {
//       third_number_slot = arrayNumber[i]
//     }
//   }
//   alert(first_number_slot + "  ----  " + second_number_slot + "  ----  " + third_number_slot)
// }
