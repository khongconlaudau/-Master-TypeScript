"use strict";
{
    class Dog {
        bark() {
            console.log("Woof!");
        }
    }
    class Cat {
        meow() {
            console.log("Meow");
        }
    }
    // Eg with instance of tupe guard
    function animalSound(animal) {
        if (animal instanceof Dog) {
            animal.bark();
        }
        else {
            animal.meow();
        }
    }
    const myCat = new Cat();
    const myDog = new Dog();
    animalSound(myCat);
    animalSound(myDog);
}
