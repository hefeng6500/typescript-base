// TypeScript 如何使用泛型

// 1. 泛型的基本语法
function identity<T>(value: T): T {
  return value;
}

// 调用时指定具体类型
let output1 = identity<string>("hello"); // "hello"

// 自动推断类型
let output2 = identity(42); // 42

// 2. 泛型约束
interface HasLength {
  length: number;
}

function logWithLength<T extends HasLength>(value: T): T {
  console.log(value.length);
  return value;
}

// 合法，传入的类型具有 length 属性
logWithLength("hello"); // 输出 5
logWithLength([1, 2, 3]); // 输出 3
logWithLength({ length: 10, value: "test" }); // 输出 10

// 错误，类型没有 length 属性
// logWithLength(42); // Error: Argument of type 'number' is not assignable to parameter of type 'HasLength'.

// 3. 泛型在类中
class Box<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

const stringBox = new Box<string>("hello");
console.log(stringBox.getContent()); // 输出 "hello"

const numberBox = new Box<number>(123);
console.log(numberBox.getContent()); // 输出 123

// 4. 泛型在接口中
interface Pair<T, U> {
  key: T;
  value: U;
}

const numberToStringPair: Pair<number, string> = {
  key: 1,
  value: "one",
};

const stringToBooleanPair: Pair<string, boolean> = {
  key: "isActive",
  value: true,
};

// 5. 泛型在函数类型中
interface GenericFunction<T> {
  (value: T): T;
}

const identity: GenericFunction<number> = (value) => value;

console.log(identity(123)); // 输出 123

// 6. 泛型工具类型

// 6.1 Partial
interface User {
  id: number;
  name: string;
}

const partialUser: Partial<User> = { name: "Alice" }; // id 可以省略

// 6.2 Required
const requiredUser: Required<User> = { id: 1, name: "Alice" }; // 所有属性都是必需的

// 6.3 Readonly
const readonlyUser: Readonly<User> = { id: 1, name: "Alice" };

// 错误，不能重新赋值
// readonlyUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

// 6.4 Record
const userRecord: Record<number, User> = {
  1: { id: 1, name: "Alice" },
  2: { id: 2, name: "Bob" },
};

// 6.5 Pick
const pickedUser: Pick<User, "id" | "name"> = { id: 1, name: "Alice" }; // 只包含 id 和 name 属性

// 6.6 Omit
const omittedUser: Omit<User, "id"> = { name: "Alice" }; // 不包含 id 属性

// 6.7 Exclude
type NonIdUser = Exclude<keyof User, "id">; // 类型为 "name"

// 6.8 ReturnType
function getUserName(): string {
  return "Alice";
}
type UserName = ReturnType<typeof getUserName>; // 类型为 string

// 7. 泛型的默认值
function createArray<T = string>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

const stringArray = createArray(3, "hello"); // 默认使用 string 类型
const numberArray = createArray<number>(3, 42); // 显式指定为 number 类型

// 8. 泛型在复杂场景中的应用
// 8.1 泛型约束与多个参数
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: "Alice" }, { age: 25 });
console.log(merged); // { name: 'Alice', age: 25 }

// 8.2 条件类型结合泛型
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>; // "Yes"
type Test2 = IsString<number>; // "No"
