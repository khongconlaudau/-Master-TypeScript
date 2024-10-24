"use strict";
{
    class Animal {
        constructor(name, age, species) {
            this.name = name;
            this.age = age;
            this.species = species;
        }
        getAge() {
            return this.age;
        }
        getName() {
            return this.name;
        }
        getSpecies() {
            return this.species;
        }
    }
    class Dog extends Animal {
        constructor(name, age, species, color) {
            super(name, age, species);
            this.color = color;
        }
    }
    const puppy = new Dog("Booby", 1, "Cute", "Yellow");
    console.log(puppy.name);
    // console.log(puppy.age);
    console.log(puppy);
    console.log();
    console.log(puppy.getAge());
}
