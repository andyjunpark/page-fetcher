const request = require("request");
const fs = require("fs");

const args = process.argv.slice(2);

const requestResult = (data, path) => {
  console.log(`Downloaded and saved ${data.length} bytes to ${path}`);
};

const fetcher = (url, path, callback) => {
  request(url, (err, response) => {
    if (err) {
      console.log(err);
    }
    fs.writeFile(path, response.body, { flag: "a+" }, err => {});
    callback(response.body, path);
  });
};

fetcher(args[0], args[1], requestResult);