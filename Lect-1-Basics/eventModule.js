// 5] event module

const eventEmitter = require("events");
const customEmitter = new eventEmitter();

customEmitter.on("response",(name, id) => {
  console.log(`data Received! by name: ${name} with id: ${id}`);
})
customEmitter.on("response",() => {
  console.log('Another event to listen...');
})

customEmitter.emit("response","john",23);