"use strict";
{
    function sayHi(name = "Anonymous") {
        return `Hello ${name}`;
    }
    console.log(sayHi());
    console.log(sayHi("Mason"));
}
