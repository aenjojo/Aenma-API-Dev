import express from 'express';
import MemeID from '../../database/meme/meme.mjs';

const CDN_URL = 'https://cdn.discordapp.com/attachments/';
const ChannelID = '617040380847980578';

const router = express.Router();

function GetMeme() {
  const random = Math.ceil(Math.random() * Object.keys(MemeID).length);
  const name = `Meme${random}`;
  const meme = MemeID[name];
  const link = `${CDN_URL}${ChannelID}/${meme}/${name}.png`;

  return {
    name: name,
    link: link
  };
}

router.get('/', (req, res) => {
  res.json(GetMeme());
});

export default router;
