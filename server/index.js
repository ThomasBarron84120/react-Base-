const express = require("express");
const path = require('path');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const port = process.env.PORT || 3001;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

// const cleanSessions = require('./cleanSessions');
const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};
const videosRouter = require('./routes/videos');
const http = require('http').Server(app);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.disable("x-powered-by");
//Other use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('public', { etag: false }));
app.use('/', express.static('dist', { etag: false }));
app.get('/', (req, res) => {
  res.send(mockResponse);
});


app.use('/api/video', videosRouter);


app.get('*', (req, res) => res.sendFile(path.resolve('dist', 'index.html')));

http.listen(port, function () {
  console.log('App listening on port: ' + port);
});