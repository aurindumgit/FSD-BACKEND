const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
    const data = await fs.readFile('./data.json');
    const users = JSON.parse(data);
    const names = users.map((user) => user.name);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(names));
})

server.listen(9000, (err)=>{
    if(err) throw err;
    else
        
        console.log('Server is running at http://localhost:9000/');
})