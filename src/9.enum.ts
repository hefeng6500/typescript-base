// TypeScript enum 的使用

// 枚举类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。

// 1. 数字枚举
// 数字枚举会被编译为一个对象，同时也会对枚举成员进行反向映射
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true

// 2. 字符串枚举
// 字符串枚举会被编译为一个对象，同时也会对枚举成员进行反向映射
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

// 3. 异构枚举
// 异构枚举是指枚举成员的类型不同
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

// 4. 常量枚举
// 常量枚举使用 const 定义的枚举类型
const enum Directions {
  Up,
  Down,
  Left,
  Right,
}

// 5. 枚举成员
// 枚举成员类型
// 枚举成员有两种类型：常量成员和计算成员。

// 5.1 常量成员
// 常量枚举成员使用 const 定义，并且必须有初始值，常量枚举成员在编译阶段会被计算出结果，然后被替换成常量表达式。
const enum Month {
  Jan,
  Feb,
  Mar,
}
// 5.2 计算成员
// 计算枚举成员使用 const 定义，但是没有初始值，计算枚举成员在编译阶段会被删除，并且保留到运行阶段。
const enum Month2 {
  Jan = 1,
  Feb,
  Mar,
}

// 使用 const 定义的枚举类型 和不使用 const 定义的枚举类型的区别
// 不使用 const 定义的枚举类型会被编译成一个对象，同时也会对枚举成员进行反向映射。
// 使用 const 定义的枚举类型会被编译成一个对象，但是不会对枚举成员进行反向映射。

// 使用 const，性能更优
const enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let move = Direction.Up; // 编译后，move 被替换为 1

// 不使用 const
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let move = Direction.Up; // 编译后，move 被替换为 Direction.Up

var Direction;
(function (Direction) {
  Direction[(Direction["Up"] = 1)] = "Up";
  Direction[(Direction["Down"] = 2)] = "Down";
  Direction[(Direction["Left"] = 3)] = "Left";
  Direction[(Direction["Right"] = 4)] = "Right";
})(Direction || (Direction = {}));

var move = Direction.Up;
