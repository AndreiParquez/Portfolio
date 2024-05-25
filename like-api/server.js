const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const likeFile = 'like.json';

// Initialize an in-memory store for user likes
let userLikes = {};

app.get('/api/like', (req, res) => {
  fs.readFile(likeFile, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/like', (req, res) => {
  const { userId } = req.body;

  fs.readFile(likeFile, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }

    const likeData = JSON.parse(data);

    if (!userLikes[userId]) {
      userLikes[userId] = true;
      likeData.count += 1;
    } else {
      userLikes[userId] = !userLikes[userId];
      likeData.count += userLikes[userId] ? 1 : -1;
    }

    fs.writeFile(likeFile, JSON.stringify(likeData), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error writing file' });
      }
      res.json(likeData);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
