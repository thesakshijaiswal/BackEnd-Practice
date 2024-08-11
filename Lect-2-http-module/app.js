// 4] http module

const http = require('http');
// console.log(http);
const server = http.createServer((req,res) => {
//  console.log(req)
if(req.url === '/'){
    res.end("Welcome to our Home page!");
    return;
}
if(req.url === '/about'){
    res.end("know more about us");
    return;
}
    res.end(`
        <h1>Oops!</h1>
        <p>we are unable to find a page you are looking for!</p>
        <a href="/">back to Home</a>
        `);
})

server.listen(5000);


