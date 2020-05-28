// Function 01
function add (x, y) {
    return x + y
}
console.log(add(4, 2))

// Function 02
function multiply (x, y) {
    let total = 0
    for (let position = 0; position < y; position += 1) {
        total = add(x, total)
    }
    return total
}
console.log(multiply(4, 6))

// Function 03
function power (x, n) {
    let total = 1
    for (let position = 0; position < n; position += 1) {
        total = multiply(x, total)
    }
    return total
}
console.log(power(2, 8))

// Function 04
function factorial (x) {
    let total = 1
    for (let i = 1; i <= x; i++) {
        total = multiply(i, total)
    }
    return total
}
console.log(factorial(5))

// Bonus