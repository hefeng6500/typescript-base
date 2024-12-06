// TS 如何定义对象类型？

// 1. 类型别名 type
type Person = {
  name: string;
  age: number;
};

let p1: Person = {
  name: "1",
  age: 1,
};

// 2. 接口 interface
interface Person2 {
  name: string;
  age: number;
}

let p2: Person2 = {
  name: "2",
  age: 2,
};

// 3. 区别
// 3.1 类型别名 type 可以定义基本类型、联合类型、元组等类型
// 3.2 接口 interface 可以定义对象类型、函数类型、类类型等类型
// 3.3 类型别名 type 可以使用 typeof 获取实例的类型进行赋值
// 3.4 接口 interface 可以继承类型别名 type，并且可以继承多个类型别名 type
// 3.5 类型别名 type 不能被 extends 和 implements
