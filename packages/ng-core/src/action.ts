export function Action(description: string = null): Function {
  return function (target: Function, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    if(descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
    }

    let originalMethod = descriptor.value;

    descriptor.value = function (): void {
      let args = [];

      for (let _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
      }

      console.log('Action ' + (description || propertyKey));
      console.log(args);

      originalMethod.apply(this, args);
    }

    return descriptor;
  }
}
