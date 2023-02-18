const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === '/compute') {
        const forked = fork('compute.js');
        forked.on('message', (msg) => {
            res.end(msg);
        });
        forked.send({start: 'start'});
    } else {
        res.end('Ok')
    }
});

server.listen(8000);