let word = "sammy ivy luna";
let consonantCount = 0;
let vowelCount = 0;

for (let i = 0; i < word.length; i++) {
  if (
    word[i] === "a" ||
    word[i] === "e" ||
    word[i] === "i" ||
    word[i] === "o" ||
    word[i] === "u"
  ) {
    vowelCount++;
  } else {
    consonantCount++;
  }
}

console.log(`Word: ${word}`);
console.log(`Number of consonants: ${consonantCount}`);
console.log(`Number of vowels: ${vowelCount}`);
