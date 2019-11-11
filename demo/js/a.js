"use strict";
let STU_AGE = Symbol();
class Student {
    constructor(name, age) {
        this.name = name;
        this[STU_AGE] = age;
    }
}
