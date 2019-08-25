const student = {
    name: 'Tom',
    lastName: 'Downey',
    age: 21,
    getFullName: function () {
        return `${this.name} ${this.lastName}`;
    }
};

console.log(student.getFullName()); // output: Tom Downey

function getAge() {
    return this.age;
}
let age = getAge.call(student);
console.log(age); // output: 21
age = getAge.apply(student);
console.log(age); // output: 21

// output: hello
console.log(String.fromCharCode(72, 101, 108, 108, 111));

// call method takes arguments separately
// apply method takes arguments as an array
const fromCall = String.fromCharCode.call(null, 72, 101, 108, 108, 111);
console.log(fromCall); // output: hello 
const fromApply = String.fromCharCode.apply(null, [72, 101, 108, 108, 111]);
console.log(fromApply); // output: hello 