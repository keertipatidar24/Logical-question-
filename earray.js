//question no[4]
 const prompt =require("prompt-sync")();
// let n=parseInt(prompt("enter the num: "));
// let a = [];
// for(i =0; i<n; i++){
//     let num = parseFloat(prompt(`enter the num: $(i + 1)`));
//     a[i] = num;
// }
// for( i = n-2; i>=0;i -=2){
//     console.log(a[i]);
// }
//question no[7]
// let n=parseInt(prompt("enter the num:"));
// let a = [];
// for(i=0; i<n;i++){
//     let num = parseFloat(prompt(`enter the num: $(i +1 )`));
//     a[i]=num;
// }
// let assu = 1;
// for(i = 0; i<n; i++){
//     if(a[i+1]==a[i]+1){
//         assu = 1;
//     }
//     else{
//         break;
//     }

// }
// if(assu==1){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }
//question no[8]
// let n=parseInt(prompt("enter the num: "));
// let a=[];
// for(i = 0; i<n; i++){
//     let num =parseFloat(prompt(`enter the num : $(i+1)`));
//     a[i] = num;
// }
// let s=0;
// for(i =0; i<n; i++){
//     s = s+a[i];
// }
// avg = s/n;
// console.log(s,avg);

//question no[9]
// let n=parseInt(prompt("enter the num:"));
// let a = [];
// for(i = 0; i<n; i++){
//     let num=parseFloat(prompt(`enter the num: $(i+1)`));
//     a[i] = num;
// }
// let p=parseInt(prompt("enter the num: "));
// let c = 0;
// for(i = 0; i<n; i++){
//     if (a[i] ==p){
//         c++;
//     }
// }
// console.log(c);

//question no[10]
// let n=parseInt(prompt("enter the num: "));
// a = [];
// for( i =0; i<n; i++){
//     let num=parseFloat(prompt(`enter the num: $(i+1)`));
//     a[i] = num;
// }
// let c = 0;
// let N = 0;
// for(i = 0; i<n; i++){
//     if(a[i]>0){
//         c++;
//     }else{
//         N++;
//     }
// }
// console.log(c,N);

//question no[12]
// let n=parseInt(prompt("enter the num: "));
// a = [];
// let j = 2;
// for( i=0; i<n; i++){
//     a[i] = j;
//     j+=2;
// }
// for( i=0; i<n; i++){
//     console.log(a[i]);
// }
//question no[13]
//fiest odd Number;
//question no[14]
// let n=parseInt(prompt("enter the num: "));
// let a = [];
// let  i = 0;
// for( j =1; j<=n; j++){
//     if( n%j==0){
//         a[i] = j;
//         i++;
//     }
// }   
//     for( j=0; j<i; j++){
//         console.log(a[j]);
//     }

//question no [15]
// const prompt = require("prompt-sync")();
// let n=parseInt(prompt("enter the num: "));
// let a = [];
// let p = 0;
// for(i = 1; i<=n; i++){
//     let c=0;
//     for(j =1; j<=i; j++){
//         if(i%j==0){
//             c++;
//         }
//     }
//     if(c ==2){
//         a[p]=i;
//         p++;
//     }
// }
// for(i = 0; i<p; i++){
//     console.log(a[i]);
// }

//question no[16];
//const prompt=require("prompt-sync")();
// let n=parseInt(prompt("enter the num: "));
// let a = [];
// let p = 0;
// for( i = 1; i<=n; i++){
//     let s = 0;
//     for(j = 1; j<i; j++){
//         if(i%j==0){
//             s = s+j;
//         }
//     }
//     if(s ==i){
//         a[p]=i;
//         p++;
//     }
// }
// for(i = 0; i<p; i++){
//     console.log(a[i]);
// }
//question no][18];
// let n =parseInt(prompt("enter the num: "));
// let a = [];
// let m = 0; 
// for(i = 1; i<=n; i++){
//     let p = 1;
//     for(j = 1; j<=i; j++){
//         p = p * j;
//     }
//     a[m] = p;
//     m++;
// }
// for(i = 0; i<n; i++){
//     console.log(a[i]);
// }

// question no;[19]
// let n=parseInt(prompt("enter the num: "));
// let a=[];
// for(i = 0; i<n; i++){
//     let num =parseFloat(prompt(`enter the num: $(i+1)`));
//     a[i] =num;

