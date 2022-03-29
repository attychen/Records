"use strict";

// const 声明一个常量 又叫 恒量
// 当使用 const 声明一个恒量时，const 仅限制声明时的那个动作，不限制声明后的那个值 不可以被重复声明

// const b = 123;

// const b = 456;

// console.log(b);
// 当我们重复声明时 打印结果提示已被重复声明  Uncaught SyntaxError: Identifier 'b' has already been declared (at const.js:12:7)

const b = [];

b.push("a");

b.push("b");

console.log(b);


// 打印结果 (2) ['a', 'b']
