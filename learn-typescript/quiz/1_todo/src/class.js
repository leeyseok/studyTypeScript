function Person(name, age) {
    this.name = name
    this.age = age
}
let p = new Person('name', 100)

class Person {
    //  class logic
    constructor(name, age) {
        console.log('made it')
        this.name = name;
        this.age = age;
    }
}

let person = new Person('name', 123)
person.hasOwnProperty('name')
person.hasOwnProperty('age')