// }
// let c= 0;
// let e = 0;
// for(i = 0; i<n; i++ ){
//     if(a[i]%2==0){
//         c = c+1;
//     }else{
//         e = e+1;
//     }
//     console.log(c,e)
// }
//question no[23]
// let n=parseInt(prompt("enter the num: "));
// let a = [];
// for(i = 0; i<n; i++){
//     let num=parseFloat(prompt(`enter the num:$(i+1)`));
//     a[i] = num;
// }
// for(i = 0; i<n; i++){
//     for(j=0;j<n-i-1; j++){
//         if(a[j]>a[j+1]){
//             let t = a[j];
//             a[j]=a[j+1];
//             a[j+1]=t;
//         }
//     }
// }
// for(i = 0; i<n/2; i++){
//     let t = a[i];
//     a[i]=a[n-i-1];
//     a[n-i-1]=t;
//     j--;
// }
// for(i = 0; i<n; i++){
//     console.log(a[i]);
// }

//question no[24]
// let n=parseInt(prompt("enter the num: "));
// a =[];
// for( i=0; i<n; i++){
//     let num=parseFloat(prompt(`enter the num: $(i +1)`));
//     a[i] = num;
// }
// let max = a[0];
// for ( i=1; i<n; i++){
//     if(a[i]>max){
//         max = a[i];
//     }
// }console.log(max);
// 
// 1
// 2 9
// 3 8 19
// 4 7 11 14
// 5 6 12 13 15 
// let n = parseInt(prompt("Enter the num: "));
// let a = new Array(n);

// for (let i = 0; i < n; i++) {
//     line = '';
//     a[i] = new Array(n);
// }

// let k = 1;
// for (let j = 0; j < n; j++) {
//     if (j % 2 === 0) {
//         for (let i = j; i < n; i++) {
//             line += a[i][j]+'' ;
//             k++;
//         }
//     } else {
//         for (let i = n - 1; i >= j; i--) {
//             line +=a[i][j]+'';
            
//             k++;
//         }
//     }
// }

// for (let i = 0; i < n; i++) {
//     line = '';
//     for (let j = 0; j <= i; j++) {
//         line += a[i][j]+ ' ';
//         console.log(line);
//     }
// }

//questuion no[kth rotation]
// let n= parseInt(prompt("enter the num;"));
// let k=parseInt(prompt("enter the k: "));
// let a =[];
// for(i = 0; i<n; i++){
//     let num=parseFloat(prompt(`enter the num: $(i+1)`));
//     a[i] = num;
// }
// for(j = 1; j<=k;j++){
//     let t = a[0];
//     for(i = 0;i<n-1;i++){
//       a[i] = a[i+1];
//     }
//     a[i] = t;
// }
// for(i = 0; i<n; i++){
//     console.log(a[i]);
// }

//question no[anti kth rotation ]
// let n=parseInt(prompt("enter the n: "));
// let k = parseInt(prompt("enter the k: "));
// let a = [];
// for(i = 0; i<n;i++){
//     let num =parseFloat(prompt(`enter the num: $(i+1)`));
//     a[i] = num;
// }
// for( j = 1; j<=k; j++){
//     let t = a[n-1];
//     for(i = n-1; i>0; i--){
//         a[i] = a[i-1];
//     }
//     a[i] = t;
// }
// for(i = 0; i<n; i++){
//     console.log(a[i]);
// }

//QUESTION N0[42]
//const prompt = require("prompt-sync")();
// let n = parseInt(prompt("enter the n: "));
// let m = parseInt(prompt("enter the m: "));
// let a = [][n];
// let b = [][n];
// let c = [][n];
// for ( i = 0; i<m; i++){
//     for(j = 0;j<n; j++){
//         a[i][j] =parseInt(prompt());
//     }
// }
// for( i = 0; i<m; i++){
//     for( j = 0; j<n; j++){
//         b[i][j]  = parseFloat(prompt(`enter the num:$(i +1)`));
//     }
// }
// for( i = 0; i<m; i++){
//     for(j = 0; j<n; j++){
//         c[i][j] = a[i][j]+b[i][j];
//         c[i][j] = a[i][j]-b[i][j];
//     }
// }for( i = 0; i<m; i++){
//     for( j = 0; j<n; j++){
//         console.log(a[i][j]);
//     }
// }


   // question no[matrix addition]

//2Darray = multi-dimensionalarray that stroes a matrix 
//of data in rows and colums
//useful for games spreadsheets,or representing images;

