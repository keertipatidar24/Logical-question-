
//next question rcb vs CSk[start 135]
//questin no 1

// let x=parseInt(prompt("enter the x:"));
// let y=parseInt(prompt("enter the y: "));
// //rcb is qulaifid this match 18 runs;
// R = x-y;
// if(R>=18){
//     console.log("rcb");
// }
// else{
//     console.log("csk")

// }

// Morning Run [start 134]
//question no[1]
// Chef wants to run at least 1000 meters to reach his fitness goal.
// There's a rectangular park nearby, with a length of X meters and a width of
//  Y meters.
// Can Chef complete his goal by running one loop around the park? 
// (Loop meaning running the entire path around the edge of the park.)
// Input Format
//     The only line of input will contain 2 space-separated integers X and Y, 
//     the length and the width of the rectangular park.
// Output Format
// Print "YES" if Chef will be able to complete his fitness goal, otherwise print
//"NO"
//  (without quotes).
// You may print each character of the output in either uppercase or lowercase 
// (for example, the strings YES, yEs, yes, and yeS will all be treated as identical

// money double[start 134]
// question no[2]

//const prompt=require("prompt-sync")();
// let x=parseInt(prompt("Enter the value of x: "));
// let y=parseInt(prompt("Enter the value of y: "));
// s=2*(x+y);
// if(s>=1000){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// let x=parseInt(prompt("enter the X:"));
// let y=parseInt(prompt("enter the y: "));
// let p = 0;
// for(i =1; i<=y; i++){
//     s = x*2;
//     x= p+s;   
// }
// console.log(x);

// let x=parseInt(prompt("enter the x: "));
// let y=parseInt(prompt("enter the y: "));
//  let p = 0;
// for(i = 1; i<=y; i++){
    
//     s = y*(x + 1000);   
// }
// console.log(s);

//question no[starter 133]
//question no[1];
// Chef baked a full tray of donuts, but couldn't resist and ate them all!

// The tray had X donuts, and each donut contains Y calories.
// How many calories did Chef consume in total?
// Input Format

// The only line of input contains two space-separated integers X and Y - 
//the number of donuts and the calorie count of each one.
// Output Format

// Print a single integer: the total number of calories consumed by Chef.
// let X=parseInt(prompt("enter the X:"));
// let y = parseInt(prompt("enter the y:"));
// s = X*y;
// console.log(s)
//question no[strater`133]
//queatio no[2]

// After a long and fulfilling career, Chef has decided to retire to a farm out in the countryside.

// This farm has several cows and chickens, but Chef doesn't know exactly how many of each there are — he can only see that there are NN legs in total across all the animals.
// Note that each cow has 44 legs and each chicken has 2 legs, and it is guaranteed that N is even.

// With NN legs in total, what's the minimum possible number of animals that can be present on the farm?
// Input Format

//     The first line of input will contain a single integer TT, denoting the number of test cases.
//     The first and only line of each test case will contain a single integer NN - the number of legs.

// Output Format

// For each test case, output on a new line the minimum possible number of animals that can be present on the farm.
// let n=parseInt(prompt("enter the n:"));
// if(n===2){
//     console.log("1");
// }else if(n===4){
//     console.log("1");

// }else if(n===6){
//     console.log("2");
// // }


//question no[132]
//question no[1];
// Chef wants to buy 22 ice creams, each costing XX dollars, for him and Chefina.
// However, he only has YY dollars with him. Will he be able to buy 22 ice creams?
// Input Format

//     The only line of input will contain 22 space-separated integers XX and YY, the price of each ice cream and the money Chef has.


// Print YES if Chef will be able to buy two ice creams, otherwise print NO.

// You may print each character of the string in uppercase or lowercase (for example, the strings YES, yEs, yes, and yeS will all be treated as identical).

// let x=parseInt(prompt("enter the x: "));
// let y =parseInt(prompt("enter the y: "));
// if(2*x===y){
//     console.log("yes");

// }else{
//     console.log("no");
// }


//question no[starters132]
//question no[2];


// You just travelled in a cab and you owe the driver XX dollars.
// However, you only have a 100 dollar bill, and the driver only has 10 dollar bills with which he can pay you back.

