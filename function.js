// function cookmaggi(maggie,water,pot){
//     console.log("your maggi will be ready for "
//         + maggie*2
//         +"minute"
//         +"ingretand are used their:- "
//         + maggie +"maggie"  
//         +water+"cups of water"
//         +pot+"pot")
// }
// cookmaggi(4 , 8, 1);

// function myname(num1,num2){
//     return result= num1+num2;
// }
// myname(2,3);
// console.log(result);
// function mymulti(string1 , string2){
//     return my = string1 + string2
    
// }
// mymulti("keerti "+"patidar");
// console.log(my);

// function mymessage(username){
//     return `${username} justloging`

// }
// console.log(mymessage("kirti"));

// Imagine you are working on a project that needs to calculate the area of a rectangle. Write a function called calculateRectangleArea that takes two parameters:

//     width: the width of the rectangle
//     height: the height of the rectangle
// function areaofrectangle(width ,length){
//     return my = width*length
// }
// areaofrectangle(4,5);
// console.log(my);

// Write a function called calculateTotalCost that takes an array of objects, where each object represents an item in the basket. Each item object should have the following properties:

//     name: the name of the item
//     price: the price of the item
//     quantity: the quantity of the item

// The function should calculate and return the total cost of all the items in the basket.

// For example, if the input array is:

// Copy
// [
//   { name: 'Item 1', price: 10.99, quantity: 2 },
//   { name: 'Item 2', price: 5.75, quantity: 3 },
//   { name: 'Item 3', price: 7.99, quantity: 1 }
// ]

// The function should return the total cost, which is 10.99 * 2 + 5.75 * 3 + 7.99 * 1 = 51.47.

// Can you provide the implementation of the calculateTotalCost function?
// Compare to
// Compare All
//question no[1];

// function digitfind(){
//     const prompt = require("prompt-sync")();
//     let n = parseInt(prompt("enter the n: "));
//     let c = 0; 
//     while(n>0){
//         if(n%10==4){
//             c++;
//         }
//         n = Math.floor(n/10);
//     }
//     console.log(` the number of occurrences of the digit 4 : ${c}`);
// }
// digitfind();

//question no[2];

// function vaildtriangle(){
//     const prompt = require("prompt-sync")();
//     let a = parseInt(prompt("enter the a: "));
//     let b = parseInt(prompt("enter the b: "));
//     let c = parseInt(prompt("enter the c: "));
//     let s = a+b+c;
//     if(s===180){
//         console.log("valid  triangle");
//     }
//     else{
//     console.log("invalid");
//     }
// }
// vaildtriangle();

//question[3]

// function sum(){
//     const prompt = require("prompt-sync")();
//     let t = parseInt(prompt("enter the t:"))
//     for(i = 1; i<=t; i++){
//         let n = parseInt(prompt("enter the n: "));
//         let sum = 0; 
//         while(n>0){
//             a = n%10;
//             sum = sum + a;
//             n = Math.floor(n/10);

//         }
//         console.log(sum);
//     }
// }
// sum();

//question no[4];

// function findnumber(){
//     const prompt = require("prompt-sync")();
//     let n = parseInt(prompt("enter the n: "));
//     let k = parseInt(prompt("enter the k: "));
//     let c = 0;
//     for(i = 1; i<=n; i++){
//         let a = parseInt(prompt("enter the a: "));
//         if(a%k==0){
//             c++;
//         }

//     }
//     console.log(`the number is: ${c}`);
// }
// findnumber();

//question [5];

// function addnumber(num1,num2){
//     return num1+num2
// }
// console.log(addnumber(3,6));

// function reversednumber(){
//     const prompt = require("prompt-sync")();
//     let t = parseInt(prompt("enter the t: "));
//     for(i = 1; i<t; i++){
//         let n = parseInt(prompt("enter the n: "));
//         let r = 0;
//         while(n>0){
//             a = n%10;
//             r = r*10+a;
//             n = Math.floor(n/10);

//         }
//         console.log(`reversednumber: ${r}`);
//     }
// }
// reversednumber();
//question no[6]
//function lastdigit(){
//     const prompt = require("prompt-sync")();
//     let t = parseInt(prompt("enter the t: "));
//     for(i = 1; i<=t; i++){
//         let n = parseInt(prompt("enter the n: "));
//         a = n%10;
//         while(n>10){
//         n = Math.floor(n/10);

//         }
//         console.log(a+n);
//     }

// }
// lastdigit();

//question no[7];

// function ship() {
//     const prompt = require("prompt-sync")();
//     let t = parseInt(prompt("Enter the number of test cases: "));
  
//     for (let i = 1; i <= t; i++) {
//       let exp = prompt("Enter the ship type: ");
//       switch (exp) {
//         case "b":
//           console.log("battleship");
//           break;
//         case "c":
//           console.log("curious");
//           break;
//         case "d":
//           console.log("destroyer");
//           break;
//         default:
//           console.log("Invalid ship type");
//       }
//     }
//   }
  
//   ship();

//question no[9];
// function camparenumber(A , B){
//     const prompt = require("prompt-sync")();
//     //let A = parseInt(prompt("enter the A:"));
//     //let B = parseInt(prompt("enter the B: "));
//     if(A==B){
//         console.log("=");
//     }else if(A>B){
//         console.log(">");
//     }else{
//         console.log("<");
//     }
// }
// camparenumber();

