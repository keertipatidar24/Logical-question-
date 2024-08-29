//question n0[1]

 const prompt=require("prompt-sync")();
// let n=parseInt(prompt("enter the value of n: "));
// array = [];
// for( i = 0 ; i<n; i++){
//     let num=(prompt(`enter the num: $(i+1)`));
//     array[i] = num;
// }
// for(i = 0; i<n; i++){
//     console.log(array[i]);
// }

//question n0[2]

//Take an array from the user as input and reverse it before
 //printing it to the user.

// let n=parseInt(prompt("enter the value of n: "));
// a = [];
// for(i=0; i<n; i++){
//     num=parseFloat(prompt(`enter the num: $(i+1) `));
//     a[i] = num;
// }
// let j = 0;
// for(i = n-1 ; i>=n/2; i--){
//     B = a[i];
//     a[i] = a[j];
//     a[j] = B;
//     j++;

// }
// for(i = 0; i<=n;i++){
//     console.log(a[i]);
// }

// QUESTION NO [3]
// Take an array from the user as input and print the mean, median, and mode
//  of the array 
// let n=parseInt(prompt("enter the value of n: "));
// let a = [];
// for( i = 0; i<n; i++){
//     let num= parseInt(prompt(`enter the num: $(i+1) `));
//     a[i] = num;
// }
// let sum = 0;
// for(i = 0; i<n; i++){
//     sum = sum + a[i];
// }
// let mean = sum/n;
// for(i = 0; i<n-1; i++){
//     for(j = 0; j<n-i-1; j++){
//         if(a[j]>a[j+1]){
//             T = a[j];
//             a[j]=a[j+1];
//             a[j+1]=T;
//         }
//     }
// }
// if(n%2==0){
//     M = a[n/2-1] + a[n/2]/2;
// }else{
//     M = a[(n+1)/2];
// }
// let mode = a[0];
// let mc = 0;
// for(i = 0;i<n-1;i++){
//     let c= 0;
//     for( j = 0;j<n; j++){
//         if(a[i]===a[j+1]){
//             c++;
//         }
//     }
//     if(c>mc){
//         mc=c;
//         mode = a[i];
//     }else{
//         i++;
//     }
// }
// console.log(mean,M,mode);

// question no[3] doubt//?
// Take an array of size N and a number K from the user as input, and
//  print the elements of an array in a rotated manner with a gap of K.
//   Eg, let us say the array is - 3, 6, 7, 5, 10. And the value of k = 3. 
//   The output should be - 7, 3, 10, 6, 5. If k = 2, the output should be - 6, 5, 3, 10, 7

// let n =parseInt(prompt("enter the value of n: "));
// let k=parseInt(prompt("enter the value of k: "));
// var a = [];
// for(let i=0;i<n;i++){
//     let num = parseInt(prompt(`enter the num: $(i+1) `));
//     a[i] =num;
// }
// let c = 1;
// let i = 0;
// let j = 1;
// while( j<=n) {
//     if(a[i]!=a){
//         if(c==k){
//             console.log(a[i]);
//             j++;
//             c = 1;
//             a[i] = a; 
//             i++;
//             i = i%n;      
//         }else{ c++ }
//     }
// }

//question no[4];
//take an array from the user as input and find duplicate elements in an array.

// let n=parseInt(prompt("enter the value of n: "));
//  let a = [];
// for( i =0; i<n; i++){
//     let num = parseInt(prompt(`enter the num: $(i+1)`));
//     a[i]=num;
// }

// for(i = 0; i<n-1;i++){
//     let c= 0;
//     for(j=i+1; j<n;j++){
//         if(a[i]==a[j]){
//             c++;
//         }
//     }
//     if(c>0){
//         console.log(a[i]);
//     }
//  }

//question no[5]
// Given an unsorted array of size N that contains only non-negative integers, 
// find a contiguous subarray that adds to a given number S. In case of multiple 
// subarrays, return the subarray which comes first on moving from left to right. 
// Let us say the array is - 3, 6, 7, 5, 10. And the value of S = 12. 
// The output should be - 7, 5

// let n=parseInt(prompt("enter the value of n: "));
// a = [];
// for(i = 0; i<n; i++){
//     let num = parseFloat(prompt(`enter the num: $(i +1)`));
//     a[i] = num;
// }
// let s=parseInt(prompt("enter the s: "));
// let j = 0;
// let sum = 0;
// for(i = 0; i<n; i++){
//     sum = sum + a[i];
//     while (sum > s && j<=i){
//         sum = sum - a[j];
//         j++;
//     }
//     if(sum ==s){
//         console.log("contiguous subarray that adds to a given number S");
//         for(p = j;p<=i;p++){
//             console.log(a[p]);
//         }
//           break;
//     }
       
// }

//question no.[6]
//take two sorted arrays from the user as input and find the Union and Intersection of the arrays

