# stream
## 特点以及用途
1. 无记忆性, 分多次传输`chunk`(文件单位);
2. 非常便于传输大文件, 不会因为一个文件就占据了整个内存
## 四种流类型
1. fs.createReadStream
2. fs.createWriteStream
3. duplex stream
4. transform stream 中间流
所有都基于事件
? 怎么控制这个流的多少
