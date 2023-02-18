// //no stream
// const fs = require('fs');
// const server = require('http').createServer();
//
// server.on('request', (req, res) => {
//     fs.readFile('./big.file', (err, data) => {
//         if (err) throw err;
//
//         res.end(data);
//     });
// });
//
// server.listen(8000);
//
// //stream
// const fs = require('fs');
// const server = require('http').createServer();
//
// server.on('request', (req, res) => {
//     const src = fs.createReadStream('./big.file');
//     src.pipe(res);//src must be readablestream and res must be writeablestream
// });
//
// server.lisen(8000);