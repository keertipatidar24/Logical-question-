//NOTE BOOK QUESTION NO . 1

//const prompt =require(prompt("prompt-sync"))();
// let n=parseInt(prompt("enter the value of n: "));
// let p=1;
// for(i=1;i<=n; i++){
//     p=p*i;
// }
// console.log(p);
//QUESTION NO .[2]
 //const prompt=require("prompt-sync")();
// let n=parseInt(prompt("enter the value of n: "));
// let sum = 0;
// for(i =1;i<=n ; i++ ){
//     sum = sum + i;
// }
// console.log(sum);

//QUESTION NO [3];
//SUM OF EVEN NUMBERS
// const prompt =require("prompt-sync")();
// let n=parseInt=(prompt("enter the value of n: "));
// let sum = 0;
// for(i = 2; i<=n; i= i+2){
//     sum = sum + i ;
// }
// console.log(sum);

//NOTEBOOK QUESTION NO. 4

// construct a flowchart to print the numbher below100 that are divisible by 7;

// let n=parseInt(prompt("enter the value of n:"))
// for(i=1; i<n; i++){
//     if(i%7){
//         console.log(i);
//     }{}

//QUESTION NO . 6

//let n=parseInt(prompt("enter the value of n: "));
// for(i=1;i<=n;i++){
//     if(i%2==0&&i%7==0){
//         console.log(i);
//     }

//QUESTION NO . 7 
//  const prompt =require("prompt-sync")();
//  let n=parseInt(prompt("enter the value of n: "));
// let sum = 0; sq=1;
// for( i=1; i<=n; i++);{
//     if(i%3==0){
//         sq=i*i;
//         sum = sum+sq;
//     }
//     console.log(sum);
// }

//QUESTION NO . 10 LCM , HCF ,
// const prompt=require("prompt-sync")();
// let a=parseInt(prompt("enter the value a: "));
// let b=parseInt(prompt("enter the value b: "));
// let p=a*b;
// while(b>0){
//     R = a%b;
//     a=b;
//     b=R;
// }
// hcf=a;
// console.log(a);
// lcm=p/hcf;
// console.log(lcm);

//QESTION NO .11  
 const prompt =require("prompt-sync")();
// let n=parseFloat(prompt("enter the value of n: "));
// let sum=0;
// while(n!==0){
//     let r = n%10;
//     sum = sum + r;
//     n=Math.floor(n/10);
// }
// console.log(sum);


//QUESTION NO [12]
// const prompt =require("prompt-sync")();
// let n=parseInt(prompt("enter the value of n: "))
// let sum = 0;
// while(n>0){
//     r = n%10;
//     sum  = sum*10+r;
//     n = Math.floor(n/10)
// }
// console.log(sum);

// QUESTION NO[9]
//const prompt = require("prompt-sync")();
// let n = parseInt(prompt("Enter the value of n: "));
// let p = parseInt(prompt("Enter the value of p: "));
// let q = parseInt(prompt("Enter the value of q: "));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     if (i % p == 0 && i % q != 0) {
//         sum += i;
//     }
// }
// console.log("Sum:", sum);

//QUESTION NO[13];
// let n=parseInt(prompt("enter the value of n:"));
// for(let i=1; i<=n; i++){
//     if (n%i==0){
//         console.log(i);
//     }
// }
//QUESTION NO[16][A]
//const prompt =require("prompt-sync")();
// let n=parseInt(prompt("enter the value of n: "));
// let x=parseInt(prompt("enter the value of x: "));
// let sum = 0;
// for(i = 1; i<=n; i++){
//     let p = 1;
//     for(j = 1; j <= i; j++){
//         p = p*x;
//     }
//         sum = sum +p/i;
//     }
//     console.log(sum);

