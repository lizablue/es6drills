let favMovie = (name, movie = 'The Room') => console.log(`my name is ${name} and my favorite movie is ${movie}`);

favMovie('liz', 'mean girls');

let fullName = 'Liz McCreight'

let name = fullName.split(' ');

let getFirstName = (fullName) => {
    console.log(name[0]);
};
getFirstName();

let getFirstNameConcise = fullName => console.log(name[0]);
getFirstNameConcise();

// let multiObject = (a, b) => ({
//     exponent: a ** b,
//     product: a * b,
// });
// multiObject(2, 2);

function multiObject() {
    return 2 + 3;
}
multiObject();

let add = (a,b) => a + b;
add(5, 7);