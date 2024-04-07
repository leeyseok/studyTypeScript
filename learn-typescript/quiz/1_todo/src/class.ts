
class Person {
    //  class logic
    private name: string
    public age: number
    readonly log : string;
    constructor(name: string, age: number) {
        console.log('made it')
        this.name = name;
        this.age = age;
    }
}

// let person = new Person('name', 123)
// person.hasOwnProperty('name')
// person.hasOwnProperty('age')