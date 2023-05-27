//Saves the command line arguements into variables 
const url = process.argv[2]
const localFilePath = process.argv[3]

//set up basic client code connection and write a file
const net = require('net');
const fs = require('fs');

//Create the connection with the url provided in the command line
const conn = net.createConnection({ 
  host: url,
  port: 80
});

conn.setEncoding('UTF8');

//Sends a request over to the server 
conn.on('connect', () => {
  console.log(`Connected to server!`);

  conn.write(`GET / HTTP/1.1\r\n`);
  conn.write(`Host: ${url}\r\n`);
  conn.write(`\r\n`);
});

//This will take the data that we receive from the server and console.log it 
conn.on('data', (data) => {
  console.log(data);
  conn.end();
});