// You hand the 100100 dollar bill to the driver. Find the maximum amount which the driver 
//can pay back without giving more than he owes

// let x=parseInt(prompt("enter the x: "));
// let y=parseInt(prompt("enter the y: "));
// //couster have 100 doller;
// //driver have only 10 doller;
// if(y<=x){
//     s = x-y;
//     c = Math.floor(s/10);
//     p = c*10;
   

// }
// console.log(p);


// const prompt=require("prompt-sync")();
// let x = parseInt(prompt("enter the x: "));
// let n=parseInt(prompt("enter the n: "));
// let a = [];
// for(i = 0; i<n; i++){
//     let  num =parseFloat(prompt(`enter the num: $(i+1)`));
//     a[i] = num;

// }
// if(a[0]>=x){
//     if(a[0]<=a[1]){
//         console.log(a[1]);
//     }else{
//         console.log(a[0]);
//     }
// }else if(a[i]>=x){
//     cost = a[0]+a[1];
    
// }
// console.log(cost);
// let a = parseInt(prompt("enter the a: "));
// let b =parseInt(prompt("enter the b: "));
// let sum = 0;
// while(a>0){
//     r = a%10;
//     sum = sum*10+r;
//     a = Math.floor(a/10);
// }
// let sum1 = 0;
// while(b>0){
//     R = b%10;
//     sum1 = sum1*10+R;
//     b = Math.floor(b/10);
// }
// if(sum>sum1){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// let n=parseInt(prompt("enter the n: "));
// let a = [];
// for(i = 0; i<n; i++){
//     let num=parseFloat(prompt("enter the num:$(i+1) "));
//     a[i] = num;
// }
// let m=0;
// for(i = 0; i<n; i++){
//     if(a[i] == a[i]-1){
// }else if(a[i]==a[i]+1){
//     a[m] = a[i];

// }
// }
// for(i =0; i<n; i++){
//     console.log(a[i]);
// }

// let x=parseInt(prompt("enter the x: "));
// let y=parseInt(prompt("enter the y: "));
// if(x>y){
//     console.log("freekick");
// }
// else{
//     console.log("penlty session");
// }

// let a=parseInt(prompt("enter the a: "));
// let b=parseInt(prompt("enter the b: "));
// let k=parseInt(prompt("enter the k: "));
// let x = a;

// let n=parseInt(prompt("enter the n: "));
// let sum = 0;
// for(i = 1; i<=n; i++){
//     let Ai=parseInt(prompt("enter the Ai: "));
//     sum = sum+Ai;
// }
// let s = 0;
// for(i = 1; i<=n; i++){
//     let Di = parseInt(prompt("enter the Di: "));
//     s = s+ Di;
// }
// let p = 0;
// for(i = 1; i<=n; i++){
//     let Ap=parseInt(prompt("enter the Ap: "));
//     p = p+Ap;
// }
// let W = 0;
// for(i = 1; i<=n;i++){
//     let Dp = parseInt(prompt("enter the Dp: "));
//     W = W + Dp;
// }
// if(sum>p&&s>W){
//     console.log("A")
// }else if(sum == p&&s==w){
//     console.log("draw")
// }else {
//     console.log("P");
// }

// let n=parseInt(prompt("eter the n: "));
// let a = [];
// for(i = 0; i<n; i++){
//     let num=parseFloat(prompt("enter the num: $(i+1)"));
//     a[i] = num;

// }
// let p = 1;
// for (i = 0; i<n; i++){
//     p = p*a[i];
// }
// let k=parseInt(prompt("enter the k: "));
// if(p===k**8){
//     console.log("yes");
// }else{
//     console.log("no");
// }
//question [start 128];
// let x=parseInt(prompt("enter the x: "));
// let y=parseInt(prompt("enter the y: "));
// z  = x+y;
// if(z>=2000){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }
 

// Julius Caesar was warned by a soothsayer
//  to be wary of the ides of March — namely, the 15-th of March.

// Today is the NN-th day of March. Your task is to tell 
// Caesar whether it is the ides of March, so that he can take extra safety precautions if necessary.
// let n=parseInt(prompt("enter the n: "));
// if(n===15){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// let a=parseInt(prompt("enter the a: "));
// let b=parseInt(prompt("enter the b: "));
// let c = 0;
// for(i=0; i<=c; i++){
// if(a>=b+10){
//     console.log(c);
// }else{
//     c++;
//     a = a+3;
// }
// }

