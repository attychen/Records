"use strict";

//  解构是 es6 中一个新的语法 意思就是去分解一个东西的结构


function breakfast (){
     return {a: 'a', b: 'b', c: 'c'};
}

let {a: tmp1,b: tmp2, c: tmp3} = breakfast();

console.log(tmp1,tmp2,tmp3);

//打印结果 a b c
