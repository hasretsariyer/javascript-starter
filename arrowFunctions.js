// function definition
const doSomething = function () {
	console.log("Hello from js function");
};
doSomething();

// shorter syntax with arrow function
const doSomething2 = () => {
	console.log("Hello from js function");
};
doSomething2();

// implicit return
const getText = () => "Hello from js function";
console.log(getText());

// this usage with arrow function

const actor = {
	name: 'Johnny',
	lastname: "Depp",
	getFullName: function () {
		// this = car
		return `actor info: ${this.name} ${this.lastname}`;
	}
};
console.log(actor.getFullName()); // actor info: Johnny Depp

const actress = {
	name: 'Amber',
	lastname: "Heard",
	getFullName: () => {
		// this != actress
		return `actress info: ${this.name} ${this.lastname}`;
	}
};
console.log(actress.getFullName()); // actress info: undefined undefined