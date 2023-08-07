let first_number_slot = "";
let second_number_slot = "";
let third_number_slot = "";

let first_number = prompt("1st Number");
let second_number = prompt("2nd Number");
let third_number = prompt("3rd Number");

if (first_number > second_number) {
  // alert(first_number > second_number)
  first_number_slot = first_number;
} else if (second_number > first_number) {
  // alert(second_number > first_number)
  first_number_slot = second_number;
  if (third_number > second_number) {
    // alert(third_number > second_number)
    first_number_slot = third_number;
  }
}

alert(
  first_number_slot + "___ " + second_number_slot + " ___ " + third_number_slot
);