// question no[satart 126];
//question no[1];
// Chef is feeling the heat this summer and wants to switch on the Air Conditioning all the time, but since he doesn't want to harm the environment much, he only switches it on when the room temperature is strictly greater than 3030 degrees celsius.

// Given the room temperature, you need to find whether Chef will switch on the air conditioning or not
     
// let c=parseInt(prompt("enter the c: "));
// //temperature is more than 30 degree 
// //chef will trun of tha AC;
// if(c>30){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }

//question no [starter 126 ]
//question no[2];
// Chef is playing a game consisting of N rounds. In each round he rolls a regular six faced dice.

// He starts with an initial score of 0. Let the number rolled by him in a particular round be XX.
// If this is not the first round and the previous number rolled was 11, Chef will2⋅X to his score, otherwise he will add X to his score.

// For example, if the game has 66 rounds and the rolls are [2,1,6,1,1,4] in the given order, his score will be 2+1+(2⋅6)+1+(2⋅1)+(2⋅4)=262+1+(2⋅6)+1+(2⋅1)+(2⋅4)=26.

// Find the maximum possible score he can obtain after N rounds.
// let n=parseInt(prompt("enter the n: "));
// let a = [];
// for(i =0; i<n; i++){
//     let num=parseFloat(prompt("enter the num: "));
//     a[i] = num ;

// }
// let s = 0;
// for(i =0; i<n-1; i++){
//     if(a[i]===1){
//         c = a[i+1]*2;
//         s = s + a[i]+c;
//     }
//     else{
//         s = s+a[i+1];
//     }
// }
// console.log(s);

//question no[starter 126];
//question no[3]

// Chef knows the projected sales of his store for the next NN days. The projected sales of the ithith day is AiAi​.

// On any particular day, Chef can announce that his shop is closing which will double his sales for that day, but since Chef is a man of his word, he won't make any sale after that day.

// Find the maximum possible total sales which Chef can make.
// Input Format

//     The first line of input will contain a single integer TT, denoting the number of test cases.
//     Each test case consists of multiple lines of input.
//         The first line of each test case contains an integer NN — the number of days.
//         The second line consists of NN space-separated integers denoting the projected sales of each day.

//*** */ let n=parseInt(prompt("enter the n: "));
// let a = [];
// for(i = 0; i<n; i++){
//     let num=parseFloat(prompt("enter the num: "));
//     a[i] = num;
// }
// let s = 0;
// for(i =0; i<n; i++){
//     if(a[i]===p){
//         c = s + a[i]*2;
//         console.log(c);

//     }
//     else {
//         s = s+a[i];

//     }
// }

//question no[starter 125]
//question no[1];
// Alice is going for a drive. During her drive, she reached a maximum speed of SS km/hr.

// As per the rules of the government, the speed of the vehicle must not exceed 4040 km/hr, otherwise the person will be fined.

// You need to tell whether Alice will be fined or no
// let n=parseInt(prompt("enter the n: "));
// let s =parseInt(prompt("enter the s: "));
// if(s>n){
//     console.log("yes fined");
// }else{
//     console.log("not fined");
// }


//question no[starter 125]
//question no[2];
// Schools of Chefland use the 50−5050−50 rule to grade their students. As per the rule , students are awarded :

//     Z grade, if their attendance is strictly less than 50%50% .
//     F grade, if they score strictly less than 50%50% marks, given that their attendance is greater than or equal to 50%50% .
//     A grade, otherwise.

// You are given two integers, XX and YY, denoting the percentage of attendance and percentage of marks obtained by Alice. What grade will Alice get?
// let x=parseInt(prompt("enter the x: "));
// let y=parseInt(prompt("enter the y: "));
// if(x>=50&&y>=50){
//     console.log("grade A");

// }else if(x>=50){
//     console.log("grade F")
// }
// else{
//     console.log("grade z");
// }

