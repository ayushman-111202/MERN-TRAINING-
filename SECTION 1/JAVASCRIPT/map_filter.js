const nums = [1,2,3,4,5,6,7,8,9];

const sqr = nums.map((n) => {
    return n**2;
});

console.log(sqr);
console.log("-------------------------");

const prices = [340, 670, 499, 384, 2944];

const gstPrices = prices.map((n) => {
    return n*1.18;
});

console.log(gstPrices);

console.log("-------------------------");

const prices2 = ['₹234.66', '₹33.42', '₹99.999', '₹400.03'];

const updated_prices2 = prices2.map((n) => {
    return parseInt(n.slice(1));
})

console.log(updated_prices2);

const evenNums = nums.filter((n) => { 
    return n%2 === 0 });
console.log(evenNums);

console.log("-------------------------");

const greaterPrices = prices.filter((n) => {
    return n>500;
});

console.log(greaterPrices);

console.log("-------------------------");

const names = ['raju', 'pinki', 'kaliya', 'ramu'];

const greaterNames = names.filter((n) => {
    return n.length>4;
});
console.log(greaterNames);

console.log("-------------------------");

const brands = ['apple', 'samsung', 'nokia', 'mi', 'oneplus'];

const ucBrands = brands.map((n)=>{
    return n.toUpperCase();
});

console.log(ucBrands);

console.log("-------------------------");

const fullNames = ['Sameer Tiwari', 'Ayushman Shukla', 'Vipin Rawat'];

const firstNames = fullNames.map((n) => {
    return n.split(' ')[0];
});
console.log(firstNames);

console.log("-------------------------");

const namesA = firstNames.filter((n) => {
    return n.includes('a');
});
console.log(namesA);
console.log("-------------------------");

const nums2 = [3,4,9,16,19];

const perfectSquares = nums2.filter((n) => {
    return Number.isInteger(n**0.5);
});
console.log(perfectSquares);
console.log("-------------------------");

const nums3 = [3.67, 23.3, 28.99, 4.55, 9.3];
const numsInt = nums3.map((n) => {
    return parseInt(n);
});

const numsFilterEven = numsInt.filter((n) => {
    return n%2 === 0;
});
console.log(numsFilterEven);
console.log("-------------------------");











