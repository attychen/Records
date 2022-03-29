"use strict";

//  解构是 es6 中一个新的语法 意思就是去分解一个东西的结构


function breakfast (){
     return ['a','b','c'];
}

// 把 breakfast 这个方法中值分给不同的变量
// es5 方法

// var tmp = breakfaast(),
//     tmp1 = tmp[0],
//     tmp2 = tmp[1],
//     tmp3 = tmp[2];


// es6   把原函数赋值 ，写一个数组 然后数组中写好变量名字，一一对应即可。

let [tmp1, tmp2, tmp3] = breakfast();


console.log(tmp1,tmp2,tmp3);

//打印结果 a b c

//chrome 开启 es6 支持 https://blog.csdn.net/u010476739/article/details/81584926
