import express from 'express';
import Roast from '../../database/text/roast.mjs';

const router = express.Router();

function getRoast() {
  const random = Math.floor(Math.random() * Roast.length);
  const roast = Roast[random];
  
  return {
    roast: roast
  };
}

router.get('/', (req, res) => {
  res.json(getRoast());
});

export default router;
