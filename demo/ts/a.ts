let STU_AGE = Symbol();

class Student {
    name: string;
    constructor(name: string, age: number) {
        this.name = name;
        this[STU_AGE] = age;
    }
}