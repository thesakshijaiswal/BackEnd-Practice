// 5] event module

const eventEmitter = require("events");
const customEmitter = new eventEmitter();

customEmitter.on("response",() => {
  console.log('data Received!');
})
customEmitter.on("response",() => {
  console.log('Another event to listen...');
})

customEmitter.emit("response");