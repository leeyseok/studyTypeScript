interface Person1 {
    name : string;
    age : number;
}

type Person2 = {
    name: string;
    age: number;
}

var tanaka : Person1 = {
    name : "tanaka",
    age : 123
}
var tanaka2 : Person2 = {
    name : "tanaka",
    age : 123
}
// type vs interfave  ?, type can't extneds


type MyString = string
const str: MyString = "str"

// type Todo  { id:string, title: string, done:boolean}
// function getTodo (todo: Todo) {

// }