// let matrixA = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// let matrixB = [
//     [1,2,3],
//     [3,4,5],
//     [6,7,8]
// ];
// //ans [[2,4,6],[7,9,11],[13,15,17]]
// let matrixsum = (matrixA, matrixB,) => {
//     let result = [];
// for(let i = 0; i<matrixA.length; i++){
//     let row = [];
//     for(let j = 0; j<matrixA[i].length; j++){
//       row.push(matrixA[i][j]+matrixB[i][j]);  

//     }
//     result.push(row);
//   }
//   return result;              
// }
// let matrix = matrixsum(matrixA,matrixB);
// console.log(matrix);

// let matrixA = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// let matrixB = [
//     [1,1,3],
//     [4,2,3],
//     [1,2,3]
// ];
// let matrixsubstract = (matrixA,matrixB) => {
//     let result = [];
//     for(let i = 0; i<matrixA.length;i++){
//         let row = [];
//         for(j = 0; j<matrixA[i].length; j++){
//             row.push(matrixA[i][j] - matrixB[i][j]);
//         }
//         result.push(row);
//     }
//     return result;
// }
// let matrix = matrixsubstract(matrixA,matrixB);
// console.log(matrix);

/*let matrixA = [
    [1,2,3],
    [3,4,5],
    [5,6,7]
];
let matrixB = [
    [1,3,4],
    [1,4,2],
    [3,5,1]
];
let maltiplymatrix = (matrixA,matrixB) => {
    let result = [];
    for(let i =0; i<matrixA.length; i++){
        let row = [];
        for(let j = 0; j<matrixA[i].length; j++){
            row.push(matrixA[i][j]*matrixB[i][j]);
        }
        result.push(row);

    }
    return result;
}
let matrix = maltiplymatrix(matrixA,matrixB);
console.log(matrix);*/

//array pattern questiuon ;

//pascal tringal
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

// let n = parseInt(prompt("Enter the number: "));
// let a = [];

// // Initialize the array
// for (let i = 0; i <= n; i++) {
//     a[i] = [];
// }

// for (let i = 0; i <= n; i++) {
//     let line = '';
//     for (let j = 0; j <= i; j++) {
//         if (j == 0 || j == i) {
//             a[i][j] = 1;
//         } else {
//             a[i][j] = a[i-1][j-1] + a[i-1][j];
//         }
//         line += a[i][j] + ' ';
//     }
//     console.log(line);
// }

//number pattern question l;??


// spiral pattern 
// 1  2  3  4  5
// 16 17 18 19 6          
// 15 24 25 20 7          
// 14 23 22 21 8          
// 13 12 11 10 9      
// let n = parseInt(prompt("Enter the value of n: "));
// let a = [];
// let i, j, s;

// // Initialize the 2D array
// for (i = 0; i < n; i++) {
//     a[i] = [];
// }

// let k = 1;

// // Fill the array in a spiral order
// for (i = 0; i < Math.ceil(n / 2); i++) {
//     // Top row
//     for (j = i; j < n - i; j++) {
//         a[i][j] = k++;
//     }
    
//     // Right column
//     for (j = i + 1; j < n - i; j++) {
//         a[j][n - i - 1] = k++;
//     }
    
//     // Bottom row
//     for (j = n - i - 2; j >= i; j--) {
//         a[n - i - 1][j] = k++;
//     }
    
//     // Left column
//     for (j = n - i - 2; j > i; j--) {
//         a[j][i] = k++;
//     }
// }

// // Print the 2D array
// for (i = 0; i < n; i++) {
//     let line = '';
//     for (j = 0; j < n; j++) {
//         line += a[i][j] + ' ';
//     }
//     console.log(line.trim());
// }


//[0,2,1,0,2,1,0]

//without sorting method array is sort
// let n=parseInt(prompt("enter the n: "));
// let a = [];
// for(i = 0; i<n; i++){
//     let num=parseFloat(prompt(`enter the num: $(i+1)`));
//     a[i] = num;
// }
// let c = 0;
// let d = 0;
// let e = 0; 
// for(i = 0; i<n; i++){
//     if(a[i]==0){
//         c++;
//     }
//     else if(a[i]==1){
//         d++;
//     }
//     else if(a[i]==2){
//         e++;
//     }
// }
// for(i =0; i<c; i++){
//     a[i] = 0;
// }
// while(i<n-c){
//     a[i] = 1;
//     i++;
// }
// while(i<n){
//     a[i] = 2;
//     i++;
// }
// for(i = 0; i<n; i++){
//     console.log(a[i]);
// }

