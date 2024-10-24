{
  class Dog {
    bark(): void {
      console.log("Woof!");
    }
  }

  class Cat {
    meow(): void {
      console.log("Meow");
    }
  }

  // Eg with instance of tupe guard
  function animalSound(animal: Dog | Cat) :void{
    if(animal instanceof Dog){
        animal.bark();
    }else{
        animal.meow();
    }
  }

  const myCat = new Cat();
  const myDog = new Dog();


  animalSound(myCat);
  animalSound(myDog);
}
