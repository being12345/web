const { spawn } = require('child_process');
const child = spawn('node demo.js', {
    stdio: 'ignore',
    shell: true,
    detached: true
});//event emitter add a event handler

child.on('exit', () => {
    console.log('run success');
})

child.unref();
