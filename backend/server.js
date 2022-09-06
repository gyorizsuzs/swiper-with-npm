const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
});

app.get('/images', (req, res) => {
  res.sendFile(path.join(`${__dirname}/images.json`));
});

app.use('/public', express.static(`${__dirname}/../frontend/public`));
app.use('/dist', express.static(`${__dirname}/../frontend/dist`));

app.listen(9000, () => {
  // itt () helyett hasuznalhatunk _-t is
  console.log('http:127.0.0.1:9000');
});
