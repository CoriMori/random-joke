const fs = require('fs');

const errorPage = fs.readFileSync(`${__dirname}/../client/error.html`);
const styleSheet = fs.readFileSync(`${__dirname}/../client/default-styles.css`);

const get404Response = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'text/html' }); // send response headers
  response.write(errorPage); // send content
  response.end(); // close connection
};
const getStyleSheet = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' }); // send response headers
  response.write(styleSheet); // send content
  response.end(); // close connection
};

module.exports = {
  get404Response,
  getStyleSheet,
};
