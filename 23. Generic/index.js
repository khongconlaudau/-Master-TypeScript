"use strict";
{
    function genericFunction(x, y) {
        console.log(x);
        console.log(y);
    }
    genericFunction("Hello", "World");
    genericFunction(1, 3);
    genericFunction(true, false);
}
{
    function filterArray(array, condition) {
        return array.filter((item) => condition(item));
    }
    const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNums = filterArray(numberArray, (num) => num % 2 === 0);
    console.log(evenNums);
    const stringArr = ["Apple", "Banana", "Chery", "Orange"];
    const filter = filterArray(stringArr, (item) => item.length >= 6);
    console.log(filter);
}
// Multi Generics
{
    function reversePair(value1, value2) {
        return [value2, value1];
    }
    const reversed = reversePair("Hello", 20);
    console.log(reversed);
}
