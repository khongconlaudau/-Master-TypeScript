{
  type myString = string;
  type myNumber = number;
  type Person = {
    name: myString;
    readonly age: myNumber;
    job?: myString;
  };

  function introduce(person: Person): myString {
    return `Name: ${person.name}, Age: ${person.age}, Job: ${person.job} `;
  }

  const person1: Person = {
    name: "Mason Van",
    age: 20,
  };

  //   person1.age = 30;

  console.log(introduce(person1));
}