//NO[B]
// let n=parseInt(prompt("enter the value of n: "));
// let x=parseInt(prompt("enter the value of x: "));
// let k=parseInt(prompt("enter the value of k: "));
// let sum = 0;
// for(i = 1; i<=n; i++){
//     let p = 1;
//     for(j = 1; j<=k; j++){
//         p = p*x;
//     }
//     if(i%2==0){
//         sum = sum -p/k;
//     }else{
//         sum = sum + p/k;
    
//     }
//     k+=2;
// }
// console.log(sum);

//QUESTION NO[17];
// let n=parseInt(prompt("enter the value of n: "));
// let sum = 0;
// for(i = 5; i<=n; i=i*10+5){
//     sum = sum+i;
// }
// console.log(sum);

//QUESTION NO[18]

// let n=parseInt(prompt("enter the value of n: "));
// let m=parseInt(prompt("enter the value of m: "));
// for(i=1; i<=n; i++){
//     for (j=1; j<=m; j++){
//         console.log(i*j);
//         console.log("\n");
//     }
// }

//QUESTION NO[19];
//companset question []

// let n=parseInt(prompt("enter the value of n: "));
// for(i =0; i<n; i++){
//     let sum = 0;
//     for(j=1; j<i;j++){
//         if(i%j==0){
//             sum = sum + j;
//         }
//     }
//     if(sum===i){
//         console.log(i);
//     }
// }
//QUESTION NO [20]

// let n=parseInt(prompt("enter the value of n: "));
// let sum = 0;
// let c = 0;
// let  N = n;
// while (N>0){
//     let r = N % 10;
//     c++;
//     N = Math.floor(N/10);
// }
// N=n;
// while (N>0){
//     let r = N % 10;
//     let p =1;
//     for(let k=1; k<=c; k++){
//         p = p*r;

//     }
//     sum = sum + p;
//     N = Math.floor(N/10);
// }
// if(n==sum){
//     console.log("armstrong");
// } 
// else{console.log("not");}

//QUESTIO NO .[21]

// let n = parseInt(prompt("Enter the value of n:"));
// let sum = 0;
// let temp = n; 

// while (n > 0) {
//     let r = n % 10;
//     let p = 1;
//     for (let j = 1; j <= r; j++) {
//         p *= j;
//     }
//     sum += p;
//     n = Math.floor(n / 10);
// }

// if (temp === sum) {
//     console.log(temp + " is an Armstrong number.");
// } else {
//     console.log(temp + " is not an Armstrong number.");
// }

//QUESTION [24]
// let n=parseInt(prompt("enter the value of n: "));
// if(n>0){
//     if(n%2==0){
//         let sum = 0;
//         while(n>0){
//             r = n%10;
//             sum = sum +r;
//             n = Math.floor( n/10);

//         }
//         console.log(sum);
//     }
//     else{
//     let p = 1;
//     while(n>0){
//         r = n%10;
//         p = p*r;
//         n = Math.floor(n/10);
        
//     }
//     console.log(p)}
// }else{
// console.log("invalid")}

// QUESRTION NO [[0]]
//Print kth max of factor of n

// let n=parseInt(prompt("enter the value of n: "));
// let k=parseInt(prompt("enter the value of k: "));
// let c = 0;
// for( i =n ;i > 0;i--){
//     if (n%i==0){        
//         c++;
//         if(k===c){
//             console.log(i);
//         }
//     }
// }
//question no [1]
// let n=parseInt(prompt("enter the value of n: "));
// let temp = n;
// let R =0;
// while(n>0){
//     r = n%10;
//     R=R*10+R;
//     n = Math.floor(n/10);

// }if(n==R){
//     console.log("pallandrom");
// }else{console.log("not")}

//QUESTION NO [2]
//all perfect square ;
// let m=parseInt(prompt("enter the value of m: "));
// let n=parseInt(prompt("enter the value of n: "));
// let i = 1;
// while( i*i<=n){
//    let k =i*i;
//    if(k>=m&&k<=n){
//             console.log(k);
//     }i++;
// }

