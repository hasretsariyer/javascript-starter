const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
// output: First: 1 Second: 2
console.log(`First: ${first} Second: ${second}`);

const [, , third, ...others] = numbers;
// output: Third: 3 Others: 4,5
console.log(`Third: ${third} Others: ${others}`);

const student = {
    name: 'Tom',
    lastName: 'Downey',
    age: 21,
};
const { name, age } = student;
// output: name: Tom age: 21
console.log(`name: ${name} age: ${age}`);
