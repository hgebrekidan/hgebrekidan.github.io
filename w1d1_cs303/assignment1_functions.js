
// 1. Define a function maxOfThree() that takes three numbers as arguments and returns the 
// largest of them. 
/**
 * 
 * @param {Number} num1 first number to compared
 * @param {Number} num2 second number to compared
 * @param {Number} num3 third number to be compared
 * @return {Number} maximum number
 */
function maxOfThree(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            return num1;
        }
    } else if (num2 > num1) {
        if (num2 > num3) {
            return num2;
        }
    }
    return num3;
}
// console.log(maxOfThree(1, 2, 3));

// 2. Define a function sum() and a function multiply() that sums and multiplies (respectively) 
// all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and 
// multiply([1,2,3,4]) should return 24. 
/**
 * 
 * @param {Number} array array of numbers to be summed up
 * @return {Number} summation of the array elements
 */
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
// console.log(sum([1, 2, 3, 4, 5]));
/**
 * 
 * @param {Number} array array of numbers to multiplied
 * @return {Number} result of multiplication of all elements 
 */
function multiply(array) {
    let result = 1;
    for (let i = 0; i < array.length; i++) {
        result *= array[i];
    }
    return result;
}
// console.log(multiply([1, 2, 3, 4, 5]));
// 3. Write a function findLongestWord() that takes an array of words and returns the length of 
// the longest one. 
/**
 * 
 * @param {String} array Strings of array to be compared
 * @return {String} longest string from the array
 */
function findLongestWord(array){
    let longest=array[0];
    for(let i=0;i<array.length;i++){
        if(array[i].length>longest.length){
            longest=array[i];
        }
    }
    return longest;
}
//  console.log(findLongestWord(["this", "is", "a word with spaces", "test", "longest"]));
// function findLongestWord(str) {
//     str = str.split(" ");
//     let longest = str[0].length;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].length > longest) {
//             longest = str[i].length;
//         }
//     }
//     return longest;
// }
// console.log(findLongestWord("This is Maharishi's Univesity in Fairfield Iowa"));
/*
//4. Arrays have a reverse method that changes the array by inverting the order in which its elements 
appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, 
reverseArray, takes an array as argument and produces a new array that has the same elements in 
the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it 
modifies the array given as argument by reversing its elements. Neither may use the standard reverse 
method.
*/
/**
 * 
 * @param {Number} array array of numbers to be reversed
 * @return {Number} reversed version of the array
 */
function reverseArray(array) {
    let reversed = [];
    for (let i = 0; i < array.length; i++) {
        reversed[reversed.length] = array[array.length - 1 - i];
    }

    return reversed;
}
// console.log(reverseArray([1, 2, 3, 4, 5]));
/**
 * 
 * @param {Number} array array of numbers to be reversed
 * @return {Number} reversed version of the array 
 */
function reverseArrayInPlace(array) {
     
    
    for (let i = 0; i < Math.floor(array.length/2); i++) {
        let copy = array[i];
        array[i]=array[array.length-1-i];
        array[array.length-1-i]=copy;
    }
    
    return array;
}
// console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
// inplace reverse using splice method
// function reverseInplace(array){
    
//     let arrLength = array.length;
//     for (i = 0; i < arrLength; i++) {
//         array.splice(i, 0, array.pop());
//     }
// console.log(array);
//     return array;
// }

// console.log(reverseInplace([1,2,3,4,5]));




/*
//5. Write a function, scoreExams, that takes an array of arrays of student answers and an array of 
the correct answers. It should compare each student’s answers against the correct answers and 
return an array holding the scores of each student. The score for each student is a count of the 
number of correct answers (i.e., matches with the key of correct answers). For example
const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
const correctAnswers = [3, 1, 2];
scoreExams(studentAnswers, correctAnswers)); --> [2, 2, 2]
*/
/**
 * 
 * @param {Number} array arrays of an array students answers to be checked 
 * @param {Number} correctAnswers arrays of correct answers
 * @return {Number} array of counts of correct answers 
 */
function scoreExams(array, correctAnswers) {
    let studentsCorrectAnswers = [];

    for (let i = 0; i < array.length; i++) {
        let correctCount = 0;
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === correctAnswers[j]) {
                correctCount++;

            }
        }
        studentsCorrectAnswers.push(correctCount);
    }
    return studentsCorrectAnswers;
}

// console.log(scoreExams([[1, 1, 2], [2, 1, 2], [3, 1, 3]], [3, 1, 2]));


module.exports = {
    maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams
}