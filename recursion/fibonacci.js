// // using iteration
function fib(n){
    let arr = [0, 1]
    let prev = 0
    for(i = 1; i < n - 1; i++){
        let curr = arr[i]
        arr.push(curr + prev)
        prev = arr[i]
    }
    return arr
}
console.log(fib(8))

// using recursion
let count = 0;
function fibs(n) {
    count += 1;
    if (n == 0) return [0]
    if (n == 1) return [0, 1]
    const arr = fibs(n - 1)
    return(n === count ? [...arr] : [...arr, arr[n-1] + arr[n-2]])
}
console.log(fibs(10))