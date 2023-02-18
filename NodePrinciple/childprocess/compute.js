const longComputation = () => {
    let sum = 0;
    while (true) {

    }
    return sum.toString();
};

process.on('message', (msg) => {
    const sum = longComputation();
    process.send(sum);
});