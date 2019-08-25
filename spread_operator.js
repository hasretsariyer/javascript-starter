const numbers = [1, 2, 3];
console.log([...numbers, 4, 5, 6]); // output: [ 1, 2, 3, 4, 5, 6 ]

const sum = (a, b, c) => a + b + c;
const result = sum(...numbers);
console.log(`Sum: ${result}`); // output: Sum: 6

const [first, ...others] = numbers;
console.log(first); // output: 1
console.log(others); // output: [ 2, 3 ]

const location = {
    latitude: "41.01384",
    longitude: "28.94966"
};
// shallow copy
const locationCopy = { ...location };
// output = { latitude: '41.01384', longitude: '28.94966' }
console.log(locationCopy);

const str = "Hello";
console.log([...str]); // output: [ 'H', 'e', 'l', 'l', 'o' ]

const obj1 = { name: "Johnny" };
const obj2 = { lastname: "Depp" };
const obj = { ...obj1, ...obj2 };
console.log(obj); // output: { name: 'Johnny', lastname: 'Depp' }