//QUESTION [10]
// function  wallpaint(){
//     const prompt = require("prompt-sync")();
//     let x1 = parseInt(prompt("enter the x1: "));
//     let y1 = parseInt(prompt("enter the y1: "));
//     let x2 = parseInt(prompt("enter the x2: "));
//     let y2 = parseInt(prompt("enter the y2: "));
//     let sum = 0;
//     sum = x1+y1;
//     sum1 = 0;
//     sum1 = x2+y2;
//     if(sum>sum1){
//         console.log(sum1);
//     }else{
//         console.log(sum);
//     }
// }
// wallpaint();


//question no[11];

//function incrementdecrement(){
//     const prompt = require("prompt-sync")();
//     let t = parseInt(prompt("enter the t: "));
//     for(i = 1; i<=t; i++){
//         let n = parseInt(prompt("enter the n: "));
//         if(n%4==0){
//             console.log(n+1);
//         }
//         else{
//             console.log(n-1);
//         }
//     }
// }
// incrementdecrement();  

// const prompt = require("prompt-sync")();
// let n = parseInt(prompt("enter the n: "));
// for(let i = 1; i<n; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// const prompt = require("prompt-sync")();
// let t = parseInt(prompt("enter the t: "));
// for( i = 1; i<=t; i++){
// let n = parseInt(prompt("enter the n: "));
// let sum = 0;
// while(n>0){
//     r = n%10;
//     sum = sum+r;
//     n = Math.floor(n/10);

// }
// console.log(sum);
// }

// const prompt = require("prompt-sync")();
// let t = parseInt(prompt("enter the t: "));
// for( i = 1; i<=t; i++){
//     let a = [];
//     let n = parseInt(prompt("enter the n: "));
//     for( i = 0; i<n; i++){
//     let num = parseFloat(prompt("enter the num: "));
//     a[i] = num;
//     }
//     for( i = 0; i<n; i++){
//         console.log(a[i]);

//     }
// }

// const prompt = require("prompt-sync")();
// let t = parseInt(prompt("enter the t: "));
// for(i = 1; i<=t; i++){
// let a = [];
// let n = parseInt(prompt("enter the n: "));
// for(let  i = 0 ; i<n; i++){
//     let num = parseFloat(prompt("enter the num : "));
//     a[i] = num;
// } 
//     let i = n-1;
//     let j = 0;
//     while(i>=n/2){
//         b = a[j];
//         a[j] = a[i];
//         a[i] = b;
//         j++;
//         i--;

//     }
//     for( i = 0; i<n; i++){
//         console.log(a[i]);
//     }
// }

// const prompt = require("prompt-sync")();
// let t = parseInt(prompt("enter the t: "));
// for( i = 1; i<=t; i++){
// let a = [];
// let n = parseInt(prompt("enter the n: "));
// for( i = 0; i<n; i++){
//     let num = parseFloat(prompt("enter the num: "))
// a[i] = num;
// }

// let j = 0;
// for( i = 0 ; i<n; i++){
//     if(a[j] == a[i+1]){
//     console.log(a[j]);
//     j++;
//     }
// }
// }


//**************[Module 4 Open Book Assessment]**************
// [question]Text-Based Adventure Navigation 
//const prompt=require('prompt-sync')();
// function direction(direction){
//     switch(direction.toLowerCase() ){
//         case "n":
//             console.log("move to the north");
//             break;
//         case "s":
//             console.log("move to the south");
//             break;
//         case "e":
//             console.log("move to the east");
//             break;
//         case "w":
//             console.log("move to the west");
//             break;
//         default:
//             console.log("invalid direction, Try again");
//     }
// }

// // Example usage:
// const input = prompt("Enter a direction (n, s, e, w):");
// direction(input);

//question 2[ HTML Tag Stripper ];
// const prompt = require("prompt-sync")();
// function htmlteg(html){
    
// }
// const prompt = require("prompt-sync")();
// function addsquare(a,b){
//     const sa = square(a);
//     const sb = square(b);
//     function square(num){
//         return num * num ;
//     }
   
//     return sa+sb;
    
// }
// const input1 = parseInt(prompt("enter the input1 : "));
// const input2 = parseInt(prompt("enter the input2: "));
// console.log(addsquare(input1, input2));

//find the factorial n number using function 
// const prompt = require("prompt-sync")();
// function factorial(n){
//     let product = 1;
//     for(i = n; i>0; i--){
//         product = product*i;
        
//     }
//     console.log(product);
// }
// factorial(prompt("Enter n:"))

//quesion [: HTML Tag Stripper (20 marks) ]
// const prompt = require("prompt-sync")();
// function stripHTMLTags(html) {
//     let result = '';
//     let insideTag = false;

//     for (let i = 0; i < html.length; i++) {
//         if (html[i] === '<') {
//             insideTag = true;
//         } else if (html[i] === '>') {
//             insideTag = false;
//         } else if (!insideTag) {
//             result += html[i];
//         }
//     }

//     return result;
// }
// const html = (prompt("enter the html: "));
// const result= stripHTMLTags(html);
// console.log(result);

//question [ IPL Most Valuable Player]
// function calculatemvp(players){
//    let highscore = 0;
//    let mvpplayer = '';
//    players.forEach(player => {
//       totalscore = player.runs +(player.wickets*25)+(player.catches*10);
//       if(totalscore>highscore){
//          highscore = totalscore;
//          mvpplayer = player.name;
//       }
      
//    });
//    return mvpplayer;

// }
// const players = [

//   { name: "", runs: , wickets: , catches: },
//   { name: "", runs: , wickets: , catches:  },
//   { name: "", runs: , wickets: , catches:  }
// ];
// console.log(calculatemvp(players));
   
//question[Online Shopping Cart Challenge];

