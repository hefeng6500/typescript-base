import "reflect-metadata";

// 1. 日志记录
// function LogMethod(
//   target: Object,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalMethod = descriptor.value;
//   descriptor.value = function (...args: any[]) {
//     console.log(`Method ${propertyKey} called with args:`, args);
//     return originalMethod.apply(this, args);
//   };
// }

// class Calculator {
//   @LogMethod
//   add(a: number, b: number) {
//     return a + b;
//   }
// }

// const calc = new Calculator();
// calc.add(1, 2);
// 输出：Method add called with args: [1, 2]

// 2. 数据验证
// 验证输入是否符合要求，例如参数类型或范围。
// function IsString(target: Object, propertyKey: string, parameterIndex: number) {
//   const existingValidators =
//     Reflect.getOwnMetadata("validators", target, propertyKey) || [];
//   existingValidators.push({
//     parameterIndex,
//     validator: (arg: any) => typeof arg === "string",
//     message: "Argument must be a string.",
//   });
//   Reflect.defineMetadata("validators", existingValidators, target, propertyKey);
// }

// function Validate(
//   target: Object,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   const method = descriptor.value;
//   descriptor.value = function (...args: any[]) {
//     const validators =
//       Reflect.getOwnMetadata("validators", target, propertyKey) || [];
//     for (const { parameterIndex, validator, message } of validators) {
//       if (!validator(args[parameterIndex])) {
//         throw new Error(message);
//       }
//     }
//     return method.apply(this, args);
//   };
// }

// class User {
//   @Validate
//   setName(@IsString name: any) {
//     console.log(`Name set to ${name}`);
//   }
// }

// const user = new User();
// user.setName("Alice"); // 正常输出：Name set to Alice
// user.setName(42); // 报错：Argument must be a string.

// 3.依赖注入，类似于 Spring Boot
// 注入服务或依赖，实现类的解耦和更好的测试支持。
class Service {
  sayHello() {
    console.log("Hello from Service!");
  }
}

function Injectable(target: any) {
  Reflect.defineMetadata("injectable", true, target);
}

function Inject(service: Function) {
  return function (target: any, propertyKey: string) {
    const instance = new (service as any)();
    Object.defineProperty(target, propertyKey, {
      value: instance,
      writable: false,
    });
  };
}

@Injectable
class Client {
  @Inject(Service)
  private service!: Service;

  run() {
    this.service.sayHello();
  }
}

const client = new Client();
client.run(); // 输出：Hello from Service!

// 4. 元数据
// 用于框架开发，存储和读取运行时元数据，简化路由、依赖注入等复杂逻辑的实现。
const Routes: Array<{ path: string; method: string; handler: Function }> = [];

function Controller(basePath: string) {
  return function (target: Function) {
    Reflect.defineMetadata("basePath", basePath, target);
  };
}

function Get(path: string) {
  return function (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    Routes.push({
      path: path,
      method: "GET",
      handler: descriptor.value,
    });
  };
}

@Controller("/api")
class MyController {
  @Get("/users")
  getUsers() {
    console.log("Fetching users...");
  }

  @Get("/products")
  getProducts() {
    console.log("Fetching products...");
  }
}

// 模拟路由注册过程
Routes.forEach((route) => {
  console.log(`Registering route: [GET] ${route.path}`);
});
// 输出：
// Registering route: [GET] /users
// Registering route: [GET] /products
