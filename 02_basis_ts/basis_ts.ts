/**
 *  声明变量类型
 */

// 声明变量类型，使变量不可随意转变类型
let a: number;

a = 10;
// a = 'hello'; // 报错，变量类型为 number

//将 sex值限制在 male或female
let sex: 'male' | 'female'

sex = 'male';
// sex = 'a';

// any 任意类型， 默认
let i: any;

//未知类型，在赋值时类型为unknown ,类型安全
let j: unknown;
j = "hello";
let e: string;

// e = j;

if (typeof j === "string"){
    e = j;
}

// 断言
e = j as string; // 1
e = <string>j; // 2

// 对象结构
// ?表示可选属性
let c: {name: string, age?: number}
c= {name: 'Jack', age: 12}

// [propName: string]: any 任意类型可选
let d: {name: string, [propName: string]: any};
d = {name: 'name', age: 10, type: false}

// 函数结构类型
let f: (a: number, b: string) => number;

//数组
let arr: string[];
arr = ['12', '2', 'c'];

let g: Array<string>;

//元组，数据长度固定的数组
let h: [string, string];
h = ['12', '12'];