// let n=parseInt(prompt("enter the n: "));
// let a = [];
// for(i=1; i<=n; i++){
//     let num=parseFloat(prompt("enter the num: "));
//     a[i] = num; 
// }
// let c = 0;
// for(i = 1; i<n-1; i++){
//     if(a[i]>a[i+1]){
//         if(a[i+1]<a[i+2]){
//         c = 0;
//     }else{
//         t = a[i];
//         a[i] = a[i+1];
//         a[i+1]= t;
//         c++;

//     }

//     }else{
//         t = a[i];
//         a[i]=a[i+1];
//         a[i+1]= t;
//         c++;
//     }
// }
// console.log(c);

 //question no[starter 124];
 //question no[1] ;

// Mamalesh likes to drink mango lassi when it's hot, and only when it's hot. If (and only if) the temperature on a given day is strictly greater than 3535 degrees, Mamalesh will drink mango lassi.

// Mamalesh sees that today's temperature is XX degrees Celsius. Will he drink mango lassi today?
// Print "Yes" if he will, and "No" otherwise (without quotes).
// let n=parseInt(prompt("enter the n: "));
// if(n>35){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }


  //question no[starter 124]
  //question no[3];
//Binary party
// let n=parseInt(prompt("Enter the value of n: "));
// let B=0;b=1;
// while(n>0){
//     k=n%2;
//     B=B+b*k;
//     n=Math.floor(n/2);
//     b=b*10;
// }let s=0;
// while(B>0){
//     a=B%10;
//     B=Math.floor(B/10);
//     s=s+a;
// }if(s%2==0){
//     console.log("even")
// }else{
//     console.log("odd");
// }
//question no[3]
//interview question ;


// let n=parseInt(prompt("enter the value of n: "));
// let x=parseInt(prompt("Enter the value of x: "));
// //Ai=freshness value
// //Bi=cost of items
// let a = [];
// for(i = 0; i<n; i++){
//     let num =parseFloat(prompt("enter the num: "));
//     a[i] = num;
// }
// let b =[];
// for(j = 0; j<n; j++){
//     let num=parseFloat(prompt("enter the num: "));
//     b[j] = num;
// }
// let g = 0;
// for( i = 0; i<n; i++){
//     if(a[i]>x){
//         console.log(b[g]);
        
//     }
//     g++;
// }
   
//question no[starters 123]
//que [2] Room allocation 

// let n=parseInt(prompt("enter the n: "));
// let a = [];
// for( i =0 ; i<n; i++){
//     let num =parseFloat(prompt("enter the num: "));
//     a[i] = num;
// }
// let r = 0;
// for(i = 0; i<n; i++){
//     r = r+a[i];
    
// }
// let p = Math.floor(r/2);
// console.log(p);

//quesion no[starter123]
//question no [3];
//question no maximise adjecent sum;

// let n=parseInt(prompt("enter the n: "));
// let a = [];
// for( i = 0; i<n ; i++ ){
//     let num=parseFloat(prompt("ente the num:"));
//     a[i] = num; 
// }
// for(i = 0; i<n-1; i++){
//     let flag = 0; 
//     for( j=0; j<n-i-1; j++){
//         if(a[j]>a[j+1]){
//             temp = a[j];
//             a[j] = a[j+1];
//             a[j+1] = temp;
//             flag = 1;
//         }
//     }

//   if(flag ==0){
//         let s = 0;
//         for(i =0; i<n-1; i++){
//             s = s +a[i] +a[i+1];

//         }
//         console.log(s);
//     }

// }

//***************[{Fist link}]******************
//intiorer design;
 const prompt = require("prompt-sync")();
// let x= parseInt(prompt("enter the x: "));
// let y= parseInt(prompt("enter the y: "));
// let x1= parseInt(prompt("enter the x1: "));
// let y1= parseInt(prompt("enter the y1: "));
// let sum = 0;
// sum = x + y;
// let sum1 = x1 + y1;
// if(sum>sum1){
//   console.log(sum1);
// }else{
//   console.log(sum);
//  }
 

//decrement and increment ;
// let n= parseInt(prompt("enter the n: "));
// if(n%4==0){
//   console.log(n+1);
// }else{
//   console.log(n-1);
// }

//minimim number of Conis ;
// let n = parseInt(prompt("enter the n: "));
// let c = 0;
// while(n>0){
//   if(n%10==0){
//     c++;
//   }else if(n%5==0){
//     c++;
//   }else{
//     console.log(-1);
    
