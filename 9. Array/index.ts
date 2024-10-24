{
  const arr: number[] = [1, 2, 3, 4, 5, 7];
  for (let index in arr) {
    console.log(`index: ${index} And value: ${arr[index]}`);
  }
  //  This one for index

  for (let value of arr) {
    console.log(value);
  }

  console.log();

  arr.forEach((value: number, index: number) => {
    console.log(`index: ${index} And value: ${arr[index]}`);
  });

  console.log();

  const names: Array<string> = ["Mason", "Tom", "Alex"];
  const otherNames = ["Duc", "Manh"];
  names.push("Alicia");
  names.push("Sandra");
  names.pop();

  console.log(names.concat(otherNames));

  for (let name of names) {
    console.log(name);
  }
  console.log(names);
}
