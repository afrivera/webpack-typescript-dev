function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => console.log("Hola Mundo");
  }
};

const bloquearPrototype = (constructor: Function) => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

const CheckValidPokemonId = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;
    // descriptor.value = ()=> console.log('Hola Mundo')
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("El Id del Pokemon debe de estar entre 1 y 800");
      } else {
        return original(id);
      }
    };
  };
};

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return "andres";
      },
      set(this, val) {
        // console.log(this, val)
        Object.defineProperty(this, propertyKey, {
            value: val,
            writable: !isWritable,
            enumerable: false
        })
      },
    };

    return descriptor;
  };
}

// @bloquearPrototype
@printToConsoleConditional(false)
export class Pokemon {
  @readOnly( )
  private publicAPI: string = "https://pokeapi.co";

  constructor(public name: string) {}

  // @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`pokemon guardado en BD ${id}`);
  }
}
