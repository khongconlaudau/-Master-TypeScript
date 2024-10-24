{
    class Person{
        name: string;
        age: number;

        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }
    }

    const person = new Person("Mason Van", 20);
    console.log(person.name);
    console.log();
    console.log(person);

        
}