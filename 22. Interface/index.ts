{
  interface MathOperation {
    (x: number, y: number): number;
  }

  const add: MathOperation = (num1, num2) => {
    return num1 + num2;
  };

  const multi: MathOperation = (num1, num2) => num1 * num2;
  console.log(add(3, 4));
  console.log();
  console.log(multi(3, 10));
}

{
  interface Vehicle {
    start(): void;
    stop(): void;
  }

  class Car implements Vehicle {
    start(): void {
      console.log("The car is running");
    }
    stop(): void {
      console.log("Car stopped");
    }
  }

  const bmw = new Car();
  bmw.start();
  bmw.stop();
}
