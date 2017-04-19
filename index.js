const http = require('http');
const path = require('path');
const express = require('express');

const app = express();
const server = http.Server(app);

const PORT = process.env.PORT || 3000;

app.get('/', express.static(path.join(__dirname, '/public')))

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

