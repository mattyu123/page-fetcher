//Saves the command line arguements into variables
const url = `http://${process.argv[2]}`;
const localFilePath = process.argv[3];

// //set up basic client code connection and write a file
const fs = require('fs');
const request = require('request');

// //Create the connection with the url provided in the command line
request(url, (error, response, body) => {
  //prints the error if there is an error
  if (error) {
    console.log('Error', error.message);
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  //Write what you get from the request to the specified file path
  fs.writeFile(localFilePath, body, error => {
    if (error) {
      console.error(error);
    }
    
    //Print out final statement saying that the download was successful and how many bytes the file was
    fs.stat(localFilePath, (err, stats) => {
      if (err) {
        console.error(err);
      };
      console.log(`Downloaded and saved ${stats.size} bytes to ${localFilePath}`)
    });
  });
});
  
