// 原始数据类型

// 布尔值
let isDone: boolean = false;

// 数字
let decLiteral: number = 6;

// 字符串
let name: string = "bob";

// Bigint
let big: bigint = 100n;

// 空值
let unusable: void = undefined;

// 空值的变量只能是 undefined 和 null
let u: undefined = undefined;
let n: null = null;

// Notice: 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
