// const now = new Date();
// console.log(now);
// const d = new Date("03 aug 2024");
// console.log(d);
// const date = new Date("2024-08-03");
// console.log(date);

//{{{{{{{{{{{{{{{using different methode}}}}}}}}}}}}}}}
//date foormate {year, month,day,hours,minute,second,and , millisecond}
// const d = new Date(2018, 15, 34,10,33,30);
// console.log(d);

// const d = new Date();
// console.log(d.toString());

// const d = new Date();
// // d.toUTCString();
// console.log(d.toUTCString());

// const d = new Date();
// console.log(d.toDateString());


// const d = new Date();
// console.log(d.toISOString());

// const d = new Date();
// console.log(d.toJSON());

// const d = new Date();
// console.log(d.toLocaleDateString());

// const d = new Date();
// d.getDay();
// d.getDate();
// d.getMinutes();
// d.getTime();
// d.getMilliseconds();
// d.getMonth();
// console.log(d);
// d.setDate(23);
// d.setMonth(0);
// d.setFullYear(1900);
// d.getMinutes(2);
// d.setHours(3);
// d.setSeconds(3);
// console.log(d);

// var findMaxConsecutiveOnes = function(nums = [1,0,1,1,0,1]) {
//     for(i =0; i<nums.length; i++){
//         let count = 0;
//         if(nums[i]==1){
//             count++;
//         }
//         else{
//             count = 0;
//         }

//     }
//     return count;
    
// };
// const count = findMaxConsecutiveOnes(nums =[1,0,1,1,0,1]);
// console.log(count);
// var findGCD = function(nums = [2,3,4,7,6]) {
//     let smallest = nums[0];
//     let largest = nums[0];

//     // Loop to find smallest and largest elements
//     for(let i = 1; i < nums.length; i++){
//         if(nums[i] < smallest){
//             smallest = nums[i];
//         }
//         if(nums[i] > largest){
//             largest = nums[i];
//         }
//     }

//     // Helper function to find GCD of two numbers
//     const gcd = (a, b) => {
//         while (b !== 0) {
//             let temp = b;
//             b = a % b;
//             a = temp;
//         }
//         return a;
//     }

//     return gcd(smallest, largest);
// };

// const input = findGCD([2, 3, 4, 7, 6]);
// console.log(input); // Should output the GCD of 2 and 7, which is 1

// let sum = 0; 
// var addTwoNumbers = function(l1, l2) {
//     let result = [];
//     let p = 0;
//    for(i = 0; i<l1.length; i++){
//      for(j = 0 ; j<l2.length; i++){
//        sum = l1[i] +l2[j];
//        result[p] = sum;
//        p++;
//     }
//    }
//    return result;
// };
// const result = addTwoNumbers([2,3,4] , [3,4,5]);
// console.log(result[p]);

var findMedianSortedArrays = function(nums1, nums2) {
  let merge = [];
  let i = 0; 
  let j = 0;
  let k = 0;

  // Merge two sorted arrays
  while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
          merge[k] = nums1[i];
          k++;
          i++;
      } else {
          merge[k] = nums2[j];
          k++;
          j++;
      }
  }

  // If there are remaining elements in nums1
  while (i < nums1.length) {
      merge[k] = nums1[i];
      k++;
      i++;
  }

  // If there are remaining elements in nums2
  while (j < nums2.length) {
      merge[k] = nums2[j];
      k++;
      j++;
  }

  // Calculate the median
  let sum = merge.length;
  if (sum % 2 === 0) {
      // For even length, median is the average of the two middle elements
      return (merge[sum / 2 - 1] + merge[sum / 2]) / 2;
  } else {
      // For odd length, median is the middle element
      return merge[Math.floor(sum / 2)];
  }
};
const merge = findMedianSortedArrays([1,3],[2]);
console.log(merge);