//QUESTION ;31'
// let n=parseInt(prompt("enter the value of n: "));
// for(i=1; i<=n;i++){
//     if(n%i==0){
//         let c=0;
//         for(j=0; j<=i; j++){
//            if( i%j==0){
//             c++;
//            }
//         }if(c==2){
//             console.log(i);
//         }
//     }
// }
// //QUESTION NO ; 32'

// let a=parseInt(prompt("enter the value of a: "));
// let n=parseInt(prompt("enter the value of n: "));
// let a=0;b=1;
// console.log(a,b);
// for(i=2;i<n-1; i++){
//     sum=a+b;
//     a=b;
//     b=sum;


//     console.log(sum);
// }
//QUESTION NO .33;
// let n=parseInt(prompt("enter the value of n: "));
// let a=parseInt(prompt("enter the value of a: "));
// let s=0;
// let s1=0;
// for(i=1;i<=(n+1)/2; i++){
//     A = a*a;
//     s=s+A;
//     a=a+1;
// }
// for( i= 4; i<=n; i++){
//     B=a*a;
//     s1=s1+B;
//     a=a+1;
// }
// if(s==s1){
//     console.log("yes");
// }
// else{ console.log("not")}

//question no[34];
// let n=parseInt(prompt("enter tghe value of n: "));
// let sum =0;
// let sum1 = 0;
// for(i = 1; i<=n; i++){
//     let a=parseInt(prompt("enter the value of a: "));
//     if(a>=10 && a<=99 ){
//         sq = a * a;
//         sum = sum + sq;
//         let r =0;
//         let temp = a;
//         while(temp>0){
//             r = 0;
//             r = r*10+temp%10
//             temp = Math.floor(temp/10);
//         }
//         sq = r*r;
//         sum1 = sum1 + sq;
//     }else{
//         console.log("not two digit no.");
//     }
// }
// if(sum ==sum1){
//     console.log("equal");
// }else{
//     console.log("not");
// }

//QUESTION NO[27]

// let n=parseInt(prompt("enter the value of n: "));
// let a=parseInt(prompt("enter the value of a: "));
// let b=parseInt(prompt("enter the value of b: "));
// let max=a;
// let smax=b;
// if(smax>max){
//     let T=max;
//     max=smax;
//     smax=T
// }
// for(i = 1; i<=n-1; i++){
//     let a=parseInt(prompt("enter the value of a: "));
//     if(a>max){
//         smax = max;
//         max = a;
//     }
//     if(a>smax){
//         smax = a;
//     }
    
//  }
//  console.log(smax);

//binary to decimal
// let B=parseInt(prompt("enter the value of B: "));
// let D = 0;
// let b = 1;
// while(B>0){
//     k = B%10;
//     D = D+k*b; 
//     B = Math.floor ( B /10);
//     b = b*2;
// }
// console.log(D);

//decimal to binary;

// let D=parseInt(prompt("enter the value of D: "));
// let B = 0;
// let b = 1;
// while(D>0){
//     k= D%2;
//     B = B + k*b ;
//     D = Math.floor( D/2);
//     b = b*10;
// }
// console.log(B);

// let n = parseInt(prompt("enter the value of n: "));
// let m =parseInt(prompt("enter the value of m: "));
// let i = m;
// if(m<=n){
//     for(i<=m; i++;){
//         k = i * i;
//         if(k>=m ){
//             if(k<=n){
//                 console.log(m);
//             }
//         }
//     }
//     m++;

// }

//question no[*]
//jumbled number
// let n=parseInt(prompt("enter the n:"));
// let p = 0;
// let r = n%10;
// n = Math.floor(n/10);
// while(n>0){
//     r1 = n%10;
//     if(r === r1+1 || r ===r1-1 ){
//         p = 1;
//         r = r1;
//         n = Math.floor(n/10);
//     }else {
//     p = 0;
//     break;
// }

