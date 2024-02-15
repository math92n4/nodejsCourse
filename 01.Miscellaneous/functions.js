
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

// anonymous function
const anotherFunction = function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

// arrow function
const andAnotherOne = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const oneLine = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

function callBack(name, call) {
    return call(name);
}

const running = (name) => `${name} is running`;

const runningResult = callBack('Name', running);

console.log(runningResult);

const eat = (name) => console.log(`${name} is eating`);

const eating = callBack('Someone', eat);

console.log(callBack('Mathias', (name) => `${name} is eating`));


