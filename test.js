const asyncFn = () => {
    return new Promise((resolve, reject) => {
    })
}
const value = asyncFn().then;
console.log(value instanceof Function);
