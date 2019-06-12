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

module.exports = router;
