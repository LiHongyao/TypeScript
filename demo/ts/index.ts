class GenericNumber<T, U> {
    zeroValue?: T;
    message?: U;
    add?: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number, string>();
myGenericNumber.zeroValue = 0;
myGenericNumber.message = "Hello";
myGenericNumber.add = function(x, y) { return x + y; };,