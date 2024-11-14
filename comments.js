// Create web server
// Create a route that handles GET requests to /comments
// If the request is a GET request, send the 'comments' array as a JSON response

const express = require('express');
const app = express();

const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'FishBoi', comment: 'I am a fish' },
  { username: 'skaterBoi', comment: 'I am a skater' },
  { username: 'skaterGurl', comment: 'I am a skater' },
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});