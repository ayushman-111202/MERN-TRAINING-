const arr = ['abc', 7365, false, undefined, null, 1.234];

console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));

const movies = ['Iron Man','Stree 2','Black Adam','Hawk Eye','Interstellar'];

console.log(movies);
console.log(movies.length);


// indexing
console.log(movies[2]);

// console.log(movies[-2]);
console.log(movies.at(-1));

movies[4]="Avenger's Secret Wars";

console.log(movies);

// slicing

console.log(movies.slice(1,3));
console.log(movies.slice(1,30));
console.log(movies.slice(-3));

// adding and removing elements

// adding
movies.push('Thor');
movies.unshift('Spiderman');
console.log(movies);

// removing
movies.pop();
movies.shift()
console.log(movies);

//splicing

// movies.splice(2,2); //Removes
// movies.splice(2,2,'Superman','Flash','Arrow'); //Replace
movies.splice(2,0,'Superman','Flash','Arrow'); //Inserts
console.log(movies);