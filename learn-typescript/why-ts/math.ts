function plus(a: number, b: number):number {
    return a+ b;
}

// plus(10 ,'20') // <- type Err

var result = plus(10, 20)
result.toLocaleString(); // 数字タイプのため