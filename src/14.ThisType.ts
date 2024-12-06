type ObjectType = {
  method: (param: number) => number;
};
let myObject: ObjectType = {
  method: function (param: number) {
    return param + (this as any).extraValue;
  },
};

type MyType = {
  extraValue: number;
};
let myObject: ThisType<MyType> & {
  method: (param: number) => number;
} = {
  method: function (param: number) {
    return param + this.extraValue;
  },
} as any;

class MyClass {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
  getObject(): ThisType<MyClass> & {
    add: (param: number) => number;
  } {
    return {
      add: function (param: number) {
        return this.value + param;
      },
    } as any;
  }
}

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
