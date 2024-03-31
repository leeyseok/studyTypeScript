interface User {
  age: number,
  name: string
}

// var tanaka: User
var tanaka: User = {
  age: 123,
  name: "tanaka"
}

function getUser(user:User) {
  console.log(user)
}

const user1:User = {
  age: 13,
  name: 'tempUser'
}
getUser(user1)

interface plusSome {
  (a:number, b:number): number;
}
let plus: plusSome;
plus = function (a:number, b:number):number {
  return a + b;
}

interface stringArray {
  [index: number]: string;
}

let arrStr: stringArray = ['a', 'b']
// arrStr[0] = 123 , key : ok, value : ng
arrStr[0] = '123'

interface StringRegExpDictionary {
  [key: string]: RegExp;
}

let obj:StringRegExpDictionary = {
  // sth: /abc/,
  // cssFile: 'css' ng
  // cssFile: /\.css$/,
  cssFile: /\.js$/
}

interface Person {
  name:string,
  age:number
}

interface citizen extends Person {
  // name:string,
  // age:number
  job:string
}
let citizen1 = {
  name:'123',
  age:123,
  job:'noJob'
}