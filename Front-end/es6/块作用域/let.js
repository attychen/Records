'use strict'

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