// function additemtocart(cartItems , id,quantityToAdd){
//    let itemFound = false;
//    cartItems.forEach(item => {
    
//       if(item.id === id){
//          item.quantity+=quantityToAdd;
//          itemFound = true;
//       }
// });
// if(!itemFound){
//   cartItems.push({ id: id, name: `Item ${id}`, price: 0, quantity: quantityToAdd });
// }
// return cartItems;

// }
// const items = [      
// { id: 1, name: "Phone", price: 20000, quantity: 1 }, 
// { id: 2, name: "Headphones", price: 5000, quantity: 2 }, 
// { id: 3, name: "Power Bank", price: 1000, quantity: 1 }, 

// ];
// console.log(additemtocart(items, 1, 1));
// console.log(additemtocart(items, 4 , 1));


//question [file name ]

// const prompt = require("prompt-sync")();
// function getFileType(filename) {
//    const extension = filename.split('.').pop().toLowerCase();
//    switch (extension) {
//        case 'doc':
//        case 'docx':
//        case 'pdf':
//        case 'txt':
//            return 'Document';
//        case 'jpg':
//        case 'jpeg':
//        case 'png':
//        case 'gif':
//            return 'Image';
//        case 'mp3':
//        case 'wav':
//        case 'ogg':
//        case 'aac':
//            return 'Audio';
//        case 'mp4':
//        case 'avi':
//        case 'mkv':
//        case 'wmv':
//            return 'Video';
//        default:
//            return 'Unknown File Type';
//    }
// }




// hashtag extractor 

// const prompt = require("prompt-sync")();

// function extractHashtags(caption) {
//     let hashtags = new Set();
//     let hashtag = '';
//     let 
// const prompt = require("prompt-sync")();

// function extractHashtags(caption) {
//     let hashtags = new Set();
//     let hashtag = '';
//     let recording = false;

//     for (let i = 0; i < caption.length; i++) {
//         if (caption[i] === '#') {
//             if (hashtag !== '') {
//                 hashtags.add(hashtag.toLowerCase());
//             }
//             hashtag = '';
//             recording = true;
//         } else if (recording && (caption[i] === ' ' || caption[i] === '\n' || caption[i] === '\t')) {
//             if (hashtag !== '') {
//                 hashtags.add(hashtag.toLowerCase());
//                 hashtag = '';
//             }
//             recording = false;
//         } else if (recording) {
//             hashtag += caption[i];
//         }
//     }

//     if (hashtag !== '') {
//         hashtags.add(hashtag.toLowerCase());
//     }

//     return Array.from(hashtags);
// }

// const input = prompt("Enter the Instagram caption: ");
// const hashtags = extractHashtags(input).map(hashtag => hashtag.slice(1)); // Remove the '#' symbol
// console.log("Extracted hashtags:", hashtags);recording = false;

//     for (let i = 0; i < caption.length; i++) {
//         if (caption[i] === '#') {
//             if (hashtag !== '') {
//                 hashtags.add(hashtag.toLowerCase());
//             }
//             hashtag = '';
//             recording = true;
//         } else if (recording && (caption[i] === ' ' || caption[i] === '\n' || caption[i] === '\t')) {
//             if (hashtag !== '') {
//                 hashtags.add(hashtag.toLowerCase());
//                 hashtag = '';
//             }
//             recording = false;
//         } else if (recording) {
//             hashtag += caption[i];
//         }
//     }

//     if (hashtag !== '') {
//         hashtags.add(hashtag.toLowerCase());
//     }

//     return Array.from(hashtags);
// }

// const input = prompt("Enter the Instagram caption: ");
// const hashtags = extractHashtags(input).map(hashtag => hashtag.slice(1)); // Remove the '#' symbol
// console.log("Extracted hashtags:", hashtags);


//[question no orders city ad orderid]

// const prompt = require("prompt-sync")();

// function getOrderIdsByCity(orders, targetCity) {
//     let result = [];

//     orders.forEach(order => {
//         if (order.city.toLowerCase() === targetCity.toLowerCase()) {
//             result.push(order.orderId);
//         }
//     });

//     if (result.length === 0) {
//         console.log('No orders found for the specified city.');
//     }

//     return result;
// }

// const inputCity = prompt("Enter the city name: ");
// const orders = [ 
//    { orderId: 103, city: "Chennai", productName: "Tablet" },
//    { orderId: 104, city: "Chennai", productName: "Charger" }, 
//    { orderId: 105, city: "Kolkata", productName: "Keyboard" } 
// ]; 

// const orderIds = getOrderIdsByCity(orders, inputCity);
// console.log("Order IDs for city", inputCity + ":", orderIds);

   //[question updatepayment ]

// const prompt = require("prompt-sync")();

// function updatePaymentStatus(orders, targetOrderId, newStatus) {
//     let orderFound = false;

//     orders.forEach(order => {
//         if (order.orderId === parseInt(targetOrderId)) {
//             order.paymentDetails.status = newStatus;
//             orderFound = true;
//         }
//     });

//     if (!orderFound) {
//         console.log('No order found for the specified order ID.');
//     }
    
//     return orders;
// }

// const inputOrderId = prompt("Enter the input order ID: ");
// const newStatus = prompt("Enter the new status: ");
// const orders = [ 
//     { orderId: 103, city: "Chennai", productName: "Tablet", paymentDetails: { method: "Credit Card", transactionId: "tx789", status: "Pending" } }, 
//     { orderId: 104, city: "Chennai", productName: "Charger", paymentDetails: { method: "PayPal", transactionId: "pay012", status: "Failed" } } 
// ]; 

