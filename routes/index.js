var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.send('test')
});

router.post('/',function(req,res){
    console.log(req.body)
    
})

module.exports = router;
