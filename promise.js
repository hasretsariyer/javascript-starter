const firstPromise = new Promise(function (resolve, reject) {
    setTimeout(() => reject("First Promise: Something went wrong!"), 1000);
});
firstPromise.then(function () {
    console.log("Succeed!");
}, function (errorMessage) {
    console.log(errorMessage);
});
console.log("Waiting response...");


const secondPromise = new Promise(function (resolve, reject) {
    resolve("Second Promise: Success :)");
});
secondPromise.then((message) => console.log(message));

const thirdPromise = new Promise(function (resolve, reject) {
    setTimeout(() => reject("Third Promise: An error is occured!"), 1500);
    setTimeout(() => resolve("Third Promise: Congrats!!"), 2000); // ignored
});
thirdPromise.then(
    (message) => console.log(message)
).catch(
    (error) => console.log(error)
);