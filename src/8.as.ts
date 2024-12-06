// TypeScript as 的使用

// 1. 类型断言
let str: any = "123";
let len = (str as string).length;

// 2. 非空断言
let str2: string | null | undefined = "123";
let len2 = str2!.length;

// 3. 双重断言
let str3: any = "123";
let len3 = (<string>str3).length;

// 4. 类型断言的高级用法
// 4.1 类型断言的高级用法
interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}
function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === "function") {
    return true;
  }
  return false;
}
