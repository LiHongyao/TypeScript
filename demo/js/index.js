"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name) {
        super(name);
    }
    // 实现抽象方法
    sayHi() {
        console.log("Hello");
    }
}
