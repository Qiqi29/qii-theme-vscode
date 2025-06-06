import { func } from 'package'
const https = require('https')

// 这是一段注释

/**
 * 这是文档注释
 * @author Your Name
 */


// 变量与常量
var numebr = 10;
let text = "Hello";
const PI = 3.14;
const OBJ = { key: 'value' };
Math.PI

true || false || null || undefined

// 对象
const object = {
    title: 'Hello',
    count: 18
}

console.log(object)
console.log(object.count)

// 判断语句
if (number == 1) {
	console.log(`Hello World ${number}`)
} else if (number == 2) {
	console.log('Hello World ' + number)
} else {
    console.log('Hello World')
}

// 循环
for(let i = 0; i < 5; i++) {
    console.log(`index ${i}`)
}

// 字符串
let string = 'Hello \n World \t 你好世界。'
string = `你好`
string += " World"
const str = `Hello ${string}`;


// 正则
const validFormat1 = /\d[a-z]\.*\d{4}/i
const validFormat2 = /[^a-zA-Z0-9]+(.)/g
const validFormat3 = /[$&@￥：；+-\*\/\^\\"'\[\]{}<>]/g

// 函数
export function greet(name, age = 18) {
    let message = `Hello ${name}, ${age}`
    console.log(message)
}
greet('Foo')

// 类
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    get() {
        return this.name
    }
}

export default Dog

// 函数
function classicFunction(a, b = 0) {
  return a + b;
}
const arrowFunc = (x, y) => x * y;
const anonymousFunc = function() { /* ... */ };
(function IIFE() {})();

// 类与继承
class Parent {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Hello ${this.name}`);
  }
  
  static staticMethod() {}
  
  get formatted() { return this.name.toUpperCase(); }
}

class Child extends Parent {
  #privateField = 42;
  
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

new Child('Foo', 18);

// 条件判断
if (mutable.length > 5) {
  // ...
} else if (mutable.startsWith('H')) {
  // ...
} else {
  // ...
}

const ternary = PI > 3 ? 'Yes' : 'No';
switch (oldVar) {
  case 10:
    break;
  default:
}

// 循环
for (let i = 0; i < 10; i++) {}
while (oldVar-- > 0) {}
do {} while (false)

const arr = [1, 2, 3];
for (const num of arr) {}
arr.forEach(n => console.log(n))
arr.map(n => n * 2).filter(n => n > 2)

// 逻辑运算
const and = true && false;
const or = true || false;
const not = !true;
const nullish = null ?? 'default';

// 类型操作
typeof arr === 'object';
arr instanceof Array;
JSON.parse('{}');
String(42);

// 异常处理
try {
  throw new Error('Fail');
} catch (err) {
  console.error(err);
} finally {}

// 现代语法
const [a, , b] = [1, 2, 3];
const { key } = OBJ;
const spread = [...arr, 4];
const optionalChaining = OBJ?.nested?.prop;
async function fetchData() {
  await fetch('...');
}
const promise = new Promise((resolve) => resolve(42));

// 运算符
1 + 2 * 3 / 4 % 5;
num ??= 10;
num ||= 20;
num &&= 30;
const isTrue = 1 === '1' ? false : true;
const bitwise = 1 << 2 | 3 & 4;