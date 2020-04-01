// template literals and default parameter values
let favMovie = (name, movie = 'The Room') => console.log(`my name is ${name} and my favorite movie is ${movie}`);

favMovie('liz', 'mean girls');

//arrow functions
let fullName = 'Liz McCreight'
let name = fullName.split(' ');

let getFirstName = (fullName) => {
    console.log(name[0]);
};
getFirstName();

let getFirstNameConcise = fullName => console.log(name[0]);
getFirstNameConcise();

// attemps at 9 & 10 of arrow functions
let multiObject = (a, b) => ({
    exponent: a ** b,
    product: a * b,
});
multiObject(2, 2);

function math() {
    return 2 + 3;
}
math();

let add = (a,b) => a + b;
add(5, 7);

// Spread Syntax
let myArray = ['liz', 'missouri', 'tacos'];
let myName = 'liz';

let aboutMe = (name, location, favFood) => console.log(`${name}, ${location}, ${favFood}`);
aboutMe(...myArray);

let favNum = () => console.log(...myArray, myName);
favNum();

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


