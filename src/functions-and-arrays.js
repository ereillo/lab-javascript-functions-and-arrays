// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {return num1;}
  if (num1 < num2) {return num2;}
  else {return num1}
}

console.log(maxOfTwoNumbers (2,2))



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }

  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

const longestWord = findLongestWord(words);
console.log(longestWord);


//Iteration #3//: Calculate the sum
function sumNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const totalSum = sumNumbers(numbers);
console.log(totalSum);


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbers = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  const average = sum / numbers.length; //PARA ESTE PASO NECESITÉ AYUDA. NO LLEGUÉ A ESTA CONCLUSIÓN
  return average;
}

const average = averageNumbers(numbers);
console.log(average);


// // Level 2: Array of strings
// const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const words = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(words) {
  if (words.length === 0) {
    return null;
  }

  let totalLength = 0;
  for (let i = 0; i < words.length; i++) {
    totalLength += words[i].length;
  }

  const averageLength = totalLength / words.length;
  return averageLength;
}

const averageLength = averageWordLength(words);
console.log(averageLength);



// // Iteration #5: Unique arrays

//ESTE FUI INCAPAZ DE TERMINARLO
function uniquifyArray(words) {
  const uniqueArray = [];

  for (let i = 0; i < words.length; i++) {
    if (uniqueArray)
  }
}

// Iteration #6: Find elements

//ESTE SÉ QUE ESTOY CERCA DE LA SOLUCIÓN PERO NO SÉ QUÉ FALLO ESTOY TENIENDO
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist(words, wordToFind) {for (let i = 0; i < words.length; i++) {
  if (words[i] === wordToFind) {
    return true;
  }
}

return false;

}

const wordToFind = 'matter';
const wordExists = doesWordExist(words, wordToFind);
console.log(wordExists);


// Iteration #7: C
const words = [
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
];
function howManyTimes(words, wordToSearch) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === wordToSearch) {
      count++;
    }
  }

  return count;
}

const wordToSearch = 'starting';
const occurrences = howManyTimes(words, wordToSearch);
console.log(occurrences);