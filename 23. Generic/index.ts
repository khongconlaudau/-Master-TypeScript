{
  function genericFunction<T>(x: T, y: T) {
    console.log(x);
    console.log(y);
  }

  genericFunction<string>("Hello", "World");
  genericFunction<number>(1, 3);
  genericFunction<boolean>(true, false);
}

{
  function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item));
  }

  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNums = filterArray<number>(numberArray, (num) => num % 2 === 0);
  console.log(evenNums);

  const stringArr = ["Apple", "Banana", "Chery", "Orange"];
  const filter = filterArray(stringArr, (item) => item.length >= 6);
  console.log(filter);
}

// Multi Generics
{
  function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1];
  }

  const reversed = reversePair("Hello", 20);
  console.log(reversed);
  
}