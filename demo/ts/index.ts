function test(x: number): number;
function test(x: string): string;
function test(x: number | string): any {
    if(typeof x == "number") {
        return 2019;
    }else if(typeof x == "string") {
        return "Hello";
    }
}

console.log(test(1)); // => 2019
console.log(test("1")); // => hello

