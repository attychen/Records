'use strict';

// 作用域 - 声明一个变量以后 在什么场合可以使用它
// es5：全局作用域 函数作用域
// es6: 增加块级作用域


/*if(true){

    let a=123;

}*/

{

    let a=123;

}
console.log(a);


// 打印结果 let.js:18 Uncaught ReferenceError: a is not defined

//  使用 let 定一个变量 是把这个变量绑定在声明它的地方 在 { } 外面 是访问不到的
