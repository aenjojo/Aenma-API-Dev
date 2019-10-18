import express from 'express';
import Joke from '../../database/joke/joke.mjs';

const router = express.Router();

function getJoke() {
  const random = Math.floor(Math.random() * Joke.length);
  const title = Joke[random][0];
  const text = Joke[random][1].join('\n');
  
  return {
    title: title,
    text: text
  };
}

router.get('/', (req, res) => {
  res.json(getJoke());
});

export default router;
