{
  type myString = string;

  let name: myString = "Duc Manh Van";
  console.log(name);

  type Person = {
    name: myString;
    age: number;
    job: myString;
  };

  function introduce(person: Person) {
    return `Name: ${person.name}, Age: ${person.age}, Job: ${person.job}`
  }

  console.log(introduce({name:"Mason", age:20, job:"Student"}));
}
