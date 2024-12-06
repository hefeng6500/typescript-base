type MyFunctionWithThis = {
  (this: { name: string }, num: number): number;
};

type MyFunctionWithoutThis = OmitThisParameter<MyFunctionWithThis>;
// MyFunctionWithoutThis类型为 (num: number): number

function toHex(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
// const fiveToHex: () => string;

console.log(fiveToHex());
