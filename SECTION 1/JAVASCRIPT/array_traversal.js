// traversing an Array

// first method

const nums=[2,3,4,5,6,7,8,9];

for(let i=0; i<nums.length; i++) {
    console.log(nums[i]);
}
console.log("----------------------------");

// second method

for(let n of nums) {
    console.log(n);
    
}
console.log("----------------------------");

// third method

nums.forEach( (a,b) => {
    console.log(a,b);
});
console.log("----------------------------");


//  print squares of all elemets
console.log("Square of all numbers");

nums.forEach((n)=>{
    console.log(n*n);
});
console.log("----------------------------");

//  store and print squares of all elemets in new array

const newNums = [];

console.log("Square of all numbers");

nums.forEach((n)=>{
    newNums.push(n*n);
});
console.log(newNums);
console.log("----------------------------");

//  store and print even elemets in new array

const numsEven = [];
nums.forEach((n)=>{
    if(n%2===0) {
        numsEven.push(n);
    }
});
console.log(numsEven);
console.log("----------------------------");

//  add 18% gst to all prices and store in a new array

const prices=[340, 670, 499, 384, 2944];
const newPrices=[];

prices.forEach((n)=>{
    let gst=n*(18/100);
    newPrices.push(n+gst);
});
console.log(newPrices);
console.log("----------------------------");

//  store all prices greater than 500 in a new array

const n500 =[];
newPrices.forEach((n)=>{
    if(n>=500) {
        n500.push(n);
    }
});
console.log(n500);