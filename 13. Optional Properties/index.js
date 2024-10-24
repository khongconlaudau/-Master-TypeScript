"use strict";
{
    function introduce(person) {
        return `Name: ${person.name}, Age: ${person.age}, Job: ${person.job} `;
    }
    const person1 = {
        name: "Mason Van",
        age: 20,
    };
    //   person1.age = 30;
    console.log(introduce(person1));
}
