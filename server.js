const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());

app.set("view engine", "ejs");
app.use(express.static("public"));

// Serve React app static files
app.use(express.static(path.join(__dirname, 'charleston-compass/build')));

// API routes
app.get('/api/attractions', (req, res) => {
  res.json({ message: "Attractions data would be fetched from database here" });
});

app.get('/api/restaurants', (req, res) => {
  res.json({ message: "Restaurants data would be fetched from database here" });
});

app.get('/api/events', (req, res) => {
  res.json({ message: "Events data would be fetched from database here" });
});

app.post('/api/button-click', (req, res) => {
  console.log("✅ A user clicked the test button!");
  res.json({ success: true, message: "Button click logged on server!" });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'charleston-compass/build', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
  console.log('React app will be served from the root path');
});