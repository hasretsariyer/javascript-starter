//Define a function returns promise
function greeter() {
	return new Promise((res, rej) => {
		setTimeout(() => res("Hello world!"), 2000);
	});
}

// Define a async function.
async function myAsyncFunc() {
	let greeting = await greeter(); // This will await 'till greeter function resolve or reject
	console.log(greeting);
}

// Async-Await is better practice if you want avoid promise chain
// Async-Await has clean syntax compare to Promise
myAsyncFunc(); // ‘Hello world!’