//roted and sorted
//[5,6,1,2,3,4]

// let n=parseInt(prompt("enter the n: "));
// let a = [];
// for(i = 0; i<n; i++){
//     let num =parseFloat(prompt(`enter the num: $(i+1)`));
//     a[i] = num;
// }
// let c = 0;
// for(i = 1; i<n; i++){
//     if(a[i-1]>a[i]){
//         c++;
//     }
// }
//     if(a[n-1]>a[0]){
//         c++;
//     }

// if(c==1){
//     console.log("The array is rotated and sorted")
// }
// else{
//     console.log("The array is not sorted")
// }

//solve
// 1
// 2 9
// 3 8 10
// 4 7 11 14
// 5 6 12 13 15



// let n = parseInt(prompt("Enter the number of n: "));
// let a = [];

// for (let i = 0; i < n; i++) {
//     a[i] = [];
// }

// let k = 1;

// for (let j = 0; j < n; j++) {
//     if (j % 2 === 0) {
//         for (let i = j; i < n; i++) {
//             a[i][j] = k++;
//         }
//     } else {
//         for (let i = n - 1; i >= j; i--) {
//             a[i][j] = k++;
//         }
//     }
// }

// // Print the pattern
// for (let i = 0; i < n; i++) {
//     let line = '';
//     for (let j = 0; j <= i; j++) {
//         line += a[i][j] + ' ';
//     }
//     console.log(line.trim());
// }
// numberpattern???

//star pattern question []

// let n=parseInt(prompt("enter the n: "));
// let a = [];
// for(i = 0; i<n; i++){
//    a[i] = [];
// }
// maxv = [0];
// for(i =1; i<n; i++){
//    if(a[i]>maxv){
//       maxv = a[i];
//    }
// }
// for(i = 0; i<n; i++){
//    line = '';
//    for(j = 0; j<n; j++){
//       if(a[j]>maxv - i){
//          line+= +'*';
         
//       }
//       else{
//          line+= ' ';
//       }
//    }
//    console.log(line);
// }

// 1  2  3  4  5
// 11 12 13 14 15
// 21 22 23 24 25
// 16 17 18 19 20
// 6  7  8  9  10

 //const prompt = require("prompt-sync")();
// let n = parseInt(prompt("enter the n: "));
// let array = [];
// let i, j, k = 1;
// for (i = 0; i < n; i++) {
//    array[i] = new Array(n);
// }
// for(i=0; i<n; i++)
// {  
//    let line = '';
//       for(j=0; j<n; j++)
//       {  
//          array[i][j]=k;
//          line += array[i][j]+ ' ';
//          k++;
//       }
//       console.log(line);
// }

// 1   2   3   4   5
// 11  12  13  14  15
// 21  22  23  24  25
// 16  17  18  19  20
// 10  9   8   7   6

// const prompt=require("prompt-sync")();
// let n=parseInt(prompt("enter the num: "));
// let a=[];
// for(i=0;i<n;i++){
//    a[i]=[];
// }
// let y=0;k=1;
// for(i=0;i<n;i++){
//   for(j =0; j<n; j++){
//       a[y][j]=k;
//       k++;
      
//    }if(k<n*n){                                       
//         i++;
//         let m=n-y-1;
//         for(j =n-1; j>=0;j--){
//          a[m][j]=k;
//          k++;
//    }
//     y++;
//  }
// else{
//     for(i=0; i<n; i++){
//       line = '';
//       for(j=0; j<n; j++){
//          line += a[i][j]+' ';
//       }console.log(line);}
//    }
// }
    
  
 
//    
   
// 1  2  3  4  5
// 11 12 13 14 15
// 21 22 23 24 25
// 16 17 18 19 20
// 6  7  8  9  10

// let n=parseInt(prompt("enter the num: "));
// let a = [];
// for(i = 0; i<n; i++){
//     a[i] = [];
// }
// let y = 0;
// let k = 1;
// for(i = 0; i<n; i++){
//     for(j =0; j<n; j++){
//         a[y][j] = k;
//         k++;
//     }
//     if(k<n*n){
//         i++;
//         //let b = j;
//         let m= n-y-1;
//         for(a = 0; a<n; a++){
//             a[m][a] = k;
//             k++;
//         }
//         y++;
//     }else{
//         for(i = 0; i<n; i++){
//             line = '';
//              for(j = 0; j<n; j++){
//                 line+=a[i][j]+ ' ';

//              }
//              console.log(line);
//         }
        
//         }

//         }
    
    
