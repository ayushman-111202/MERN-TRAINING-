// function addNums(a,b) {
//     var c=a+b;
//     console.log(c);
// };

// addNums(10,20);
// addNums(40,60);
// addNums(30,20);

// console.log(c);

// const getAvg = function (m1,m2,m3) {
//         const avg=(m1+m2+m3)/3;
//         console.log(avg);

// };

// const result = getAvg(10,20,30);
// console.log(result);

// const getAvg = function (m1,m2,m3) {
//         const avg=(m1+m2+m3)/3;
//         // console.log(avg);
//         return avg;
// };

// getAvg(10,20,30);

// console.log(result);

// Arrow function

// const factorial = (n) => {
//     let f = 1;
//     for (let i=1; i<=n;i++) {
//         f*=i;
//     }
//     return f;
// };

// const fact = factorial(5);
// console.log(fact);

// WAP function to check if a number is prime or not

function checkPrime(n) {
    let prime = true;
    for(let i=2; i<n; i++) {
        if(n%i===0) {
            console.log("Is Not Prime");
            break;
        }
        if(prime) {
            console.log("Is Prime");
        }   
    }
}
checkPrime(7);