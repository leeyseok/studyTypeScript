// function logText(text: string) {
//     console.log(text)
//     // text.split('').reverse().join()
//     return text
// }
// function logNum(num: number) {
//     console.log(num)
//     // text.split('').reverse().join()
//     return num
// }

// logText('asd') 
// logNum(10) 

// function logUnion(param: number | string) {
//     console.log(param)
//     // text.split('').reverse().join()
//     return param
// }

// const a = logUnion('hi')

// logText('asd') 
// logText(10) 
// logText<string>('hi')

// function logText(text:any):any { // NG
function logText<T>(text:T):T { // 함수 호출할 떄 타입을 넘겨줌
    console.log(text)
    return text
}

logText('asd') 
logText(10) 
logText<string>('hi')

const str1 = logText<string>('abc')
str1.split('')
logText<boolean>(true)
