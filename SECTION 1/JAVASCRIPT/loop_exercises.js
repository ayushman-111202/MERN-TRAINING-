// WAP to check if a number is prime

// let a = 2;
// let count = 0;

// for( let i = 2; i<=a/2; i++) {
//     if(a%i==0) {
//         count++;
//     }
// }

// if (count == 2) {
//     console.log("Is Prime");
// }

// else {
//     console.log("Is Not Prime");
// }

// WAP to print all numbers divisible by 7 and 11 between 100 and 500

// for(let i=100; i<=500; i++) {
//     if(i%7===0 && i%11===0) {
//         console.log(i);
//     }
// }

// WAP print all perfect square numbers between 1 to 100
let a;

for(let i=1; i<=100; i++) {
    a = i ** 0.5;
    if (Number.isInteger(a)) {
        console.log(i);
    }
}