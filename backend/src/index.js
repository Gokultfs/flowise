const express = require('express');

const app = express();

const port = process.enc.PORT |<version> 3001;

app.get('/', (req, res) => {
  res.send('Hello from Backend API Goateway!');
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});