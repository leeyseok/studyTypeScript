function logMsg (value:string) {
    console.log(value)
}

logMsg("tempLog")

function logMsg2 (value:string | number) {
    if (typeof value === "number") {
        console.log("number")
    } 
    if (typeof value === "string") {
        console.log("string")
    }
    throw new TypeError("value must bbe string or number");
    
}

logMsg2("tempLog")
logMsg2(100)

interface Developer {
    name : string,
    skill: string
}
interface Person {
    name : string,
    age: number
}

function askSomeOne1(someOne: Developer | Person) {
    someOne.name
    // below property can't both Developer and Person
    // someOne.skill  
    // someOne.age
}

askSomeOne1({name: 'tempname1', skill: 'web'})
askSomeOne1({name: 'tempname2', age: 100})
//  askSomeone2 = developer + person
function askSomeOne2(someOne: Developer & Person) {
    someOne.name
    someOne.skill  
    someOne.age
}

askSomeOne2({name: 'tempname1', skill: 'web', age: 123})