// const updatedOrders = updatePaymentStatus(orders, inputOrderId, newStatus);
// console.log("Updated Orders: ", updatedOrders);


//******************[pre DSAquestion ]****************

//Interest Calculations: In compound interest, the principal amount increases in an arithmetic progression. 
//The interest accrued at each step is added to the principal to calculate the next period's interest.
// const prompt = require("prompt-sync")();
// function compoundIntrest(p,r,n){
//    let totalAmount = p;
//    for(i = 1; i<=n; i++){
//        intrest = totalAmount*(r/100);
//       totalAmount +=intrest;

//    }
//    return totalAmount;
  
// }

// const p = parseInt(prompt("enter the p: "));
// const r = parseInt(prompt("enter the r: "));
// const n = parseInt(prompt("enter the n: "));
// const result = compoundIntrest(p,r,n);

// console.log("Total amount after", n, "years:", result.toFixed(2));
// Find the nth term of AP: 1, 2, 3, 4, 5…., an, if the number of terms is 15.
// Solution: Given, AP: 1, 2, 3, 4, 5…., an
// n=15


// const prompt = require("prompt-sync")();
// function nthterm(a, d , n){
// let tn = a + (n - 1)*d;
//    return tn;
// }
// const a = parseInt(prompt("enter the a: "));
// const d = parseInt(prompt("enter the d: "));
// const n = parseInt(prompt("enter the n: "));
// const tn = nthterm(a,d,n);
// console.log(`The ${n}th term of the arithmetic sequence is: ${tn}`);

// const prompt = require("prompt-sync")();
// function nthInstallment(p , d , n){
//    let tn = p + (n-1)*d;
//    return tn;
// }
// const p = parseInt(prompt("enter the p:"));
// const d = parseInt(prompt("enter the d:"));
// const n = parseInt(prompt("enter the n:"));
// const tn = nthInstallment(p,d,n);
// console.log(`the ${n}th installment of the arithmetic progression is :${tn}`);


//Find the value of n, if a = 10, d = 5, an = 95.

// const prompt = require("prompt-sync")();
// function nfind(a,d,an){
   
//    let n = (an-a)/d +1;
//    return n;
// }
// const a = parseInt(prompt("enter th a: "));
// const d = parseInt(prompt("enter th d: "));
// const an = parseInt(prompt("enter th an: "));
// const n = nfind(a,d,an);
// console.log(`the ${n} value of arithmaticprogression :${n}`)

//Example 3: Find the sum of the first 30 multiples of 4.
// const prompt = require("prompt-sync")();
// function sumof(a, n, d){
//    let sn = (n/2)*[2*a+(n-1)*d];
//    return sn;
// }
// const a = parseInt(prompt("enter the value of a: "));
// const n = parseInt(prompt("enter the value of n: "));
// const d = parseInt(prompt("enter the value of  d: "));

// const sn = sumof(a,n,d);
// console.log(`the sum of ${n}th  term of arithmatic progression ${sn}`);

//@@@@@@@@@@@@@@@@[compansate question]@@@@@@@@@@@@@@@@@@@@@@@

// 1]Find the common difference for the following AP: 10, 20, 30, 40, 50.
// const prompt = require("prompt-sync")();
// function comman(a,n , an){
//    let d = (an - a )/ (n-1);
//    return d;
// }
// const a = parseInt(prompt("enter the a: "));
// const n = parseInt(prompt("enter the n: "));
// const an = parseInt(prompt("enter the an: "));
// const d = comman(a,n,an);// const an = parseInt(prompt("enter the an: "));
// console.log(`commandifference of this ap :${d}`);


// 2]The sequence 28, 22, x, y, 4 is an AP. Find the values of x and y.
// const prompt = require("prompt-sync")();
// function find(a , d){
//    let t3 = a+(2)*d;
//    let t4 = a+(3)*d;
//    return {t3 ,t4};
 
// }
// const a = parseInt(prompt("enter the a: "));
// //const n = parseInt(prompt("enter the n: "));
// const d = parseInt(prompt("enter the d: "));
//  const {t3,t4 } = find(a,d);
//  console.log(`The value of this ap ${t3}and ${t4} `);

//3]Find the 5th term of the arithmetic progression 1, 4, 7, ….
// const prompt = require ("prompt-sync")();
// function nthterm(a,d,n){
//    let an = a+(n-1)*d;
//    return an;
// }
// const a = parseInt(prompt("enter the a: "));
// const d = parseInt(prompt("enter the d: "));
// const n = parseInt(prompt("enter the n: "));
// const an = nthterm(a,d,n);
// console.log(`the ${5}th term of this AP ${an}: `);

// 4]What is the nth term of an AP 9, 13, 17, 21, 25, …?
// const prompt = require("prompt-sync")();
// function nthterm(a,d,n){
//    let an = a+(n-1)*d;
//    return an;
// }
// const an = nthterm(9,4,3);
// console.log(an);

// 4] If the first, second and last terms of the AP are 5, 9, 101, respectively,
 //find the total number of terms in the AP.
// const prompt = require("prompt-sync")();
// function terms(a,d,an){
//    let n = (an - a)/d +1;
//    return n;
// }
// const a = parseInt(prompt("enter the a: "));
// const d = parseInt(prompt("enter the d: "));
// const an = parseInt(prompt("enter the an: "));
// const n = terms(a,d,an);
// console.log(`This AP term${n};`);


