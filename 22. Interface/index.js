"use strict";
{
    const add = (num1, num2) => {
        return num1 + num2;
    };
    const multi = (num1, num2) => num1 * num2;
    console.log(add(3, 4));
    console.log();
    console.log(multi(3, 10));
}
{
    class Car {
        start() {
            console.log("The car is running");
        }
        stop() {
            console.log("Car stopped");
        }
    }
    const bmw = new Car();
    bmw.start();
    bmw.stop();
}
