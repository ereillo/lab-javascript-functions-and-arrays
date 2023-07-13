// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {return num1;}
  if (num1 < num2) {return num2;}
  else {return num1}
}

console.log(maxOfTwoNumbers (2,2))



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord (words) {
  if (words.length === 0) {
    return null
  }

  let longestWord = words[0];

  for (let i = 1; i < words.longth; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
  }
   return longestWord
} }

const longestWord = findLongestWord(words);
console.log(longestWord);


//Iteration #3//: Calculate the sum



// // Iteration #4: Calculate the average
// // Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  
  return average;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const average = calculateAverage(numbers);
console.log(average);


// // Level 2: Array of strings
// const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

// function averageWordLength() { }


// // Iteration #5: Unique arrays
// const wordsUnique = [
//   'crab',
//   'poison',
//   'contagious',
//   'simple',
//   'bring',
//   'sharp',
//   'playground',
//   'poison',
//   'communion',
//   'simple',
//   'bring'
// ];

// function uniquifyArray() {}



// // Iteration #6: Find elements
// const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// function doesWordExist() {}



// // Iteration #7: C

function howManyTimes(words, wordToFind) {
  let count = 0

  for (let i = 0; i < words.length; i++) {
    if (words[i] === wordToFind) {count++}
  }
  return count;
}

const wordsCount = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ]

const wordToFind = 'matter';
const occurrences = howManyTimes(words, wordToFearch);
console.log(occurrences);