//5 ] Which term of AP 27, 24, 21, … is 0?
// const prompt = require("prompt-sync")();
// function terms(a,d,an){
//    let n = (an - a)/d +1;
//    return n;
// }
// const a = parseInt(prompt("enter the a: "));
// const d = parseInt(prompt("enter the d: "));
// const an = parseInt(prompt("enter the an: "));
// const n = terms(a,d,an);
// console.log(`${0}which term  is the${n}th`);

// 6.] The sequence 12b, 8b, 4b is in AP. Find the sum of the first 18 terms.
// const prompt = require("prompt-sync")();
// function sum(a,n,d){
//    let sn = n/2*[2*a+(n-1)*d];
//    return sn;
// }
// const a = parseInt(prompt("enter the a: "));
// const d = parseInt(prompt("enter the d: "));
// const n = parseInt(prompt("enter the n: "));
// const sn = sum(a,d,n);
// console.log(`The sum of the first ${18}th terms ${sn}`);

// 7.]The first three terms of a sequence are 8, y, 18. Find the value of y so 
//that the sequence becomes an Arithmetic progression.
// const prompt = require("prompt-sync")();
// function findterm(a,n,an){
//    let d = (an -a )/(n-1);
//    let y = a+(1)*d;
//    return y;
// }
// const a = parseInt(prompt("enter the a: "));
// const n = parseInt(prompt("enter the n: "));
// const an = parseInt(prompt("enter the an: "));
// const y = findterm(a,n,an);
// console.log(`The y value of this ap ${y}:`);


// 8.]In an Arithmetic progression, the ratio of the 7th term to the 10th term is -1. 
//If the 16th term is -15, find the 3rd term.
// const prompt = require("prompt-sync")();
// function thirdterm(){
//    //give a7:a10 = -1;
//    // a7 = a+6d;
//    //a10 = a+9d;
//    //a+6d = -1(a+9d);
//    //a+a = -9d-6d;
//    //2a = -15d;
//    //a = -15d/2;
//    //give a16 = -15;
//     // a16 = a+15d;
//     // -15 = -15d/2+15d;
//     // -30 = 15d;
//     // d = -2;
//     let d =-2;
//     //a = -15*(-2)/2
//     a = 15;
//     let a3 = a+2*d;
//     return a3;
// }
// const a3 = thirdterm();
// console.log(`the AP ${3}th term value is ${a3}`)

//***************[Geomatric progression]**********

///@@@@@@@@@@@@@@@[sunday companseate]@@@@@@@@@@@

//[1] find the 7th terms of the series 3/8,3/4, 3/2,3....what is the gm of this gp series of 7 terms

// const prompt = require("prompt-sync")();
// function terms(n,a){
//    // r = a2/a1= a3/a2 = a4/a3;
//    // r = 3/4*8/3 = 3/2*4/2 = 3*2/3;
//    // r = 2 = 2 = 2;
//    r = 2;
//    //find the 7th term ;
//    let sn = a*(r)**(n-1);
//    return sn;
//    // find the gm .
//    3/8,3/4,3/2,3,.24; 
//    gm = 3;
// }
// const n = parseInt(prompt("enter the value of n: "))
// const a = parseInt(prompt("enter the value of a: "))
// const sn = terms(n , a);
// console.log(sn);

//[2] If the first term is 10 and the common ratio of a GP is 3, 
// write the first five terms of GP.
// const prompt = require("prompt-sync")();
// function terms(n){
//    let gpterms = [];
//    let commanratio = 3;
//    let a = 10
//    for( i = 0; i<n; i++){
//    let an = a*Math.pow(commanratio,i);
//    gpterms.push(an);
//    }
//    return gpterms;
// }

// const n = parseInt(prompt("enter the n: "));
// const gpterms = terms(n);
// console.log(gpterms);

//[3]Find the sum of GP: 10, 30, 90, 270 and 810, using formula.
// const prompt = require("prompt-sync")();
// function sum(n){
//    //commanratio = r;
//    // r  = a2/a1 = a3/a2 = a4/a3;
//    // r = 30/10 = 90/30 = 270/90 ;
//    // r = 3 = 3 = 3 ;
//    let r = 3;
//    let a = 10;
//    let sn = a*((Math.pow(r,n)-1)/(r-1));
//    return sn;
// }
// const n = parseInt(prompt("enter the n: "));
// const sn = sum(n);
// console.log(`the sum of this ${n}th terms GP ${sn}: `);

//Question 4 : If 2, 4, 8,…., is the GP, then find its 10th term.
// const prompt = require("prompt-sync")();
// function findterms(n){
//    //commanratio = r;
//    let r = 2;
//    let a = 2;
//    let an = a*(r)**(n-1);
//    return an;
// }
// const n = parseInt(prompt("enter the n: "))
// const an = findterms(n);
// console.log(an);

// [5] If the first term of a G.P. is 20 and the common ratio is 4. Find the 5th term.
// const prompt = require ("prompt-sync")();
// function findterms(n){
//    let a = 20;
//    let r = 4;
//    let an = a*(r)**(n-1);
//    return an;
// }
// const n = parseInt(prompt("enter the n: "));
// const an = findterms(n);
// console.log(an);

//doubte*********
// [6] The sum of the first three terms of a G.P. is 21/2 and their product is 27. Find the common ratio.
// function findCommonRatio(sum, product) {
//    // Calculate the common ratio using the quadratic formula
//    function solveQuadratic(a, b, c) {
//        let discriminant = b*b - 4 * a * c;
//        if (discriminant < 0) {
//            return []; // No real roots
//        }
//        let sqrtDiscriminant = Math.sqrt(discriminant);
//        let root1 = (-b + sqrtDiscriminant) / (2 * a);
//        let root2 = (-b - sqrtDiscriminant) / (2 * a);
//        return [root1, root2];
//    }

