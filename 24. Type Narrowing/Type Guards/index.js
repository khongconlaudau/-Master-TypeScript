"use strict";
{
    // Eg function with type guard
    function exampleFunction(value) {
        // Type guard using Type of
        if (typeof value === "string")
            console.log(value.toUpperCase());
        else
            console.log(value.toFixed(2));
    }
    exampleFunction(20);
    exampleFunction("Hello world");
}
