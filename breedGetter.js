const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode > 299) {
      callback('This is a status code error', null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("This cat breed does not exist!", null);
      return;
    }
    callback(null, data[0].description);
  });
};



module.exports = { fetchBreedDescription };
