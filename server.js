const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Serve index.html on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server:', err);
    return;
  }
  console.log(`Server is running on http://localhost:${PORT}`);
}); 