// TS 如何定义 Function 类型？

// 1. 定义一个函数类型
type Add = (x: number, y: number) => number;
// 示例
const add: Add = (x, y) => x + y;

// 2. 定义一个函数类型，使用 interface
interface Add2 {
  (x: number, y: number): number;
}
// 示例
const add2: Add2 = (x, y) => x + y;

// 3. 定义一个函数类型，使用 type
type Add3 = (x: number, y: number) => number;
// 示例
const add3: Add3 = (x, y) => x + y;

// 4. 定义一个函数类型，使用 type，使用泛型
type Add4<T> = (x: T, y: T) => T;
// 示例
const add4: Add4<number> = (x, y) => x + y;

// 5. 定义一个函数类型，使用 interface，使用泛型
interface Add5<T> {
  (x: T, y: T): T;
}
// 示例
const add5: Add5<number> = (x, y) => x + y;

// 6. 定义一个函数类型，使用 type，使用泛型，使用元组
type Add6<T, U> = (x: T, y: U) => [T, U];
// 示例
const add6: Add6<number, string> = (x, y) => [x, y];

// 7. 定义一个函数类型，使用 interface，使用泛型，使用元组
interface Add7<T, U> {
  (x: T, y: U): [T, U];
}
// 示例
const add7: Add7<number, string> = (x, y) => [x, y];

// 函数可选参数
type Add8 = (x: number, y?: number) => number;
function add8(x: number, y?: number) {
  return x + y!;
}

// 函数重载
// 函数重载的实现
function add9(x: number, y: number): number;
function add9(x: string, y: string): string;
function add9(x: number, y: string): string;
function add9(x: string, y: number): string;
function add9(x: any, y: any) {
  return x + y;
}

// 重载签名和实现签名不匹配
// demo01
function fn(x: string): void;
function fn() {
  // ...
}
// Expected to be able to call with zero arguments
fn();

// demo02
function fn(x: boolean): void;
// Argument type isn't right
function fn(x: string): void;
// This overload signature is not compatible with its implementation signature.
function fn(x: boolean) {}

// demo03
function fn(x: string): string;
// Return type isn't right
function fn(x: number): boolean;
// This overload signature is not compatible with its implementation signature.
function fn(x: string | number) {
  return "oops";
}
