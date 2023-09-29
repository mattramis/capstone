// 1. Create a message for the user
const message =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// 2. Send the message to the console to confirm
console.log(message);

// 3. Create three variables with different calculations
const combo1 = 8 + 2;
const combo2 = 80 - 40;
const combo3 = 3 * 13;

// 4. List each combination to the console
console.log(combo1);
console.log(combo2);
console.log(combo3);

// 5. Create full combo for the alert text
const formattedText = `${message}\n${combo1} - ${combo2} - ${combo3}`;

// 6. Send the formatted text to the console
console.log(formattedText);

// 7. Display the formatted text in a popup alert
alert(formattedText);