//   }
//   n = n - 10;
// }
// console.log(c);

//Finding square roots;
//let n = parseInt(prompt("enter the n: "));








// cadies hold;
// let n= parseInt(prompt("enter the n: "));
// let k =parseInt(prompt("enter the k: "));
// let m = parseInt(prompt("enter the m: "));
// let s = 0;
// while(n>0){
//   let c = 0;
//   for(i = 1; i<=k; i++){
//     c = c + m;
//   }
//   s++;
//   n = n-c;

// }
// console.log(s);

//Alternative square pattern
// let n = parseInt(prompt("enter the n: "));
// let m = parseInt(prompt("enter the m: "));
// let a = 1;
// for(i = 1; i<=n; i++){
//   line = '';
//   for(j = 1; j<=m; j++){
//     if(i%2==0){
//       line += a+' ';
//       a--;
//     }else{
//       line+= a+' ';
//       a++;

//     }
//   }
//   if(i%2==0){
//     a = a+(n+1);
//   }else{
//     a = a+(n-1);
//   }
//   console.log(line);
// }

//life the unvirse,and everything;
// let n=parseInt(prompt("enter the n: "));
// let m = parseInt(prompt("enter the m: "));
// for(i = 1; i<=n; i++){
//   let a = parseInt(prompt("enter the a: "));
//   if(a==m){
//     console.log( );
//     break;
//   }else{
//     console.log(a);
//   }
// }


//last level ;
// let x = parseInt(prompt("enter the x:"));
// let y = parseInt(prompt("enter the y: "));
// let z = parseInt(prompt("enter the z: "));
// let p = parseInt(prompt("enter the p: "));
// if(x<=p){
//   let totalTime = x*y;
//   console.log(totalTime);
// }else{
// let totalTime = x * y;
// let breakTime = Math.floor(x / p) * z;

// console.log(totalTime + breakTime);

// }



//small factorial
// let n = parseInt(prompt("enter the n: "));
// let p = 1;
// while(n>0){
//   p = p*n;
//   n--;
// }
// console.log(p);

//turbo sort;
// let n = parseInt(prompt("enter the n:"));
// let a =[];
// for(i = 0; i<n; i++){
//   let num = parseFloat(prompt("enter the num: "));
//   a[i] = num;
// }
// for(i =0; i<n-1; i++){
//   let flag = 0;
//   for(j =0; j<n-i-1; j++){
//     if(a[j]>a[j+1]){
//       temp = a[j];
//       a[j]= a[j+1];
//       a[j+1] = temp;
//       flag = 1;
//     }
//   }
//   if(flag ==0){
//     console.log("sort");
//   }

// }
// for(i = 0; i<n; i++){
//   console.log(a[i]);
// }


//***************[{secnd link}];*****************
//Fitness;
// let x=parseInt(prompt("enter the x: "));
// let y = parseInt(prompt("enter the y: "));
// let p = 1;
// for(i = 1; i<=y; i++){
//   p = x*i;
// }
// s = p*5;
// console.log(s);


//minimum coins;
// let a = 1;
// let x=parseInt(prompt("enter the x: "));
// a = x%10;
// console.log(a);

//Age limit;let n= parseInt(prompt("enter the n: "));
// let k =parseInt(prompt("enter the k: "));
// let m = parseInt(prompt("enter the m: "));
// let s = 0;
// while(n>0){
//   let c = 0;
//   for(i = 1; i<=k; i++){
//     c = c + m;
//   }
//   s++;
//   n = n-c;

// }
// console.log(s);
// let x = parseInt(prompt("enter the x: "));
// let y = parseInt(prompt("enter the y: "));
// let a = parseInt(prompt("enter the a: "));
// if(a>x&&a<y){
//   console.log("YES");
// }
// else{
//   console.log("NO");
// }

// let A = parseInt(prompt("enter the A: "));
// let B = parseInt(prompt("enter the B : "));
// let C = parseInt(prompt("enter the C: "));
// if(A>B&&A>C){
//   console.log("alice");
// }else if(B>A&&B>C){
//   console.log("bobs");
// }else if(C>A&&C>B){
//   console.log("charlie");
// }

