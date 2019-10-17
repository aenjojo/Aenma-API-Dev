import express from 'express';
import AenmaAPI from './app.mjs';

const server = express();
const app = new AenmaAPI(server);

app.webpage([
  ['', 'main'],
  ['api-list', 'api-list']
]);

app.route([
  ['crypto', 'base64'],
  ['joke', 'joke'],
  ['meme', 'meme'],
  ['text', 'roast']
]);

app.error404();

server.listen(process.env.PORT);
