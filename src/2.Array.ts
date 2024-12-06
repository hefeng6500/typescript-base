// TS 如何定义数组类型？

// 1. 类型 + 方括号
let arr1: number[] = [1, 2, 3];

// 2. 数组泛型
let arr2: Array<number> = [1, 2, 3];

// 3. 接口
interface NumberArray {
  [index: number]: number;
}

let arr3: NumberArray = [1, 2, 3];

// 4. 类数组
function sum() {
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}

// 5. any
let arr4: any[] = [1, "2", true];

// 6. 联合类型
let arr5: (number | string | boolean)[] = [1, "2", true];

// 7. 元组
let arr6: [string, number] = ["1", 2];
