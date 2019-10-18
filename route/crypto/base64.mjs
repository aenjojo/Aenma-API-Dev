import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  let text = req.query.text;
  let type = req.query.type || '';
  
  if (text === undefined)
    res.redirect('/crypto/base64?text=hello&type=encode');
  
  let result = type == 'encode'
      ? new Buffer(text).toString('base64')
      : type == 'decode'
        ? new Buffer(text, 'base64').toString()
        : 'Error: converter type is not specified or unknown';
  
  res.json({
    'text': text,
    'type': type,
    'result': result
  });
});

export default router;
