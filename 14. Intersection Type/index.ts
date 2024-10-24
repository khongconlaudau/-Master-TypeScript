{
  type myString = string;
  type myNumber = number;

  type Child = {
    name: myString;
    age: myNumber;
  };

  type Add = {
    job: myString;
    email?: myString;
  };

  type People = Child & Add;
  let person1: People = {
    name: "Mason",
    age: 20,
    job: "Student",
  };
  console.log(person1);
}
