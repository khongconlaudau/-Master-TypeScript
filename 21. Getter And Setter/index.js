"use strict";
{
    class Person {
        set setName(name) {
            this.name = name;
        }
        get getName() {
            return this.name;
        }
    }
    let person = new Person();
    console.log(person.getName);
    person.setName = "Mason Van";
    console.log();
    console.log(person.getName);
}
