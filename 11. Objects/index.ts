//  the order of return arguments does not matter
{
    const person: { name: string; age: number; job: string } = {
    name: "Mason",
    job: "Student",
    age: 20,
  };

  console.log(person.name);
  console.log(person);
}

{
  function introduce(
    name: string,
    age: number,
    job: string
  ): { name: string; age: number; job: string } {
    return {
      name: name,
      age: age,
      job: job,
    };
  }

  console.log(introduce("Manh", 20, "student"));
}
