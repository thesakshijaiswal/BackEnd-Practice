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
// console.log(path)
//path seperator
console.log(path.sep);
//relative path
const userPath = path.join("/main","subFolder","utils.js");
console.log(userPath);
// absolute path
console.log(path.resolve(__dirname,"main","subFolder","utils.js"));
// base file 
console.log(path.basename(userPath));



// 3] fs:(file system) module

//read and write file synchronously!

const fs = require('fs');
// console.log(fs)
console.log('start');
const read = fs.readFileSync("./main/subFolder/msg.txt","utf8");
fs.writeFileSync("./main/subFolder/resultSync.txt",`the result message: ${read}`,{flag: 'a'});
console.log('task completed');
console.log(read);
console.log('loading next task');

//read and write file Asynchronously!

console.log('start');
fs.readFile("./main/subFolder/msg.txt","utf8",(err,result) => {
  if(err){
    console.log(err);
    return;
  }
  const firstResult = result;
  fs.readFile("./main/subFolder/msg-2.txt","utf8",(err,result) => {
  if(err){
    console.log(err);
    return;
  }
  const secondResult = result;
  fs.writeFile("./main/subFolder/async-result.txt",`the combined msg: ${firstResult}, ${secondResult}`,(err,result) => {
  if(err){
    console.log(err);
    return;
  }
  console.log(result);
  console.log('task completed');
})
})
})
console.log('loading next task');