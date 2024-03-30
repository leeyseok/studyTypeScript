
// @ts-check
/**
 * @param {number} a 第一引数
 * @param {number} b 第二引数
 */
function plus(a, b) {
    return a+ b;
}
// plus(10 ,'20') // <- type Err
    
var result = plus(10, '20') // <- 2行の ts-checkのおかげで Js上でts可
result.toLocaleString(); // 数字タイプのため