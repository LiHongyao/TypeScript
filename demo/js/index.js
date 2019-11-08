"use strict";
function test(x) {
    if (typeof x == "number") {
        return 2019;
    }
    else if (typeof x == "string") {
        return "Hello";
    }
}
console.log(test(1)); // => 2019
console.log(test("1")); // => hello
