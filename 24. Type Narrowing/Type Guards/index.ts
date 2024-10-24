{
  type myType = string | number;

  // Eg function with type guard
  function exampleFunction(value: myType): void {
    // Type guard using Type of
    if (typeof value === "string") console.log(value.toUpperCase());
    else console.log(value.toFixed(2));
  }

  exampleFunction(20);
  exampleFunction("Hello world");
}
