// built in modules: os, path, fs, http

// os module

const os = require('os');
console.log(os)
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