//let a = parseInt(prompt("enter the a: "));
// let b= parseInt(prompt("enter the b: "));
// let c = parseInt(prompt("enter the c: "));
// let d = parseInt(prompt("enter the d: "));
// let s = 0;
// if(a>b){
//   max = a;
// }else{
//   max =b;
// }if(c>d){
//   max1 = c;
//let n= parseInt(prompt("enter the n:"));
// let x = parseInt(prompt("ente rthe x:"));
// let s = 3*x;
// l = Math.floor(n/s);
// console.log(l);
// }else{
//   max1 = d;
// }
// s = max+max1;
// console.log(s);
 
//chef and candies;
// n = number of children;
// x = number of candy;
// let n =parseInt(prompt("enter the n:"));
// let x =parseInt(prompt("enter the x: "));
// if(x>n){
//   console.log(0);
// let n= parseInt(prompt("enter the n:"));
// let x = parseInt(prompt("ente rthe x:"));
// let s = 3*x;
// l = Math.floor(n/s);
// console.log(l);
// }
// else{
//   let c = 0;
//   while(n>x){
//     s = n - x;
//     let r = 0;
//     while(s>0){
//     t = 1*4;
//     c++;
//     r = r+t;
//     s = s - t;
//     }
//     n = n - r;
    

//   }console.log(c);
// }

//chef and his apps
// let s = parseInt(prompt("enter the s: "));
// let x = parseInt(prompt("enter the x: "));
// let y = parseInt(prompt("enter the y: "));
// let z = parseInt(prompt("enter the z: "));
// t = x+ y + z;
// if(t<s){
//   console.log(0);
// }else if(Math.min(x,y)>=z){
//   console.log(1);
// }
// else{
//   console.log(2);
// }
  //chef drink tea;
// let x = parseInt(prompt("enter the x: "));
// let y = parseInt(prompt("enter the y: "));
// let z = parseInt(prompt("enter the z: "));
// if(y>x){
//   console.log(z);
// }else if(x%y==0){
//   n = Math.floor(x/y);
//   k = n*z;
//   console.log(k);

// }else{
//   n = Math.floor(x/y);
//   t = n*z+z;
//   console.log(t);
// }


//To many floor;    
// let x = parseInt(prompt("enter the x: "));
// let y = parseInt(prompt("ewnter the y: "));
// chef = Math.floor((x-1)/10) + 1;
// chefnia = Math.floor((y-1)/10)+1;
// console.log(chef-chefnia);

//Playlist;
// let n= parseInt(prompt("enter the n:"));
// let x = parseInt(prompt("ente rthe x:"));
// let s = 3*x;
// l = Math.floor(n/s);
// console.log(l);

//***************[{third link}]****************
//lucky four;
// let n = parseInt(prompt("enter the n: "));
// //let p = parseInt(prompt("enter the p: "));
// let c = 0;
// while(n>0){
//   if(n%10==4){
//   c = c+1;
//   n = Math.floor(n/10);
// }else{
//   n = Math.floor(n/10);
// }
// }
// console.log(c);


//valid triangle;
// let A = parseInt(prompt("enter the A: "));
// let B = parseInt(prompt("enter the B: "));
// let C = parseInt(prompt("enter the C: "));
// if(A>0&&B>0&&C>0){
//   s = A+B+C;
//   if(s===180){
//     console.log("YES");
//   }else{
//     console.log("No");
//   }
// }else{
//   console.log("No");
// }


//sum of all digit;
// let n = parseInt(prompt("enter the n: "));
// let sum = 0;
// while(n>0){
//   r = n%10;
//   sum = sum + r;
//   n = Math.floor(n/10);
// }
// console.log(sum);


//number mirrior;
// let n = parseInt(prompt("enter the n: "));
// let c = n;
// console.log(c);


//find reminder;
// let a = parseInt(prompt("enter the a: "));
// let b = parseInt(prompt("enter the b: "));
// let s = a%b;
// console.log(s);\


//Enormous Input Test
// let n = parseInt(prompt("enter the n: "));
// let k = parseInt(prompt("enter the k: "));
// let c = 0;
// for(i = 1; i<=n; i++){
//   let a = parseInt(prompt("enter the a: "));
//   if(a%k==0){
//     c++;
//   }