//    // From the problem statement:
//    // a + ar + ar^2 = sum
//    // a * ar * ar^2 = product

//    // We know that (a * r) is the cube root of product
//    let ar = Math.cbrt(product);

//    // Let the first term a = ar / r
//    // Substitute into the sum equation:
//    // (ar / r) + ar + ar * r = sum
//    // (ar / r) + ar + ar * r = sum
//    // ar * (1/r + 1 + r) = sum

//    // Let's solve for r using this equation:
//    let a = ar; // Coefficient for r^2
//    let b = ar; // Coefficient for r
//    let c = ar - sum; // Constant term

//    let roots = solveQuadratic(a, b, c);
//    return roots;
// }

// // Example usage:
// let sum = 21 / 2;
// let product = 27;
// let commonRatios = findCommonRatio(sum, product);

// console.log("Common ratios:", commonRatios);
// function findCommonRatio(sum, product) {
//    // Calculate the common ratio using the quadratic formula
//    function solveQuadratic(a, b, c) {
//        let discriminant = b * b - 4 * a * c;
//        if (discriminant < 0) {
//            return []; // No real roots
//        }
//        let sqrtDiscriminant = Math.sqrt(discriminant);
//        let root1 = (-b + sqrtDiscriminant) / (2 * a);
//        let root2 = (-b - sqrtDiscriminant) / (2 * a);
//        return [root1, root2];
//    }

//    // From the problem statement:
//    // a + ar + ar^2 = sum
//    // a * ar * ar^2 = product

//    // We know that (a * r) is the cube root of product
//    let ar = Math.cbrt(product);

//    // Let the first term a = ar / r
//    // Substitute into the sum equation:
//    // (ar / r) + ar + ar * r = sum
//    // (ar / r) + ar + ar * r = sum
//    // ar * (1/r + 1 + r) = sum

//    // Let's solve for r using this equation:
//    let a = ar; // Coefficient for r^2
//    let b = ar; // Coefficient for r
//    let c = ar - sum; // Constant term

//    let roots = solveQuadratic(a, b, c);
//    return roots;
// }

// // Example usage:
// let sum = 21 / 2;
// let product = 27;
// let commonRatios = findCommonRatio(sum, product);

// console.log("Common ratios:", commonRatios);

//[7] Find a Geometric Progress for which the sum of the first two terms is -4 and the fifth term is 4 times the third term.



// const prompt = require("prompt-sync")();

// function findTerms(n, a, r) {
//     let gpTerms = [];
//     for (let i = 0; i < n; i++) {
//         let an = a * Math.pow(r, i);
//         gpTerms.push(an);
//     }
//     return gpTerms;
// }

// // Function to find common ratios and generate the G.P. terms
// function generateGP(a, n) {
//     // Calculate possible common ratios
//     let r1 = 2;
//     let r2 = -2;
    
//     let gp1 = findTerms(n, a, r1);
//     let gp2 = findTerms(n, a, r2);
    
//     return [gp1, gp2];
// }

// const a = parseFloat(prompt("Enter the first term a: "));
// const n = parseInt(prompt("Enter the number of terms n: "));

// const [gp1, gp2] = generateGP(a, n);

// console.log("Geometric Progression with r = 2: ", gp1);
// console.log("Geometric Progression with r = -2: ", gp2);

// [8] The number 2048 is which term in the following Geometric sequence 2, 8, 32, 128, . . . . . . . . .

// const prompt = require("prompt-sync")();
// function terms(){
//    let a = 2;
//    let r = 4;
//    let an = 2048;
//    //an = a*(r)**(n-1);
//    //2048 = 2 *(4)**(n-1);
//    //1024 = 4**(n-1);
//    //4**(5) = 4**(n-1);
//    // n-1 = 5;
//    //let  n = 6;
//    let n = Math.log(an / a) / Math.log(r) + 1;
//    return n;
// }
// const n = terms();
// console.log(`the 2048 ${n}th sequence of this gp term` );

//[9] In a G.P., the 6th term is 24 and the 13th term is 3/16 then find the 20th term of the sequence.



// const prompt = require("prompt-sync")();
// function findterms(a6 , a13){
//    // a6 = a(r)^5
//    //a13 = a(r)^12
//   let r = Math.pow((a13/a6), 1/7 );
//   let a = a6 / Math.pow(r , 5);
//   let a20 = a* Math.pow(r , 19);
//   return a20;

// }
// const  a6 = 24;
// const a13 = 3/16;
// const a20 = findterms(a6,a13);
// console.log(`the 20th term of this gp :${a20}`);

//[10] The 3rd term of a geometric progression is 18, and the 6th term is 486. Find the common ratio and the first term.
// const prompt = require ("prompt-sync")();
// function terms(a3 , a6){
//    let r = Math.pow((a6/a3) ,1/3 )
//    let a = a3 / Math.pow(r , 2);
//    return {r , a};
// }
// const {r , a} = terms(18,486);
// console.log(`common difference is r:${r}`);
// console.log(`first term is a :${a}`);


// [11] In a geometric progression, the sum of the first four terms is 60, and the product of the first four terms is 625. 
// Find the common ratio and the first term.


// const prompt = require("prompt-sync")();

// function findGeometricProgression(sum, product) {
//     // Calculate the common ratio r and first term a
//     // Use numerical methods to solve for r and a
    
//     let r, a;
//     let sumOfTerms = sum;
//     let productOfTerms = product;
    
