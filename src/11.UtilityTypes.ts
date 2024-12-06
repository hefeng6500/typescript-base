// Utility Types 的使用

// 1. Awaited<Type>  用于获取 Promise 类型的结果

type A = Awaited<Promise<string>>;

type B = Awaited<Promise<Promise<number>>>;

type C = Awaited<boolean | Promise<number>>;

// 实现：
// type Awaited<T> = T extends Promise<infer U> ? U : T;

// 2. Partial<Type>  用于将某个类型的所有属性变为可选的
interface Todo {
  title: string;
  description: string;
}
const todo: Partial<Todo> = {
  description: "bar",
};
// 实现：
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

// 3. Required<Type>  用于将某个类型的所有属性变为必选的
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };
// Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

// 实现：修饰符 -?，用于移除可选属性中的 ? 修饰符
// type Required<T> = { [P in keyof T]-?: T[P] };

// 4. Readonly<Type>  用于将某个类型的所有属性变为只读的
interface Todo {
  title: string;
}
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello";
// Cannot assign to 'title' because it is a read-only property.
// 实现：
// type Readonly<T> = { readonly [P in keyof T]: T[P] };

// 5. Record<Keys, Type>  用于将某个类型的所有属性变为可选的
type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

// 实现：
// type Record<K extends keyof any, T> = { [P in K]: T };

// 6. Pick<Type, Keys>  用于从某个类型中选择出某些属性来构造一个新的类型
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// 实现：
// type Pick<T, K extends keyof T> = { [P in K]: T[P] };

// 7. Omit<Type, Keys>  用于从某个类型中剔除掉某些属性来构造一个新的类型
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

const todo: TodoPreview;

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

// 实现：
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// 8. Exclude<UnionType, ExcludedMembers>  用于从某个类型中剔除掉某些属性来构造一个新的类型
type T0 = Exclude<"a" | "b" | "c", "a">;
// type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>;
// type T2 = string | number

// 实现：
// type Exclude<T, U> = T extends U? never : T;

// 9. Extract<Type, Union>  用于从某个类型中提取出某些属性来构造一个新的类型
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
// type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>;
// type T1 = () => void

// 实现：
// type Extract<T, U> = T extends U? T : never;

// 10. NonNullable<Type>  用于从某个类型中剔除掉 null 和 undefined 来构造一个新的类型
type T0 = NonNullable<string | number | undefined>;
// type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>;
// type T1 = string[]

// 实现：
// type NonNullable<T> = T extends null | undefined? never : T;

// 11. Parameters<Type>  从函数类型的参数中使用的类型构造一个元组类型Type
declare function f1(arg: { a: number; b: string }): void;
type T0 = Parameters<() => string>;
// type T0 = []

type T1 = Parameters<(s: string) => void>;
// type T1 = [s: string]

type T2 = Parameters<<T>(arg: T) => T>;
// type T2 = [arg: unknown];

type T3 = Parameters<typeof f1>;
// type T3 = [
//   arg: {
//     a: number;
//     b: string;
//   }
// ];
type T4 = Parameters<any>;
// type T4 = unknown[];

type T5 = Parameters<never>;
// type T5 = never;

type T6 = Parameters<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
// type T6 = never;

type T7 = Parameters<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//   Type 'Function' provides no match for the signature '(...args: any): any'.
// ype T7 = never

// 实现：
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any? P : never;

// 12. ConstructorParameters<Type>  从构造函数类型的类型构造一个元组或数组类型
type T0 = ConstructorParameters<ErrorConstructor>;
// type T0 = [message?: string]

type T1 = ConstructorParameters<FunctionConstructor>;
// type T1 = string[]

type T2 = ConstructorParameters<RegExpConstructor>;
// type T2 = [pattern: string | RegExp, flags?: string]

class C {
  constructor(a: number, b: string) {}
}
type T3 = ConstructorParameters<typeof C>;
// type T3 = [a: number, b: string]

type T4 = ConstructorParameters<any>;
// type T4 = unknown[]

type T5 = ConstructorParameters<Function>;
// Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.
// type T5 = never

// 实现：
// type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any? P : never;

// 13. ReturnType<Type>  用于从函数类型的返回值中使用的类型构造一个类型
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;
// type T0 = string

type T1 = ReturnType<(s: string) => void>;
// type T1 = void

type T2 = ReturnType<<T>() => T>;
// type T2 = unknown

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type T3 = number[]

type T4 = ReturnType<typeof f1>;
// type T4 = {
//     a: number;
//     b: string;
// }

type T5 = ReturnType<any>;
// type T5 = any

type T6 = ReturnType<never>;
// type T6 = never

type T7 = ReturnType<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
// type T7 = any

type T8 = ReturnType<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//   Type 'Function' provides no match for the signature '(...args: any): any'.
// type T8 = any;

// 实现：
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R? R : any;

// 14. InstanceType<Type>  构造一个由构造函数的实例类型组成的类型Type
class C {
  x = 0;
  y = 0;
}
type T0 = InstanceType<typeof C>;
// type T0 = C

type T1 = InstanceType<any>;
// type T1 = any

type T2 = InstanceType<never>;
// type T2 = never

type T3 = InstanceType<string>;
// Type'string' does not satisfy the constraint 'new (...args: any) => any'.
// type T3 = any

type T4 = InstanceType<Function>;
// Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.
//   Type 'Function' provides no match for the signature '(...args: any): any'.
// type T4 = any;

// 实现：
// type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R? R : any;

// 15. NoInfer<Type>  用于从类型构造一个新的类型，该类型具有与原始类型相同的形状，但具有推断的属性

function createStreetLight<C extends string>(
  colors: C[],
  defaultColor?: NoInfer<C>
) {
  // ...
}
createStreetLight(["red", "yellow", "green"], "red"); // OK
createStreetLight(["red", "yellow", "green"], "blue"); // Error

// 实现：
// type NoInfer<T> = [T][T extends any? 0 : never];

// 16. ThisParameterType<Type>  如果函数类型没有参数，则提取this参数的类型；如果函数类型没有参数，则提取 unknown this参数的类型。
type T0 = ThisParameterType<(s: string) => void>;
