// Write a JavaScript function that checks if a given string is a palindrome.
//  A palindrome is a word, phrase, number, or other sequence of characters 
// //  that reads the same forward and backward (ignoring spaces, punctuation, and capitalization)

// const prompt = require("prompt-sync")();

// function isPalindrome(str) {
//     // Convert to lowercase and remove non-alphanumeric characters
//     const originalString = str.toLowerCase();
//     // Reverse the cleaned string
//     const reverseString = originalString.split('').reverse().join('');
//     // Check if the cleaned string is equal to the reversed string
//     return originalString === reverseString;
// }

// const userInput = prompt("Enter the input: ");
// const result = isPalindrome(userInput);

// // console.log(`Is the input a palindrome? ${result}`);

// Create a JavaScript function that calculates the factorial of a given number. 
// The factorial of a number n (denoted as n!) is the product of all positive integers 
// less than or equal to n. For example, the factorial of 5 is 5!=5×4×3×2×1=120.

// const prompt = require("prompt-sync")();
// function factorial(n){
// let result = 1;
// for(i = n; i>0; i--){
//     result *= i;
// }
// return result;
// }
// const n = parseInt(prompt("enter the n: "));
// const result= factorial(n);
// console.log(result);
//Question 1: Find the Second Largest Number in an Array

//Write a JavaScript function that takes an array of numbers and returns the second largest number in the array.

// const prompt= require("prompt-sync")();
// function secondlarge(n){
//     let a = [];
// for( i = 0; i<n; i++){
//     const num = parseFloat(prompt("enter the num: "));
//     a[i] = num;

// }
// let max = a[0];
// let smax = 0;
// for( i = 0; i<n-1; i++){
//     if(a[i+1]>a[i]){
//         max = a[i+1];
//         smax = a[i];
//     }
// }
// return smax;
// }
// const n = parseInt(prompt("enter the n: "));
// const smax = secondlarge(n);
// console.log(smax);

// Write a JavaScript function that takes an array of strings and groups them into anagrams. 
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.
// function groupAnagrams(strs) {
//     // Create an object to hold our groups of anagrams
//     const anagrams = {};

//     // Loop through each word in the input array
//     for (let str of strs) {
//         // Sort the letters of the word
//         const sortedStr = str.split('').sort().join('');

//         // If the sorted word is not a key in our object, add it with an empty array
//         if (!anagrams[sortedStr]) {
//             anagrams[sortedStr] = [];
//         }

//         // Add the original word to the array for this sorted key
//         anagrams[sortedStr].push(str);
//     }

//     // Return all the values (arrays of anagrams) from our object
//     return Object.values(anagrams);
// }

// // Example usage:
// const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(groupAnagrams(words));
// // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// Write a JavaScript function that takes an array of elements and returns the most frequent element in the array.
//  If there are multiple elements with the same highest frequency, return any one of them.


// const prompt = require("prompt-sync")();

// function frequent(arrLength) {
//     let a = [];
//     for (let i = 0; i < arrLength; i++) {
//         let num = parseFloat(prompt("Enter the num: "));
//         a[i] = num;
//     }

//     let mostFrequent = null;
//     let maxCount = 0;

//     for (let i = 0; i < a.length; i++) {
//         let c = 0;
//         for (let j = 0; j < a.length; j++) {
//             if (a[i] === a[j]) {
//                 c++;
//             }
//         }
//         if (c > maxCount) {
//             maxCount = c;
//             mostFrequent = a[i];
//         }
//     }

//     return mostFrequent;
// }

// const arrLength = parseInt(prompt("Enter the number of elements: "));
// const result = frequent(arrLength);
// console.log(result);


// function countvowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char ==="a" || char ==="e"|| char ==="i" ||char=="o" || char=="u"){
//           count++; 
//         }
//     }
//     console.log(count);
//     return count;
// }
// const count = countvowels("apnacollage");
// let array = [2,3,4,5];
// array.forEach((array) => {
//     console.log(array*array);
// });









