//     // Iterate over possible values for the common ratio r
//     for (let possibleR = 0.1; possibleR < 10; possibleR += 0.001) {
//         let possibleA = Math.pow(productOfTerms / Math.pow(possibleR, 6), 1 / 4);
        
//         if (Math.abs(possibleA * (1 + possibleR + Math.pow(possibleR, 2) + Math.pow(possibleR, 3)) - sumOfTerms) < 1e-5) {
//             r = possibleR;
//             a = possibleA;
//             break;
//         }
//     }

//     return { a, r };
// }

// const sum = 60;
// const product = 625;

// const result = findGeometricProgression(sum, product);

// if (result) {
//     const { a, r } = result;
//     console.log(`First term is a: ${a}`);
//     console.log(`Common ratio is r: ${r}`);
// } else {
//     console.log("No solution found.");
// }



// Sure, here are some geometric progression (G.P.) questions without solutions:

//     
//     Question 12:
//     The sum of the infinite geometric series is 8, and the first term is 4. Find the common ratio.
   // const prompt = require ("prompt-sync")();
   // function sum(){
   //    let s = 8;
   //    let  a = 4;
   //    let r = 1-(a/s);
   //    return r;
      
   // }
   // const r = sum();
   // console.log(r);

//     Question 13:
//     In a geometric progression, the 5th term is 1024, and the 2nd term is 64. Find the common ratio and the first term.

// const prompt = require("prompt-sync")();
// function findterms(a2,a5){
//    let r = (Math.cbrt(a5/a2) , 1/3);
//    let a = a2/r;
//    return {r,a};
// }
// const {r , a} = findterms(64 , 1024);
// console.log(`the comman ratio of this gp ${r}`);
// console.log(`first term of this gp ${a}`);



//     Question 14:
//     The sum of the first three terms of a geometric progression is 21, and the sum of the next three terms is 189. 
//Find the common ratio and the first term.
// const prompt = require ("prompt-sync")();
// function sum(sum1 , sum2){
//    // we know that 1st , 2nd , 3rd terms 
//    // a+ ar + a(r)^2 = 21;
//    //next  three terms 
//    // a(r)^3 + a(r)^4 + a(r)^5 = 189;
//     let r = Math.cbrt(sum2/sum1);
//     let a = sum1/(1 + r + r*r);
//     return {r , a};
// }
// const {r, a} = sum(21 , 189);
// console.log(`the comman ratio ${r}`);
// console.log(`the first term ${a}`);

//     Question 7:
//     In a geometric progression, the 4th term is 16 and the 7th term is 128. Determine the 10th term of the progression.

//     Question 8:
//     The product of the first three terms of a geometric progression is 64, and the sum of the first three terms is 14. Find the common ratio and the first term.

//     Question 9:
//     In a geometric progression, the sum of the first five terms is 242, and the 5th term is 32. Find the common ratio and the first term.

//     Question 10:
//     If the sum of the first n terms of a geometric progression is 63, and the first term is 1 with a common ratio of 2, find the value of n.



//(((((((((((((((((((([permutation question ]))))))))))))))))))))
// Example 15 : A group of 3 lawn tennis players S, T, U. A team consisting of 2 players is to be formed.[combination]
// In how many ways can we do so?
// const prompt= require("prompt-sync")();
// function factorial(n) {
//    if (n === 0 || n === 1) {
//        return 1;
//    }
//    let result = 1;
//    for (let i = 2; i <= n; i++) {
//        result *= i;
//    }
//    return result;
// }

// function combinations(n, k) {
//    return factorial(n) / (factorial(k) * factorial(n - k));
// }
// const n = parseInt(prompt("enter the n: "));
// const k = parseInt(prompt("enter the k: "));


// const waysToFormTeam = combinations(n,k);
// console.log(waysToFormTeam);  // Output: 3

//Example 16: Find the number of subsets of the set {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} having 3 elements.//[combinatin];
// const prompt = require("prompt-sync")();
// function factorial(n){
//    if(n ==0 ||n==1 ){
//       return 1;
//    }
//    let result   = 1;
//    for( i = n ; i>0 ; i--){
//       result = result* i;
//    }
//    return result;


// }
// function combinations(n ,k){
//    return factorial(n) / ( factorial(k) * factorial(n-k));
// }
// const n = parseInt(prompt("enter the n: "));
// const k = parseInt(prompt("enter the k: "));
// const findtheway = combinations(n , k);
// console.log(findtheway);

//17 ]How many ways can the letters of the word "PERMUTATION" be arranged?

// const prompt = require ("prompt-sync")();
// function factorial(n){
//    if (n == 0 || n ==1){
//       return 1;
//    }
//    let r = 1;
//    for( i = n ; i>1; i--){
//       r = r*i;
//    }
//    return r;
// }
// function permutation(n , repeats){
//    let de = 1;
//    for(repeat of repeats){
//       de *= factorial(repeat);
//    }
//    return factorial(n)/de;

// }
// const repeats = [2,2];
// const n = parseInt(prompt("enetr the n: "));
// const findtheway = permutation(n , repeats);
// console.log(findtheway)

//18 ] In a race with 10 participants, how many ways can the first three positions (gold, silver, and bronze) be awarded?

// const prompt = require("prompt-sync")();
// function factorial(n){
//    if(n == 0||n==1){
//       return 1;
//    }
//    let result = 1;
//    for(let i = n; i>1; i--){
//       result = result*i;
//    }
//    return result;
   
