'use strict';

require('dotenv').config();
const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');

const PORT = process.env.PORT || 3000;

// const replaceTemplate = require('./modules/replaceTemplate');

const templateOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const templateProduct = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const templateCard = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(templateOverview);
    }
    else if (pathName === '/product') {
        res.end('This is the PRODUCT.');
    } 
    else if (pathName === '/api') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.end(data);
    } 
    else {
        res.writeHead(404, {
            'Content-type': 'text/html', 
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Listening on port: ${PORT}`);
});