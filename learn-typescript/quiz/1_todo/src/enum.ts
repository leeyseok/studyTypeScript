enum ShoesNum {
    Nike,
    Adidas
}

var myShoes1 = ShoesNum.Nike
console.log(myShoes1) // 0 enum = 별도의 값을 지정하지 않으면 0 혹은 초기값
var myShoes2 = ShoesNum.Adidas
console.log(myShoes2) // 1  이후는 1씩 증가

enum Shoes {
    Nike = 'Nike',
    Adidas = 'Adidas'
}


// ex

enum Answer {
    Yes = 'Y',
    No = 'N'
}
function askQuestion (answer: Answer) {
    if (answer === Answer.Yes) 
    console.log('OK')
    if (answer === Answer.No) 
    console.log('no')
   
}

askQuestion(Answer.Yes)
askQuestion(Answer.No)
// askQuestion('Yes')
// askQuestion('No')