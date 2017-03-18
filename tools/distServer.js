import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint no-console: 0 */

const port = 3002;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
});
