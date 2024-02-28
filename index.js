const http = require('http');

// Define the hostname and port
const hostname = '0.0.0.0'; // Listen on all available network interfaces
const port = 3000; // Use any available port you prefer

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the HTTP status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Write the response body
  res.end('Hello, world!\n');
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