// }
// console.log(c);

//first and last digit;
// let n = parseInt(prompt("enter the n: "));
// d = n%10;
// while(n>10){
//   n = Math.floor(n/10);
// }
// console.log(d+n);

//add to number;
// let a = parseInt(prompt("enter the a: "));
// let b = parseInt(prompt("enter the b: "));
// let sum = a+b;,
// let inputstring=prompt("enter the string ");
// let palindromestring = "";
// console.log(sum);

//silp
// let n = parseInt(prom("enter the n: "));
// for( i = 0 ; i<n; i++)

//chef and operater;
// let a = parseInt(prompt("enter the a: "));
// let b = parseInt(prompt("enter the b: "));
// if(a == b){
//   console.log("=");
// }else if(a<b){
//   console.log("<");
// }else{
//   console.log(">");
// }

//ATM;
// let x = parseInt(prompt("enter the x: "));
// let y = parseInt(prompt("enter the y: "));
//   let balance = y;
//   if (x % 5 === 0 && x <= y - 0.5) {
//     balance -= x + 0.5;
//   }
//   console.log(balance.toFixed(2));

// let n = parseInt(prompt("enter the n: "));
// let p = parseInt(prompt("enter the p: "));
// if(n==p){
//   console.log("perfect");
// }else if(n<p){
//   console.log("less")
// }else{
//   console.log("more")
// }

//codechef question 122
// let n = parseInt(prompt("enter the n: "));
// let a = [];
// for(i = 0; i<n; i++){
//   let num=parseInt(prompt("enter the num: "));
//   a[i] = num;
// }
// let assu = 0;
// for(i = 0; i<n; i++){
//   if(a[i]>4){
//     assu = 1;
//   }else{
//     assu = 0;
//   }
// }
// if(assu==1){
//   console.log("yes");
// }else{
//   console.log("no");
// }

//[question string]Take a string or an input reverse the string and print it.

// let inputstring = prompt("Enter a string: ");
// let reversedString = "";

// for (let i = inputstring.length - 1; i >= 0; i--) {
//   reversedString += inputstring[i];
// }

// console.log("Reversed string:", reversedString);

//[question string] take string or an input and print the alternative character of string form Last 

// let inputstring = prompt("enter the string");
// let Alternativestring = "";
// for(let i = inputstring.length-1; i>=0 ; i-=2){
//   Alternativestring += inputstring[i];
// }
// console.log("Alternative string:",Alternativestring);



// let inputstring = prompt("enter the string");//"racecar"; // Replace with your string
// let isPalindrome = true;
// let len = inputstring.length;

// for (let i = 0; i < len / 2; i++) {
//     if (inputstring[i] !== inputstring[len - 1 - i]) {
//         isPalindrome = false;
//         break;
//     }
// }

// if (isPalindrome) {
//     console.log("The string is a palindrome.");
// } else {
//     console.log("The string is not a palindrome.");
// }
// let str = "keerti"; // Replace with your string
// let isPalindrome = true;
// let len = str.length;

// for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//         isPalindrome = false;
//         break;
//     }
// }

// if (isPalindrome) {
//     console.log("The string is a palindrome.");
// } else {
//     console.log("The string is not a palindrome.");
// }

//4 check if the given character is pesent in that given sting or Not;
// let inputstring =prompt("enter the string : ");
// let  s = prompt("enter the sting:");
// let len = inputstring.length;

// for( i = 0; i<inputstring.length; i++){
//   if(inputstring[i]===s){
//     console.log("yes");
//     break;
//   }
// }
// console.log("not");

//question no [121];
// let n= parseInt(prompt("enter the n: "));
// let m = parseInt(prompt("enter the m: "));
// if(n<m){
//   console.log("yes");
// }
// else{
//   console.log("no");
// }
// question no[121];
// let t = parseInt(prompt("enter the t: "));
// for (i = 0; i<t;i++){
//   let n = parseInt(prompt("enter the n: "));
//   //calculate tha o of people
//   maxpeople = Math.ceil(n/3);
//   minpeople = Math.ceil(n/2);
//   console.log(maxpeople+=" " +minpeople);
  
// }

