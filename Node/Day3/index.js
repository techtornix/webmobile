const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request Received\n`;
    const myurl = url.parse(req.url, true);
    console.log(myurl);

    if(req.url === '/favicon.ico') {
        res.writeHead(204);
        res.end();
        return;
    }

    console.log(log);

    fs.appendFile('./log.txt', log, (err) => {
        if (err) {
            console.log('Error writing to log file:', err);
        }

        switch (myurl.pathname) {
            case '/':
                res.setHeader('Content-Type', 'text/html');
                res.write('<h1>Welcome to the Home Page</h1>');
                res.end();
                break;
            case '/about':
                res.setHeader('Content-Type','text/html');
                const username = myurl.query.name;
                const user = myurl.query.id;
                res.end(`<h1>About Us</h1><h1>Hi,${username} </h1>`);
                break;
            case '/contact':
                res.setHeader('Content-Type', 'text/html');
                res.write('<h1>Contact Us</h1>');
                res.end();
                break;
            default:
                res.setHeader('Content-Type', 'text/html');
                res.write('<h1>404 Not Found</h1>');
                res.end();
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
