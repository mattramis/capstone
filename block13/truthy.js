value = "i am a string"; // change this value to test different cases

// if typing "i am a string"
if (value === "i am a string") {
  console.log(true);
  // if typing false, null, undefined, or 0
} else if (value === "false") {
  console.log("The boolean value false is falsy");
} else if (value === "null") {
  console.log("The null value is falsy");
} else if (value === "undefined") {
  console.log("undefined is falsy");
} else if (value === "0") {
  console.log("The number 0 is falsy (the only falsy number)");
} else if (value === "") {
  console.log("The empty string is falsy (the only falsy string)");
  // if typing anything else
} else {
  console.log("Unknown value");
}
