"use strict";
//  the order of return arguments does not matter
{
    const person = {
        name: "Mason",
        job: "Student",
        age: 20,
    };
    console.log(person.name);
    console.log(person);
}
{
    function introduce(name, age, job) {
        return {
            name: name,
            age: age,
            job: job,
        };
    }
    console.log(introduce("Manh", 20, "student"));
}
