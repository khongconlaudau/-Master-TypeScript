"use strict";
{
    let name = "Duc Manh Van";
    console.log(name);
    function introduce(person) {
        return `Name: ${person.name}, Age: ${person.age}, Job: ${person.job}`;
    }
    console.log(introduce({ name: "Mason", age: 20, job: "Student" }));
}
