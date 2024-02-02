const myName = "Mathias";
const me = {};
me.name = myName;
// const is constant NOT in the value but in the assignment
// meaning that it acnnot be reassigned and this also HAS to be assigned

const hobbies = ["coding","eating"];
hobbies.push("sleeping");
me.hobbies = hobbies;
console.log(me);

// Types in JS: number, string, boolean, object, null, undefined, symbol, bigint
console.log(typeof 22);
console.log(typeof me.name);
console.log(typeof true);
console.log(typeof me)

// Object: object, arrays, date
console.log(typeof me.hobbies) // logs object

// type coercin
// we ALWAYS use strict equality checks:
// === and !==
console.log(2 == "2");
console.log(2 === "2");