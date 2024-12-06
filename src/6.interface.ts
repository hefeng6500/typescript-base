// interface 的使用

// 1. 定义一个接口
interface Person {
  name: string;
  age: number;
}

// 2. 定义一个类，实现接口
class Student implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 3. 定义一个函数，参数为接口类型
function sayHello(person: Person) {
  console.log(`Hello, ${person.name}`);
}

// 4. 定义一个函数，返回值为接口类型
function getPerson(): Person {
  return {
    name: "Tom",
    age: 18,
  };
}

// 5. 定义一个接口，继承另一个接口
interface Teacher extends Person {
  teach(): void;
}

// 6. 定义一个类，实现接口，继承另一个类
class TeacherImpl extends Student implements Teacher {
  teach() {
    console.log("Teach");
  }
}

// interface 接口的属性配置
// 1. 可选属性
interface Person2 {
  name: string;
  age?: number;
}

// 2. 只读属性
interface Person3 {
  readonly name: string;
  age?: number;
}

// 3. 任意属性
interface Person4 {
  name: string;
  age?: number;
  [propName: string]: any;
}

// 4. 函数类型的接口
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// 5. 可索引的类型
interface StringArray {
  [index: number]: string;
}

// 6. 类类型的接口
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
// 示例
class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

// 7. 接口继承接口
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

// 8. 接口继承类
class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}

// interface 如何定义 ES6 中的类? 包括构造函数、静态方法、实例方法、静态属性、实例属性
interface MyClassInterface {
  // 构造函数
  new (param1: string, param2: number): MyClassInterface;
  // 静态属性
  staticProp: string;
  // 静态方法
  static staticMethod(): void;
  // 实例属性
  instanceProp: string;
  // 实例方法
  instanceMethod(): void;
}

class MyClass implements MyClassInterface {
  // 实例属性
  instanceProp: string;

  // 构造函数
  constructor(public param1: string, public param2: number) {
    this.instanceProp = param1;
  }

  // 静态属性
  static staticProp: string = "static value";

  // 静态方法
  static staticMethod(): void {
    console.log("This is a static method");
  }

  // 实例方法
  instanceMethod(): void {
    console.log("This is an instance method");
  }
}

// interface 对象中的函数
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});