// }
// if(p == 1){
//     console.log("jumble no")
// }else{
//     console.log("not jumbble")
// }

// //pronic number
// let n=parseInt(prompt("enter the n: "));
// for(i = 1; i<=n/2;i++){
//     if( i*(i+1)==n){
//         console.log(n)
//     }
// }

//series quesion [1];

// let n=parseInt(prompt("enter the num: "));
// let x=parseInt(prompt("enter the x: "));
// let k= 1;
// let sum =0;
// for(i = 1;i<=n; i++){
//     let p = 1;
//     for(j = 1; j<=k; j++){
//         p = p * x;
//     }
//     if(i%2==0){
//         sum = sum -p/k;
//     }
//     else{
//         sum = sum + p/k;
//     }
//     k+=2;
// }
// console.log(sum);

//question Node.2
// let n=parseInt(prompt("enter the num:"));
// let x=parseInt(prompt("enter the x: "));
// let y=parseInt(prompt("enter the y:"));
// let sum = 0;
// let k = 1;
// for( i = 1;i<=k; i++){
//     let s = 1;
//     for(q = 1; q<=k; q++){
//         s = s *q;
        
//     }
//     let p =1;
//     for(j =1; j<=i; j++){
//         p = p * x;
//     }
//     let z = 1;
//     for( j = i; j<i; j++){
//         z = z*y;
//     }
//     m = p*z;
//     if((i-1)%4==0){
//         sum = sum -m/s;
//     }else if((i-1)%2==1){
//         sum = sum - m/s;
//     }else{
//          sum = sum + m/s;
//     }
//     k = k+2;
    
    
    
// }
// console.log(sum);

//question n0[max min]
// let n=parseInt(prompt("enter the num: "));
// let a=parseInt(prompt("enter the a: "));
// let max = a;
// let min = a;
// for(i =1 ; i<n; i++){
//     let num=parseFloat(prompt(`enter the num: $(i+1)`));
//     if(num>max){
//         max = num;
//     }else {
//         if(num<min){
//             min = num;
//         }
//     }
// }
// console.log(max,min);

//question n0[second max] 
// let n=parseInt(prompt("enter the num: "));
// let a=parseInt(prompt("enter the a: "));
// let max = a;
// let smax = 0;
// for(i = 1; i<n; i++){
//     let num=parseFloat(prompt(`enter the num: `));
//     if(num>max){
//         smax = max;
//         max = num;
        
//     }else if(num>smax){
//         smax = num;
//     }
// }
// console.log(smax);

//question no[third max];

// let n=parseInt(prompt("enter the num :"));
// let a=parseInt(prompt("enter the a: "));
// let max = a;
// let smax = 0;
// let tmax = 0;
// for(i = 1; i<n; i++){
// //     let num =parseFloat(prompt(`enter the num: $(i+1)`));
// //     if(num>max){
// //         tmax = smax;
// //         smax = max;
// //         max = num;
// //     }else if(num>smax){
// //         tmax = smax;
// //         smax = num;
// //     }else if(num>tmax){
// //         tmax = num;
// //     }

    
// // }
// // console.log(tmax);
// let n=parseInt(prompt("enter the num: "));
// let a =parseInt(prompt("enter the a: "));
// let b=parseInt(prompt("enter the b:"));
// let max = a;
// let smax = b;
// let min = a;
// let smin = b;
// if(smax>max){
//     t = max;
//     max = smax;
//     smax = t;
// }
// else if(smin <min){
//     t = min;
//     min = smin;
//     smin = t;
// }
// for(i = 1; i<n-1; i++){
//     num = parseFloat(prompt(`enter the num: $(i+1)`));
//     if(num>max){
//         smax = max;
//         max = num;
//     }else  if(num>smax){
//         smax = a;
//         }else if(num<min){
//             smin = min;
//             min = num;
//         }else if(a<smin){
//             smin = a;
//         }
// }
