let originalArray = [1, 2, 3];
let reverseArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
  reverseArray.push(originalArray[i - 1]);
}

console.log(reverseArray);
