const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Serve static frontend files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint requested by specifications
app.get('/api/hello', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ message: "Hello from Orbit Render E2E" });
});

// Fallback to index.html for SPA routing if needed
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});