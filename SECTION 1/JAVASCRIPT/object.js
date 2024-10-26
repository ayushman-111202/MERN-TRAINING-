const user = {
    name : 'Vikas',
    email : 'vikas@mail.com',
    password : 'abc123'
};

console.log(user);
console.log(user.name);
console.log(user.email);

user.address = 'Lucknow';
user.password = 'xyz123';

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

console.log('----------------------------------------------');

const smartphone = {
    brand : 'Samsung',
    model : 'Galaxy s24 Ultra',
    price : 12000,
    colors : ['graphite', 'mint', 'white'],
};

console.log(smartphone);
console.log(smartphone.price);
smartphone.price = 95000;
console.log(smartphone.price);
console.log(smartphone.colors[2]);
smartphone.colors.push('black');
console.log(smartphone.colors);
smartphone.colors[0] = 'red';
console.log(smartphone.colors);

console.log('----------------------------------------------');

const smartphoneArray = [
    {
        brand : 'Samsung',
        model : 'Galaxy s24 Ultra',
        price : 12000,
        colors : ['graphite', 'mint', 'white'],
    },

    {
        brand : 'OnePlus',
        model : '10r',
        price : 55000,
        colors : ['black', 'gray'],
    },

    {
        brand : 'Oppo',
        model : 'F27',
        price : 35000,
        colors : ['purple', 'yellow', 'green'],
    },

    {
        brand : 'Apple',
        model : 'Iphone 16 pro max',
        price : 170000,
        colors : ['black', 'gray', 'pink'],
    },

    {
        brand : 'Realme',
        model : 'Realme 6',
        price : 20000,
        colors : ['light blue', 'yellow'],
    },
];

console.log(smartphoneArray[1].price);

console.log(smartphoneArray[3].colors[2]);

smartphoneArray[2].colors[0] = 'orange';
smartphoneArray[2].colors[1] = 'tinted red';

console.log(smartphoneArray[2].colors);

smartphoneArray[4].colors.push('extra black');

// console.log(smartphoneArray[4].colors);
smartphoneArray[4].colors.splice(0,2, 'greener', 'pinker');
console.log(smartphoneArray[4].colors);


const smartphoneArray1 = smartphoneArray.filter((n) => {
    return n.price<50000;
});

console.log(smartphoneArray1);

console.log('----------------------------------------------');

const blackPhones = smartphoneArray.filter((n) => {
    return n.colors.includes('black');
});

console.log(blackPhones);
console.log('----------------------------------------------');

const keyword = 'Samsung';

const samsungPhones = smartphoneArray.filter((n) => {
    return n.brand.includes(keyword);
});
console.log(samsungPhones);
console.log('----------------------------------------------');

const keyword1 = 'samsung';
const search = smartphoneArray.filter((n) => {
    return n.brand.toLowerCase().includes(keyword.toLowerCase());
});
console.log(search);
console.log('----------------------------------------------');

const keyword3 = 'sam';
const searchResult = smartphoneArray.filter((n) => {
    return n.brand.toLowerCase().includes(keyword3.toLowerCase());
});
console.log(searchResult);