// let t = parseInt(prompt("enter the t: "));
// for( i = 0; i<t; i++){
//   let n = parseInt(prompt("enter the n: "));
//   let a = [];
//   for(i = 0; i<n; i++){
//     let num = parseFloat(prompt("enter the num: "));
//     a[i] = num; 

//   }
//   let assu = t;
//   for(let i = 0; i<n-1; i++){
//     for(j =0; j<n-i-1; j++){
    
//     if(a[j]<a[j+1]){
//       assu = t;
//     }else{
//       t = a[j];
//       a[j] = a[j+2];
//       a[j+2]=t
//     }
//     console.log("yes")

//   }
  
// }
// console.log("no")
// }


// Read the number of test cases
// let T = parseInt(prompt("enter the T: "));

// // Iterate through each test case
// for (let i = 0; i < T; i++) {
//   // Read the size of the array
//   let N = parseInt(prompt("eter the N: "));

//   // Read the elements of the array
//   let A = parseFloat(prompt("enter the A: "))
//   // Check if the array can be sorted
//   let canSort = true;
//   for (let j = 1; j < N; j++) {
//     if (A[j] < A[j-1]) {
//       if (j > 1 && A[j] < A[j-2]) {
//         canSort = false;
//         break;
//       }
//     }
//   }

//   // Output the result
//   console.log(canSort ? 'YES' : 'NO');
// }
 
// const  n=parseInt(prompt("enter the n: "));
// const p=0;
// const h = 3;
// var sum=0;
// for(let i=0;i<n;i++)
//   {
//     sum=sum+i;
//   }
//   console.log(sum);
//   console.log(p);

// let a = parseInt(prompt("enter the a:"));
// let b = parseInt(prompt("enter the b: "));
// let n = parseInt(prompt("enter the n: "));
// while(n>=0){
//   a +=b;
//   n--;
// }
// console.log(a);

//[string comparision]
// let text1 =(prompt("enter the text1: "));
// let text2 = (prompt("enter the text2: "));
// result = text1<text2;

// console.log(result);
//[string addition]

//[string number addtion];
// let text1=(prompt("enter the textlet text1 = (prompt("enter the text1: "));
// let text2 = (prompt("enter the text2: "));
// result = text1+text2;
// console.log(result);1: "));
// let a = parseInt(prompt("enter the a: "));
// result= text1+a;
// console.log(result);

// let a = parseInt(prompt("enter the a: "));
// let b = parseInt(prompt("enter the b: "));
// r = a>>>b;
// console.log(r);

// var a = 5, b = 10, c = "5";
// var x = a;
// console.log(a === c);
// console.log(a == c);
// console.log(a == x);
// console.log(a != b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a >= c);
// console.log(a <= c);

// const exp = "mango";
// switch(exp){
//   case"orange":
//   console.log("orang is 23 pound");
//   break;
//   case"mango":
//   console.log("mango is 43 pound");
//   break;
//   case"juice":
//   console.log(" 10rs per");
//   break; 
//   default: console.log("sorry the exp is not found");
// }

// const exp = "47";
// switch(exp){
//   case "23":
//   console.log(exp);
//   break;
//   case "43":
//   console.log(exp);
//   break;
//   case "34":
//   console.log(exp);
//   break;
//   default:console.log("sorry of this number");

// }



//{{{{{{Date 08/08/2024}}}}}}
// function totalmedal(){
//   let s = a+b+c;
//   let count = 0;
//   for(i = s; i<n; i++){
//     count++;
  
//   }
//   return count;
// }
// const a = parseInt(prompt("enter the num: "));
// const b = parseInt(prompt("enter the num: "));
// const c = parseInt(prompt("enter the num: "));
// const n = parseInt(prompt("enter the num: "));
// const count = totalmedal();
// console.log(count);


// function equalscore(a,b,c,match){
// let min = Math.min(a,b,c);
// let score = match+min;
// let result = "no";

//   if(a==b||b==c||a==score|| b==score){
//     result="yes";
//   }
//   return result;
// }
// const a = parseInt(prompt("enter the num: "));
// const b= parseInt(prompt("ente the num: "));
// const c = parseInt(prompt("enter the num: "));
// const match = parseInt(prompt("enetr the num: "));
// const result = equalscore(a,b,c,match);
// console.log(result);
    

















  











