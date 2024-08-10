// Built in modules: os, path, fs, http

// 1] os module

const os = require('os');
// console.log(os)
const userData = {
    userInfo: os.userInfo(),
    hostname: os.hostname(),
    osType: os.type(),
    version: os.version(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    uptime: os.uptime(),
    machineInfo: os.machine()
}
console.log(userData);

// 2] path module

const path = require('path');
console.log(path)
//path seperator
console.log(path.sep);
//relative path
const userPath = path.join("/main","subFolder","utils.js");
console.log(userPath);
// absolute path
console.log(path.resolve(__dirname,"main","subFolder","utils.js"));
// base file 
console.log(path.basename(userPath));

