var person = {
  name: function () {
    console.log(fname);
  },
};
var obj1 = {
  fname: "example",
};
person.name.call(obj1);
//    VM60:3 Uncaught ReferenceError: fname is not defined
//        at Object.name (<anonymous>:3:14)
//        at <anonymous>:9:14
//    name @ VM60:3
//    (anonymous) @ VM60:9

const sum = (a) => (b) => a + b;
sum(10)(10);
20;

const myPromise = Promise.resolve("Javascript is Awesome");

(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error(`Oops didn't work`);
  } finally {
    console.log("Oh finally!");
  }
})();
//    VM105:5 Javascript is Awesome
//    VM105:9 Oh finally!
//    Promise {<fulfilled>: undefined}__proto__: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]:

const items = ["food", "water", "clothes"];
items.length = 1;

console.log(items[0]);
//VM121:4 food

null >= 0;
true;

var a = 1;
if (function F() {}) {
  a += typeof F;
}
console.log(a);
//VM131:5 1undefined

let s = new Set();
s.add(45).add(45).add(10).add(30).add(30);
console.log(s.size);
//VM137:3 3

let person = "Hue";

if (true) {
  let person = "Haley";

  if (true) {
    console.log(person);
  }
}
console.log(person);
// VM142:1 Uncaught SyntaxError: Identifier 'person' has already been declared

function sample() {
  a = 20;
  var b = 30;
}
sample();
console.log(a);
console.log(b);
//    VM147:6 20
//    VM147:7 Uncaught ReferenceError: b is not defined
//        at <anonymous>:7:14
//    (anonymous) @ VM147:7

for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
//    VM152:3 1
//    VM152:3 2
//    VM152:3 4

var User = function () {};

User.prototype.attributes = {
  isAdmin: false,
};

var admin = new User("Prabhat"),
  guest = new User("Niki");

admin.attributes.isAdmin = true;

console.log(admin.attributes.isAdmin);
console.log(guest.attributes.isAdmin);
//    VM167:12 true
//    VM167:13 true

+true;
!"Prabhat";
//false

+true;
// 1

var arr = [];
function fun1(arr, callback) {
  arr.push(1);
  console.log("1");
  callback(arr);
  return function () {};
}

function fun6(arr, callback) {
  arr.push(1);
  console.log("6");
  callback(arr);
  return function () {};
}

function fun5(arr, callback) {
  arr.push(1);
  console.log("5");
  callback(arr);
  return function () {};
}

function fun4(arr, callback) {
  arr.push(1);
  console.log("4");
  return function () {};
}

function fun3(arr, callback) {
  arr.push(1);
  console.log("3");
  callback(arr);
  return function () {};
}

function fun2(arr, callback) {
  arr.push(1);
  console.log("2");
  callback(arr);
  return function () {};
}

fun1(
  arr,
  function () {
    console.log("start");
  },
  fun3(arr, fun2(arr, fun5(arr, fun4(arr))))
);
//    VM253:25 4
//    VM253:18 5
//    VM253:38 2
//    VM253:31 3
//    VM253:4 1
//    VM253:44 start

//  ƒ (){}
var a = 10;
var b = 10;
var c = {
  a: -10,
  b: -10,
};
function add() {
  return this.a + b;
}

c.add = add;

console.log(add());
console.log(c.add());
//    VM258:13 20
//    VM258:14 0

undefined(function test() {
  console.log(
    function () {} instanceof Object,
    function () {} instanceof Function,
    Function instanceof Object,
    Object instanceof Function
  );
})();
//VM263:2 true true true true

const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
  myPromise.then((res) => res).then((res) => console.log(res));
  setTimeout(() => console.log("Timeout!"));
  console.log("Last line!");
}

async function funcTwo() {
  const res = await myPromise;
  console.log(await res);
  setTimeout(() => console.log("Timeout!"));
  console.log("Last line!");
}

funcOne();
funcTwo();
//VM268:1 Uncaught SyntaxError: Identifier 'myPromise' has already been declared

const myPromise1 = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
  myPromise1.then((res) => res).then((res) => console.log(res));
  setTimeout(() => console.log("Timeout!"));
  console.log("Last line!");
}

async function funcTwo() {
  const res = await myPromise1;
  console.log(await res);
  setTimeout(() => console.log("Timeout!"));
  console.log("Last line!");
}

funcOne();
funcTwo();
//    VM278:6 Last line!
//    VM278:4 Promise!
//    VM278:11 Promise!
//    VM278:13 Last line!
//    Promise {<fulfilled>: undefined}
//    VM278:5 Timeout!
//    VM278:12 Timeout!

function createPromise(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x) {
        resolve(x);
      } else {
        reject("Error");
      }
    }, 100);
  });
}

async function add(x) {
  let a = createPromise(20);
  let b = createPromise(30);
  return x + (await a) + (await b);
}

async function subtract(x) {
  let a = createPromise(5);
  let b = createPromise(10);
  return x - (await a) - (await b);
}

add(10)
  .then((data) => {
    return subtract(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
//Promise {<pending>}
// VM283:30 45

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
// VM288:18 3

(function test() {
  var a = [];
  a[100] = undefined;
  console.log(a.length);

  var b = new Array("100");
  console.log(b.length);
})();
//    VM293:4 101
//    VM293:7 1