// }
// function findthepoisition(n , k){
//    return factorial(n)/factorial(n-k);
// }
// const n = parseInt(prompt("enter the n: "));
// const k = parseInt(prompt("enter the k: "));
// const position = findthepoisition(n , k);
// console.log(position);


//[19] How many 3-digit numbers can be formed using the digits 1, 2, 3, 4, and 5 without repetition?
 
// const prompt = require("prompt-sync")();
// function factorial(n){
//    if(n == 0 || n==1){
//       return 1;
//    }
//    let result = 1;
//    for( i = n; i>1; i--){
//       result = result * i;

//    }
//    return result;
// }
// function digitpermutation(n , k){
//    return factorial(n)/factorial(n-k);
// }
// const n = parseInt(prompt("enter the value of n: "));
// const k = parseInt(prompt("enter the value of k: "));
// const digit = digitpermutation(n , k);
// console.log(digit);

//(((((((((((((((((((([Combination Questions])))))))))))))))))))))))

//[20] How many ways can a committee of 4 members be chosen from a group of 10 people?
//const prompt = require("prompt-sync")();
// function factorial(n){
//    if( n==0 || n==1){
//       return 1;
//    }
//    let result = 1;
//    for( let i = n; i>1; i--){
//    result = result * i;


//    }
//    return result;
// }
// function combination(n , k){
//    return factorial(n)/(factorial(k)*factorial(n-k));
// }
// const n = parseInt(prompt("enter the n:"));

// const k = parseInt(prompt("enter the k:"));
// const people = combination(n , k);
// console.log(`the number of combinatins ${people}`);


//[21] from a group of 15 players, how many ways can a team of 6 players be selected?
// const prompt = require("prompt-sync")();
// function factorial(n){
//    if(n ==0 || n==1){
//       return 1
//    }
//    let result = 1;
//    for( let i = n; i>1; i--){
//       result *=i;
//    }
//    return result;
// }
// function combinatin(n , k){
//    return factorial(n)/(factorial(k)*factorial(n-k));

// }
// const n = parseInt(prompt("enter the n: "));
// const k = parseInt(prompt("enter the k: "));
// const players = combinatin(n, k);
// console.log(players);





// function findCommonRatioAndFirstTerm(sum, product) {
//    function solveQuadratic(a, b, c) {
//        let discriminant = b * b - 4 * a * c;
//        if (discriminant < 0) {
//            return []; // No real roots
//        }
//        let sqrtDiscriminant = Math.sqrt(discriminant);
//        let root1 = (-b + sqrtDiscriminant) / (2 * a);
//        let root2 = (-b - sqrtDiscriminant) / (2 * a);
//        return [root1, root2];
//    }

//    // Let a = (product / r^3)^(1/3)
//    // Substitute into the sum equation:
//    // (product / r^3)^(1/3) (1 + r + r^2) = sum
//    // Let k = sum / (product / r^3)^(1/3)
//    let k = Math.cbrt(product);
//    let sumK = sum / k;

//    // k * (1 + r + r^2) = sum
//    // k * r^2 + k * r + k - sum = 0
//    let a = 1;
//    let b = 1;
//    let c = 1 - sumK;

//    let roots = solveQuadratic(a, b, c);
//    if (roots.length === 0) {
//        return { commonRatios: [], firstTerm: null };
//    }

//    // Calculate the first term for each common ratio
//    let commonRatios = roots.map(r => r);
//    let firstTerms = commonRatios.map(r => Math.cbrt(product) / (r * r));

//    return { commonRatios, firstTerms };
// }

// // Example usage:
// let sum = 21 / 2;
// let product = 27;
// let result = findCommonRatioAndFirstTerm(sum, product);

// console.log("Common ratios:", result.commonRatios);
// console.log("First terms:", result.firstTerms);



// var isMatch = function(s, p) {
//    let result = '';
//    let i = 0;
//    let j = 0;
//    while(i<s.length){
//        while(j<p.length){
//            if(s[i]===p[j]){
//            i++;
//            j++;
//            }
//            else{
//                result = true;

//            }
//        }
//    }
//    return result 

// };
// const result = isMatch(s,p);
// console.log(result);

// var isMatch = function(s, p) {
//    let result = false;
//    let i = 0;
//    let j = 0;

//    while (i < s.length) {
//        while (j < p.length) {
//            if (s[i] === p[j]) {
//                i++;
//                j++;
//            } else {
//                result = true;
//                break;
//            }
//        }
//       //  if (j === p.length) {
//       //      result = true;
//       //  }
//        i++;
//    }

//    return result;
// };

// const s = "aa";
// const p = "a";
// const result = isMatch(s, p);
// console.log(result); // Output: false

// var threeSumClosest = function(nums, target) {
//     let closestSum = Number.MAX_SAFE_INTEGER; // Initialize closest sum with a large number
//     let minDiff = Number.MAX_SAFE_INTEGER; // Initialize minimum difference with a large number

//     // Iterate through the array to consider each triplet
//     for (let i = 0; i < nums.length - 2; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 let currentSum = nums[i] + nums[j] + nums[k]; // Calculate the sum of the current triplet
//                 let currentDiff = Math.abs(currentSum - target); // Calculate the difference from the target

//                 if (currentDiff < minDiff) { // If this triplet is closer to the target, update the closest sum
//                     minDiff = currentDiff;
//                     closestSum = currentSum;
//                 }
//             }
//         }
//     }

//     return closestSum; // Return the closest sum found
// };

// // Example usage:
// const nums = [-1, 2, 1, -4];
// const target = 1;
// const result = threeSumClosest(nums, target);
// console.log(result); // Output: 2


