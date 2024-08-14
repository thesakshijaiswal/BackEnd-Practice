// Built in modules: os, path, fs, http, events

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
const userPath = path.join("/main","subFolder","msg.txt");
console.log(userPath);
// absolute path
console.log(path.resolve(__dirname,"main","subFolder","msg.txt"));
// base file 
console.log(path.basename(userPath));



// 3] fs:(file system) module

/**************************read and write file synchronously!************************/

/*
const fs = require('fs');
// console.log(fs)
console.log('start');
const read = fs.readFileSync("./main/subFolder/msg.txt","utf8");
fs.writeFileSync("./main/subFolder/resultSync.txt",`the result message: ${read}`,{flag: 'a'});
console.log('task completed');
console.log(read);
console.log('loading next task');
*/


/************************read and write file Asynchronously!*****************************/
/*
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
*/

/**************************Optimizing the above code with promises [async read and write]***********************/
/*
const {readFile, writeFile} = require("fs");
const util = require('util');
// console.log(util)
const readFileUtil = util.promisify(readFile);
const writeFileUtil = util.promisify(writeFile);
const readAsync = async () => {
  try {
    const firstMsg = await readFileUtil("./main/subFolder/msg.txt","utf8");
    const secondMsg = await readFileUtil("./main/subFolder/msg-2.txt","utf8");
    await writeFileUtil("./main/subFolder/promisify-result.txt",`This is done using promisify :${firstMsg}, ${secondMsg}`)
    console.log(firstMsg, secondMsg);
    
  } catch (error) {
    console.log(error)
  }
}
readAsync()
*/

/**************************read and write file without util module**************************/
const {readFile, writeFile} = require("fs").promises;
const readAsyncFs = async () => {
  try {
    const first = await readFile("./main/subFolder/msg.txt","utf8");
    const second = await readFile("./main/subFolder/msg-2.txt","utf8");
    await writeFile("./main/subFolder/promisify-result.txt",`This is done using promisify :${first}, ${second}`,{flag:'a'})
    console.log(first, second);
    
  } catch (error) {
    console.log(error)
  }
}
readAsyncFs()


/*

/**************************Optimizing using promises .then and .catch**************************/

/*

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path,"utf8",(error,result) => {
      if(error){
        reject(error)
      }
      else{
        resolve(result)
      }
    })
  })
}

getText("./main/subFolder/msg.txt")
.then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)
})
*/