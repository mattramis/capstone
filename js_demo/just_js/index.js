// this is a Comment

/* 
    This is a 
    multiline comment
*/

const obj = {
  firstName: "Matt",
  lastName: "Ramis",
};

console.log(obj);
console.log(obj.firstName);
console.log(obj.lastName);

console.log(
  " Hello my first name is " +
    obj.firstName +
    " and my lst name is " +
    obj.lastName
);

console.log(
  `Hello my first name is ${obj.firstName} and my last name is ${obj.lastName}`
);

let bool = false;
console.log(bool);
bool = true;
console.log(bool);

const number = 12;
const numberTwo = 2;
const add = numberTwo + number;
console.log(add);

const multiply = numberTwo + number;
console.log(multiply);

const divide = number / numberTwo;
console.log(divide);

const mod = (number % numberTwo) + 3;
console.log(mod);

console.log(7 == "7");
console.log(7 === "7");

console.log(7 != "7");
console.log(7 !== "7");

console.log(7 <= "7");
console.log(7 < "7");

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || false);
console.log(false || false);
