import http from 'http';
import fs from 'fs';
import path from 'path';

http
    .createServer((req, res) => {
        console.log(req.url, 'request.url');
        if (req.method === 'GET' && req.url?.endsWith('.jpg')) {
            res.writeHead(200, {
                'Access-Control-Allow-Origin': '*'
            });
            const file = fs.readFileSync(path.join(process.cwd(), 'example/client/test.jpg'));
            res.end(file);
        } else if (req.method === 'POST' && req.url === '/api/export-excel') {
            res.writeHead(200, {
                'Access-Control-Allow-Origin': '*'
            });
            const file = fs.readFileSync(path.join(process.cwd(), 'example/test.xlsx'));
            res.end(file);
        }
    })
    .listen(3005)
