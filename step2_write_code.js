// 1) Sum to Zero
 // Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.
function addToZero(array) {
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (i !== j) {
                if (array[i] + array[j] === 0) {
                return false
                } 
            }
        }
    }
    return true
}

// let arrayTrue = [1, 2, 3, -2];
// let arrayFalse = [1, 2, 3];
// console.log(addToZero(arrayTrue));
// console.log(addToZero(arrayFalse));

// RUNTIME = O(n2)

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
function uniqueChar(str) {
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++) {
            if (str[i] == str[j])
            return false;
        }
    }
    return true;
}

// console.log(uniqueChar('Monday'))
// console.log(uniqueChar('Moonday'))

// RUNTIME = O(n2)

// 3) Pangram
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(str) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (i = 0; i < alphabet.length; i++) {
        const curLetter = alphabet[i];
        if (!str.includes(curLetter)) {
            return false
        }
    }
    return true
}

//console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

// RUNTIME = O(n)

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(array) {
    if (!array.length) { return 0; }
    let longestWordLength = array[0].length;
    for (i = 1; i < array.length; i++) {
       longestWordLength = Math.max(array[i].length, longestWordLength)
    }
    return longestWordLength
};

//const listOfWords = ['hi', 'hello', 'hola', 'bonjour', 'konnichiwa']
// const listOfWords = ['']
//console.log(findLongestWord(listOfWords))

// RUNTIME = O(n)