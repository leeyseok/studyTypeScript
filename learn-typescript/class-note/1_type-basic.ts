// JS string
// let str = 'hello ts';

// TS string
let str: string = 'hello';
// TS num
let num: number = 123;
// TS arrNum
let arrNum1: Array<number> =[];
let arrNum2: number[] =[];
// TS arrStr
// let strArray: Array<string> = ['must', 'be', 'str', 0] // <- err 

// TS tuple:　要素を定義
let address: [string, number] = ['a', 1];

// TS object
let obj: object = {}
let student1: object = {
    name: '',
    age: 123
}
let student2: { name:string, age: number} = {
    name: '',
    age: 123
} 

// TS boolean
let show:boolean = true

// TS function
function plus1(a:number, b:number) {
    return a+ b
}
plus1(10, 20)

// TS function
function plus2(a, b):number {
    return 10
}
plus2(10, 20)

