{
  class Animal {
    public name: string;
    private age: number;
    protected species: string;

    constructor(name: string, age: number, species: string) {
      this.name = name;
      this.age = age;
      this.species = species;
    }

    public getAge() {
      return this.age;
    }

    private getName() {
      return this.name;
    }

    protected getSpecies() {
      return this.species;
    }
  }

  class Dog extends Animal {
    public color: string;
    constructor(name: string, age: number, species: string, color: string) {
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
