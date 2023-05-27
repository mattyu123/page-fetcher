//Saves the command line arguements into variables 
const url = `http://${process.argv[2]}`
const localFilePath = process.argv[3]

// //set up basic client code connection and write a file
const fs = require('fs');
const request = require('request');

// //Create the connection with the url provided in the command line
request(url, (error, response, body) => {  
  if (error) {
    console.log('Error:', error); // Print the error if one occurred
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  //Write what you get from the request to the specified file path
  fs.writeFile(localFilePath, body, err => {
  if (err) {
    console.error(err);
    }
  });
});