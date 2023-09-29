// change a or b to get different answers

a = -5001;
b = 51;
sum = a + b;

// else if statements to test values 50+51, 99+(-2), 0 + 101, 500 + (-500), -1000 + 0, -5 + 0
if (sum < -1000) {
  console.log(sum + " is less than -1000");
} else if (sum < 0) {
  console.log(sum + " is a negative number");
} else if (sum === 0) {
  console.log(sum + " is equal to 0");
} else if (sum > 0 && sum <= 100) {
  console.log(sum + " is larger than 0");
} else if (sum > 100) {
  console.log(sum + " is greater than 100");
  // any other sums will read
} else {
  console.log("Unknown sum");
}