// let n=parseInt(prompt("enter the value of n: "));
// let m=parseInt(prompt("enter the value of m : "));
// let a = [];
// let b = [];
// let u = [];
// let I = [];
// for(i = 0; i<n; i++){
//     let num = parseFloat(prompt(`enter the value of num:$(i+1)`));
//     a[i] = num;
// }
// for(i = 0 ;i<n; i++){
//     let num = parseFloat(prompt(`enter the value of num: $(i +1) `));
//     b[i] = num ;
// }let k = 0;
// for( i = 0; i<m; i++){
//     u[k] = a[i];
//     k++;
// }
// let p = 0;
// for( j = 0; j<n; j++){
//     let c = 1;
//     for(i = 0; i<m; i++){
//         if(b[j]==a[i]){
//             c = 0;
//             I[p] = b[j];
//             p++;
//         }
//     }
//     if( c==1){
//         u[k] = b[j];
//         k++;
//     }
    
// }
// console.log("Array u:");
// console.log(u);

// console.log("Array I:");
// console.log(I);

//question no[7]
//Take a sorted array from the user as input and find a number using Binary Search the array
// let n=parseInt(prompt("enter the n:"));
// let a = [];
// for( i =0; i<n; i++){
//     let num = parseFloat(prompt(`enter the num: $(i+1)`));
//     a[i] = num;
// }
// a.sort((a, b) => a - b);
// let D=parseInt(prompt("enter the D:"));
// let l = 0;
// let r = n -1;
// while(l<=r){
//     mid = Math.floor(l+r)/2;
//     if(D ==a[mid]){
//         console.log(a[mid]);
//         break;
//     }else if(D<a[mid]){
//         r = mid - 1;

//     }else{
//     l = mid + 1}
// }
// if(l>r){
//    console.log("not")
// }
//question no[8]
// Learn these sorting algorithms and apply them to an unsorted array:

//     Selection Sort 
// let n =parseInt (prompt("enter the n: "));
// a = [];
// for( i = 0; i<n; i++){
//     let num =parseFloat(prompt(`enter the num: $(i +1)`));
//     a[i] = num;
// }
// for(i = 0; i<n-1;i++){
//     min = i;
//     for(j = i+1; j<n; j++){
//         if(a[j]<a[min]){
//             min = j;
//         }
//     }
//     if(min !=i){
//         t = a[i];
//         a[i] = a[min];
//         a[min] = t;
//     }
// }
// for(i = 0; i<n; i++){
//     console.log(a[i]);
// }

// Learn these sorting algorithms and apply them to an unsorted array:
// Insertion Sort

// let n= parseInt(prompt("enter the n: "));
// a = [];
// for(i =0; i<n; i++){
//     let num = parseFloat(prompt(`enter the num :$(i +1)`));
//     a[i] = num;
// }
// for( i = 1; i<n; i++){
//     temp = a[i];
//     let j = i-1; 
//     while(  j>=0 && a[j]>temp ){
//          a[j+1]=a[j];
//          j--;
//     }
//     a[j+1] = temp;

// }//console.log(stord)
// for( i =0; i<n;i++){
//     console.log(a[i]);
// }

// Bubble Sort 
// let  n=parseInt(prompt("enter the n: "));
// a = [];
// for(i = 0; i<n; i++){
//     let num=parseFloat(prompt(`enter the num: $(i +1)`));
//     a [i] = num;
// }
// for(i = 0; i<n-1; i++){
//     let flag = 0;
//     for(j = 0; j<n-i-1; j++){
//         if(a[j]>a[j+1]){
//             temp = a[j];
//             a[j]=a[j+1];
//             a[j+1]=temp;
//             flag = 1;
//         }
//     }
//     if(flag==0){
//         console.log("array is sorted");
//         break;
//     }
// }
// for(i = 0; i<n; i++){
//     console.log(a[i]);
// }
//question no [9]
// Read here how to construct a magic square of odd numbers and then
//  write a program to input an odd number and print the corresponding magic square.

// let n=parseInt(prompt("enter the num : "));
// let a = [];
// for(let i = 0; i<n; i++){
//     a[i] = new Array(n).fill(0);
// }
// let i = n-1;
// let j = Math.floor(n/2);
// let c = 1;
// while(c<=n*n){
//     a[i][j] = c;
//     i++;
//     j--;
//     if(c%n==0){
//         i = i-2;
//         j = j+1;
//         c++
//     }
//     else if(i==n){
//         i = 0;
//         c++;
    
//     }
//     else if(j==-1){
//         j = n-1;
//         c++;
//     }
//      else{
//         c++;
//     }
// }
// for(i = 0; i<n; i++){
//     line = '';
//     for(j = 0; j<n; j++){
//         line+= a[i][j]+' '
//     }
//     console.log(line.trim());
// }


