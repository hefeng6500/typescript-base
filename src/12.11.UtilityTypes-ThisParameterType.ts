class MyClassPerson {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // 显式传入 this 很罕见，但方便后续使用 ThisParameterType 读取 myMethod 的 this
  myMethod(this: MyClassPerson, num: number): number {
    return num + this.name.length;
  }
}

type MethodThisType = ThisParameterType<MyClassPerson["myMethod"]>;

function callMyMethodLike(obj: MethodThisType, num: number) {
  // 这里假设obj有myMethod方法并且this类型正确
  return obj.myMethod(num);
}
const myObj = new MyClassPerson("example");
callMyMethodLike(myObj, 5);

// 使用接口形式代替类函数显式传入 this 很罕见
interface MyClassInterface {
  name: string;
  myMethod(num: number): number;
}
class MyClass implements MyClassInterface {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  myMethod(num: number): number {
    return num + this.name.length;
  }
}
type MyMethodType = MyClassInterface["myMethod"];
type Test = ThisParameterType<MyMethodType>;
// 此时ThisType的类型为MyClassInterface，包含了this相关的类型信息
