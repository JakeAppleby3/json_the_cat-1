const request = require('request');
const catName = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode);
  if (error) {
    console.log(error);
    return;
  }
  if (response.statusCode > 299) {
    console.log("This is status code error:", error);
    return;
  }
  const data = JSON.parse(body);
  console.log(data);
  if (data.length === 0) {
    console.log("This cat breed does not exist!");
    return;
  }
  console.log(typeof data);
  console.log(data[0].description);
  console.log(process.argv);
});
