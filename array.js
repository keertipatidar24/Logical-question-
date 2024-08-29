//QUESTION NO .1

// Write a program to print all the numbers from the given array using a loop. 
//L = {23, 45, 32, 25, 46,33, 71, 90}

// const prompt =require("prompt-sync")();
// let array = [];
// let n=parseInt(prompt("eneter the n: "));
// for(i = 0; i <n; i++){
//     let number=parseFloat(prompt(`enter the number $(i+1)`));
//     array[i]=number;
// }
// for(i=0; i<n; i++){
//     console.log(array[i]);
// }

 
// QUESTION NO [2] Write a program to create an array of natural numbers till 20 and print it.

// const prompt =require("prompt-sync")();
// let array = [];
// let n=parseInt(prompt("enter the value of n: "));
// let j = 1;
// for(i=0; i<n;i++){
//     array[i]=j;
//     j++;
// }
// for(i=0; i<n; i++){
//     console.log(array[i]);
// }
11
 
 	 
 
// QUESTION NO[3] Write a program to reverse the array and print the reversed array.

// Test Case1:
// Input:
// 23 45 32 25 46 33 71 90
// Output:
// 90
// 71
// 33
// 46
// 25
// 32
// 45
// 23


// const prompt =require("prompt-sync")();
// array = [];
// let n=parseInt(prompt("enter the n: "));
// for(i = 0; i<n; i++){
//     let number=parseFloat(prompt(`enter the number $(i+1)`));
//     array[i]=number;

// }
// let j = n-1;
// for(i = 0;i<n/2; i++){
//     t=array[i];
//     array[i]=array[j];
//     array[j]=t;
//     j--;
// }
// for(i = 0; i<n;i++){
//     console.log(array[i]);
// }

// QUESTION NO [4] Write a program to take size of array, array and target as
 //input from the user and check whether the target exists in this array or not.

// Test Case1:
// Input:
// 7
// 1 2 3 4 5 6 7
// 3
// Output:
// Yes

// Test Case2:
// Input:
// 8
// Output:
// No

// const prompt =require("prompt-sync")();
// array = [];
// let n=parseInt(prompt("enter the value of n: "));
// for(i=0;i<n;i++){
//     let number=parseFloat(prompt(`enter the number $(i+1)`));
//     array[i]=number;
// }
// let j=parseInt(prompt("enter the value of j: "));
// array.indexOF = j;
// for(i=0; i<n;i++){
//     if(array[i]==j){
//         console.log("yes exists");
//     }elseconsole.log("not");
//}
//QUESTION NO [5]
// Write a program to print the sum of all the odd numbers and even numbers in the given array.
// Note: In the output, you should print odd numbers sum and even numbers sum in this order only.

// Test Case1:
// Input:
// 23 45 32 25 46 33 71 90
// Output:
// 197
// 168

// const prompt =require("prompt-sync")();
// array = [];
// let n=parseInt(prompt("enter the value of n: "));
// for(i = 0; i<n; i++){
//     let number=parseFloat(prompt(`enter the value ofnumber $(i+1)`));
//     array[i]=number;
// }
// let sum=0; sum1=0;
// for( i = 0; i<n; i++){
//     if(array[i]%2==0){
//         sum=sum+array[i];
//     }else sum1=sum1+array[i];
// }
// console.log(sum1,"odd no");
//console.log(sum, "even no");

//QUESTION NO[6]
// Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.

// Test Case 1:
// Input:
// 5
// 2 4 2 6 3
// Output:
// 2

// Test Case 2:
// Input:
// 6
// 2 4 6 3 3 2
// Output:
// 3 2

// const prompt =require("prompt-sync")();
// let array = [];
// let n=parseInt(prompt("enter the value of n:"));
// for(i=0; i<n;i++){
//     let number=parseFloat(prompt(`enter the value of number $(i+1)`));
//     array[i]=number;
// }
// for(i=0;i<n-1; i++){
//     let c=0;
//     for(j=i+1; j<n; j++){
//         if(array[i]==array[j]){
//             c++;   
//         }
//     }if(c>0){
//         console.log(array[i]);
//     }
// }

 
 //QUESTION NO[7]	 
 
// Write a program to take N numbers from the user and print the frequency of every number.

// Test Case 1:
// Input:
// 6
// 2 4 2 6 3 6
// Output:
// 2 - 2
// 4 - 1
// 6 - 2
// 3 - 1


const prompt =require("prompt-sync")();
let n=parseInt(prompt("enter the value of n: "));
let array=[];
for(i=0; i<n; i++){
    //let element = parseInt(prompt("enter element at index " + i +": "));
     let number=parseFloat(prompt("enter the value of number $(i+1):"));
     array[i]=number;
}
for( i=0; i<n; i++){
    let c = 0;
    for(let j=0; j<i; j++){
        if(array[i]===array[j]){
            c++;
        }
    }
    if(c>0){
        continue; //skip printing frequencyif it has already been printed. 
    }
    for( let j=0; j<n; j++){
        if(array[i]===array[j]){
            c++;
        }
    }
    console.log(array[i] +" = " + c); 
}
// //QUESTION NO [8]
// // Write a program to take value N from the user and print the following pattern based on the user input.
// // array = [2, 3, 5, 2, 1]
// // >>                        
// // >>>                
// // >>>>>
// // >>                        
// // >
// // const prompt =require("prompt-sync")();
// // let n=parseInt(prompt("enter the value of n: "));
// // let a = [];
// // for(i=0; i<n; i++){
// //     let num=parseFloat(prompt("enter the value of num $(i+1): "));
// //     a[i] = num;
// // }
// // for( i=0; i<n; i++){
// //     for( j =0; j<a[i]; j++){
// //         console.log(">");
// //     }console.log("\n");
// // }

//  function printPattern(N, array){
//     for(let i =0; i<N; i++){
//         let line = '';
//         for( let j=0; j<array[i]; j++){
//             line += '>';
//         }
//         console.log(line);
//     }

// }
// const prompt =require("prompt-sync")();
// let N =parseInt(prompt("enter the value of N: "));
// let array = [2, 3, 4, 5, 6];
// printPattern(N,array);

//QUESTION NO[9]
// Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of size M+N (Do not use sorting)

// Test Case1:
// Input:
// 1 2 5 6
// 3 4 7 9
// Output:
// 1 2 3 4 5 6 7 9


//question n0[10]
// const prompt = require("prompt-sync")();

// let array = [];
// let array1 = [];

// let n = parseInt(prompt("Enter the number of elements in the first array: "));
// let m = parseInt(prompt("Enter the number of elements in the second array: "));

// // Taking input for the first array
// for (let i = 0; i < n; i++) {
//     let num = parseFloat(prompt(`Enter the value of num ${i + 1}: `));
//     array.push(num);
// }

// // Taking input for the second array
// for (let j = 0; j < m; j++) {
//     let number = parseFloat(prompt(`Enter the value of number ${j + 1}: `));
//     array1.push(number);
// }

// let mergedArray = [];
// let i = 0, j = 0;

// // Merging the two sorted arrays
// while (i < n && j < m) {
//     if (array[i] < array1[j]) {
//         mergedArray.push(array[i]);
//         i++;
        
//     } else {
//         mergedArray.push(array1[j]);
//         j++;
//     }
// }

// // Adding remaining elements of the first array, if any
// while (i < n) {
//     mergedArray.push(array[i]);
//     i++;
// }

// // Adding remaining elements of the second array, if any
// while (j < m) {
//     mergedArray.push(array1[j]);

//     j++;
// }

// console.log("Merged and sorted array:", mergedArray);












