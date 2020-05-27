// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name, age} = person;

// console.log(`${name} is ${age}`);

// const {city = 'ciao', temp: temperature} = person.location;
// console.log(`it's ${temperature} in ${city}`);


// const book = {
//     title: 'ego is the enemy',
//     author: 'ryan holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const address = ['1299 juniper street', 'Philadelphia', 'Pennsylvania', '19417'];

const [street, city, state, zip] = address;

console.log(`you are in ${street}, ${state}.`);


const item = ['coffee', '2', '2.5', '2.75'];
const [itemName, , mediumPrice] = item;

console.log(`a ${itemName} costs ${mediumPrice}`);