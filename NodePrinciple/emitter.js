//1. exports 与 modul.exports 的关系
/*
const test = 1;
exports = test;//wrong! 必须设置 exports 的属性
module.exports = = test;//right! 相当于 exports. 不需要单独对 exports 设置属性*/

//2. eventEmitter a chat room
const EventEmitter = require('node:events');
const net = require('net');

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter();
myEmitter.on('join', () => {
        console.log('welcome');
    }
)

const server = net.createServer((c) => {
    myEmitter.emit('join');
    c.on('data', (data) => {
        data = data.toString();
        console.log(data);
    })

})
server.listen(8088);

//3. use closures

//demo1 Lexical scoping
const closures = () => {
    let x = 1;
    return () => {
        console.log(x);
        return () => {
            console.log(x);
        }
    }
}

closures()()();

//demo2: in callback in order to pass the parameter ./closures.html
const oop = () => {
    let private = 1;
    let privateFunction = () => {
        console.log(private);
    }
    return () => {
        privateFunction();
        console.log(private);
    }
}
