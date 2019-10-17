import Base64 from './route/crypto/base64.mjs';
import Joke from './route/joke/joke.mjs';
import Meme from './route/meme/meme.mjs';
import Roast from './route/text/roast.mjs';

export default {
  // crypto
  base64: Base64,
  
  // joke
  joke: Joke,
  
  // meme
  meme: Meme,
  
  // text
  roast: Roast
};
