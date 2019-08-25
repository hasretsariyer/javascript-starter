const handler = {
    get: function (target, prop) {
        return target[prop] ? target[prop] : `${prop} not found!`;
    },
    set: function (target, prop, value) {
        if (prop === "age") {
            if (!Number.isInteger(value) || value < 0)
                return;
        }
        target[prop] = value;
    }
};
const person = {
    age: 21,
    gender: "female"
};

const proxyInstance = new Proxy(person, handler);
console.log(proxyInstance.age); // output: 21
console.log(proxyInstance.name); // output: name not found!

proxyInstance.age = 25;
console.log(proxyInstance.age); // output: 25

proxyInstance.age = -1;
console.log(proxyInstance.age); // output: 25