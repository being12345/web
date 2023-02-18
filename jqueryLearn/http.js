const http = require('jqueryLearn/http');
const server = http.createServer((req, res) => {
    res.end('hello');
})
server.listen(8080);