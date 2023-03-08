import express from 'express';
import path from 'path';
import url from 'url';
import authConfig from './auth-config.js';
import recipes from './recipes.js';
import config from './config.js';


const port = 8080;
const app = express();

app.use(express.static(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../client')));

app.get('/auth-config', (req, res) => {
  res.json(authConfig);
});


app.get('/recipes', (req, res) => {
  res.send(recipes.recipes);
});
app.get('/get-api-key', (req, res) => {
  try {
    res.send(config.spoonacular);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, function () {
  console.log('server initiates where port is localhost', port);
});
