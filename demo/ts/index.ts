
abstract class Person { // 定义抽象类
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract sayHi(): void; // 定义抽象方法
}


class Student extends Person { 
    constructor(name: string) {
        super(name)
    }
    // 实现抽象方法
    sayHi() {
        console.log("Hello");
    }
}
