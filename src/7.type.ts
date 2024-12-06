// TypeScript type 的使用

// 1. 定义一个类型
type Person = {
  name: string;
  age: number;
};

// 2. 定义一个函数，参数为类型
function sayHello(person: Person) {
  console.log(`Hello, ${person.name}`);
}

// 3. 定义一个函数，返回值为类型
function getPerson(): Person {
  return {
    name: "Tom",
    age: 18,
  };
}

// 4. 定义一个类型，继承另一个类型
type Teacher = Person & {
  teach(): void;
};

// 5. 定义一个类，实现类型，继承另一个类
class TeacherImpl extends Student implements Teacher {
  teach() {
    console.log("Teach");
  }
}

// type 类型的属性配置
// 1. 可选属性
type Person2 = {
  name: string;
  age?: number;
};

// 2. 只读属性
type Person3 = {
  readonly name: string;
  age?: number;
};

// 3. 任意属性
type Person4 = {
  name: string;
  age?: number;
  [propName: string]: any;
};


// TS 中 interface 和 type 的区别？
// 1. interface 可以定义多次，type 不行
interface Person {
  name: string;
}
interface Person {
  age: number;
}
type Person = {
  name: string;
}
// 2. interface 可以继承 interface，type 可以继承 type，也可以继承 interface
interface Teacher extends Person {
  teach(): void;
}
type Teacher = Person & {
  teach(): void;
}
// 3. interface 可以声明合并，type 不行
interface Person {
  name: string;
}
interface Person {
  age: number;
}
// 4. type 可以声明基本类型别名，interface 不行
type Name = string;
// 5. type 可以使用 typeof 来获取实例的类型进行赋值
type Person = typeof new Person();
// 6. type 语句中可以使用 typeof 获取变量声明的类型进行赋值
type Name = typeof name;
// 7. type 语句中可以使用 keyof 获取对象的所有键值
type Keys = keyof Person;
// 8. type 语句中可以使用 in 遍历枚举类型
type Keys = "a" | "b" | "c";
type Obj = {
  [key in Keys]: any;
};
// 9. type 语句中可以使用 infer 声明一个类型变量并且对它进行使用
type ReturnType<T> = T extends (...args: any[]) => infer R? R : any;
// 10. type 可以使用条件类型
type TypeName<T> = T extends string? string : number;
// 11. type 可以使用交叉类型
type Intersection = Person & Teacher;
// 12. type 可以使用联合类型
type Union = Person | Teacher;
// 13. type 可以使用映射类型
type MappedType = {
  [P in keyof Person]: Person[P];
};
// 14. type 可以使用索引访问类型
type IndexedAccessType = Person["name"];
// 15. type 可以使用模板字符串类型
type TemplateStringType = `Hello, ${Person["name"]}`;
// 16. type 可以使用元组类型
type TupleType = [string, number];
// 17. type 可以使用枚举类型
type EnumType = "a" | "b" | "c";
// 18. type 可以使用类类型
type ClassType = typeof Person;
// 19. type 可以使用构造签名类型
type ConstructorType = new (...args: any[]) => Person;
// 20. type 可以使用函数类型
type FunctionType = (a: number, b: number) => number;
// 21. type 可以使用类型别名
type TypeAliasType = Person;
// 22. type 可以使用类型断言
type TypeAssertionType = Person as Teacher;
// 23. type 可以使用类型查询
type TypeQueryType = Person extends Teacher? Person : Teacher;
// 24. type 可以使用类型参数
type TypeParameterType<T> = T;
// 25. type 可以使用类型推断
type TypeInferenceType = typeof name;