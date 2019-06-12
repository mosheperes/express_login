let express = require('express');
let router = express.Router();
let randomwords = require('random-words');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/word',(req, res)=> {
  let word = randomwords(1);
  res.send({word: word});
});

router.get('/words/:count',(req, res)=> {
  let count = Number(req.params.count);
  let words = randomwords({exactly: count, join: ' '});
  res.send({word: words});
});

router.get('/sentence', (req,res)=> {
  min= (isNaN(Number(req.query.min))) ? 1 : Number(req.query.min);
  max= (isNaN(Number(req.query.max))) ? min + 1: Number(req.query.max);
  let sentence = randomwords({min: min, max: max, join: ' '});
  res.send({sentence: sentence});
});

router.post('/word',(req, res)=>{
  res.send({word: 'Funny'});
});

module.exports = router;
