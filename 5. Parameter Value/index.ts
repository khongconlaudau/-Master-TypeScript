{
  function sayHi(name: string = "Anonymous") {
    return `Hello ${name}`;
  }

  console.log(sayHi());
  console.log(sayHi("Mason"));
}
