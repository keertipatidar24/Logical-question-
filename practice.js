//Use the var keyword to create a variable called ourCampusName?
const prompt = require("prompt-sync")();
// var x = "navgurukul.org";
// //var x = "foundation";
// console.log(x);


//Use the var keyword to create a variable called myVillage?
// var myVillage = "Behrawal";
// console.log(myVillage);

// let myCampus = "navgurukul";
// let Mycampus = "NAVGURUKUL";
// console.log(myCampus);
// console.log(Mycampus);

// const my = "campus";
// const m = "CAMPUS";
// console.log(my);
// console.log(m);


// *************[DATATYPE]***************
//[string]
// let firstname = "keerti";
// console.log(typeof firstname);

//[number]
// let  x = 2345678964;
// console.log(typeof x);
//[bolean]
// let x = true;
// console.log(typeof x);

//[undefined]
// let x;
// console.log(x);

//[object]
// let x = { } ;
// console.log(typeof x);


// let x = parseInt(prompt("enter the x: "));
// let y = parseInt(prompt("enter the y: "));
// let h = parseInt(prompt("enter the h: "));

// for( i = 1; i<h; i++){
//     x+=y;
// }
// console.log(x);
 //[codechefquestion]
// let x = parseInt(prompt("enter the x: "));
// let y = parseInt(prompt("enter the y: "));
// if(x>=y*2){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// let t = parseInt(prompt("enter the t: "));
// for(i = 1; i<=t; i++){
//     let sum = 0;
//    let ai = parseInt(prompt("enter the ai: "));
//    let aj = parseInt(prompt("enter the aj: "));
//    let vi = parseInt(prompt("enter the vi: "));
//    let vj = parseInt(prompt("enter the vj: "));
//     sum = ai*vj+aj*vi;
//     console.log(sum);
// }

// function maximumSumOfAdjacentDifferences(N, K, A) {
//     // Calculate the initial sum of adjacent differences
//     let maxSum = 0;
//     for (let i = 0; i < N - 1; i++) {
//       maxSum += Math.abs(A[i] - A[i + 1]);
//     }
  
//     // Try replacing each element with the maximum or minimum allowed value
//     for (let i = 0; i < N; i++) {
//       let tempSum = 0;
//       for (let j = 0; j < N; j++) {
//         if (j === i) {
//           tempSum += Math.abs(K - A[j + 1]);
//         } else if (j === N - 1) {
//           tempSum += Math.abs(A[j] - K);
//         } else {
//           tempSum += Math.abs(A[j] - A[j + 1]);
//         }
//       }
//       maxSum = Math.max(maxSum, tempSum);
//     }
  
//     return maxSum;
//   }
  
  // Get the number of test cases
  // let testCases = parseInt(prompt("Enter the number of test cases:"));
  
  // // Iterate through the test cases
  // for (let i = 0; i < testCases; i++) {
  //   // Get the length of the array and the maximum allowed integer
  //   let inputLine = prompt("Enter the length of the array and the maximum allowed integer (separated by a space):");
  //   let [N, K] = inputLine.split(" ").map(Number);
  
  //   // Get the elements of the array
  //   let inputLine2 = prompt("Enter the elements of the array (separated by a space):");
  //   let A = inputLine2.split(" ").map(Number);
  
  //   // Call the function and output the result
  //   let maxSum = maximumSumOfAdjacentDifferences(N, K, A);
  //   console.log(maxSum);
// }
  //[practice for loop ]*********
// let n = parseInt(prompt("enter the n: "));
// for(i = 1; i<=n; i++){
//   console.log("keertipatidar");

// }
//[practice while loop]**************
// let n = parseInt(prompt("enter the n: "));
// let  i= 1; 
// while(i<= n){
//   console.log("keerti patidar");
//   i++;
// }


// let i = 20;
// do{
//   console.log(i);
//   i++;
// }
// while(i<=10);

//multiple line 
// function greet(){
//   console.log("namaste world");
// }
// greet();
// greet();
// greet();
// greet();
// greet();

// let p1 = parseInt(prompt("enter the p1: "));
// let p2 = parseInt(prompt("enter the p2: "));
// function myfunction(){
//   console.log(p1*p2)
// }
// myfunction();



// let a = parseInt(prompt("enter the a: "));
// let b = parseInt(prompt("enter the b: "));
// let c = parseInt(prompt("enter the c: "));
// function max(){
//   if(a>b){
//     max = a;
//   }
//   else{
//     max = b;
//   }
//   if(c>max){
//     max = c;
//   }
//   console.log(max);
// }
// max();

// let n = parseInt(prompt("enter the n: "))
// function evennumber(){
//   if(n%2==0){
//     console.log("even");
//   }
//   else{
//     console.log("odd");
//   }
// }
// evennumber();
// function fullname(firstname , lastname){
//   console.log(firstname+ "  " +lastname);

// }
// fullname("keerti","patidar");

// function fun(p1 , p2 , p3){
//    let total = (p1+p2+p3);
//    console.log(total);
// }
// fun(2 , 4, 6);

// function name(s1 , s2, s3, s4,s5){
//   let result = s5 - s3 + s1 + s2 *s4;
//   console.log(result);
// }
// name(3 , 5 , 8 , 1 , 3, );

// function sum(num1 , num2, num3, num4){
//   total = num1+num3+num2-num4;
//   console.log(total);
// }
// var result1 = sum(2,3,4,5);
// console.log(result1)
// var result2 = sum(1,2,1,1);
// console.log(result2);


// function large(arr){

//  let max  = a[0];
// for(i = 0; i<arr.length; i++){
//   if(a[i]>max){
//     max = a[i];
//   }
// }
// console.log(max);

// }
// let result1 = large(1,6,3,9,5)
// console.log(result1);
// let result2 = large(4,9,8,6,3)
// console.log(result2);


let (prompt("enter the string:"));
let n = parseInt(prompt("enter the n: "));
function multiply(){
  
}





