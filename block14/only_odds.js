// function array for the odd numbers
function getOddNumbers(arr) {
  const oddNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      // Check if the number is odd

      oddNumbers.push(arr[i]);
      // If it's odd, push it to the oddNumbers array
    }
  }

  if (oddNumbers.length === 1) {
    return [oddNumbers[0]];
  } else {
    return oddNumbers;
  }
}

// proof of function
const numbers = [70, 42, 55, 81, 21, 91, 34];
const oddNumbers = getOddNumbers(numbers);
console.log(oddNumbers);
