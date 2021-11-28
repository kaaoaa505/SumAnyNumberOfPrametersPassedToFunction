function add(...params: number[]): number {
    let total: number = 0;
    params.forEach(v => {
        total += v;
    })
    return total;
}

console.log(add(1, 2)); // 3

console.log('-------------------------------');

console.log(add(3, 2)); // 5

console.log('-------------------------------');


console.log(add(1,2,3,4,5)); // 15

console.log('-------------------------------');

console.log(add(2,3)); // 5

console.log('_______________________________')
