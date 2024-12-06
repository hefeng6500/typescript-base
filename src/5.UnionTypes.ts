// TS 如何使用联合类型？

// 1. 访问联合类型的属性或方法

type role = "admin" | "user" | "guest";

function login(role: role) {
  if (role === "admin") {
    console.log("admin");
  } else if (role === "user") {
    console.log("user");
  } else {
    console.log("guest");
  }
}

function getLength(something: string | number): number {
  return something.length;
}

// 2. 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
let myFavoriteNumber: string | number;

myFavoriteNumber = "seven";

console.log(myFavoriteNumber.length);

myFavoriteNumber = 7;

console.log(myFavoriteNumber.length);

// 3. 联合类型的变量在被赋值的时候，只能被赋值为联合类型中所包含的类型
let myFavoriteNumber1: string | number;
myFavoriteNumber1 = "seven";

// 4. 联合类型的变量在被赋值的时候，如果赋值为其他类型，则会报错
// 5. 联合类型的变量在被赋值的时候，如果赋值为联合类型中所包含的类型，则可以正常访问
let myFavoriteNumber2: string | number;
myFavoriteNumber2 = "seven";
console.log(myFavoriteNumber2.toString());
