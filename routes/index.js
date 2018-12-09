var express = require('express');
var router = express.Router();
var contectmodal = require('../modal/mogooescontact.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET xem. */
router.get('/view', function(req, res, next) {
  contectmodal.find({}, function (err, dulieu) {
    res.render('viewdl', { title: 'View Database' , data : dulieu });
  })
});

/* GET xóa. */
router.get('/remove/:iddl', function(req, res, next) {
  var id = req.params.iddl;
  contectmodal.findByIdAndRemove(id).exec();
  res.redirect('/view');
});

//Sửa dữ liệu
/* GET nhận dữ liệu sửa. */
router.get('/fixdl/:iddl', function(req, res, next) {
  var idfix = req.params.iddl;
  contectmodal.find({_id : idfix},  function (err, dulieu) {
    res.render('fixdl', { title: 'Sửa Dữ liệu' , data : dulieu });
  })
});
/* POST lại dữ liệu đã sửa vào view. */
router.post('/fixdl/:iddl', function(req, res, next) {
  var idfix = req.params.iddl;
contectmodal.findById(idfix, function (err, dulieu) {
    if (err) return handleError(err);
    dulieu.name = req.body.namedb;
    dulieu.age = req.body.agedb;
    dulieu.save();
  });
  res.redirect('/view')
});


//thêm dữ liệu
/* GET ra trang thêm dữ liệu. */
router.get('/themdl', function(req, res, next) {
    res.render('themdl', { title: 'Thêm dữ liệu' });
  });
/* POST thêm dữ liệu vào view. */
router.post('/themdl', function(req, res, next) {
  var themdulieu = {
    "name": req.body.namedb,
    "age": req.body.agedb
  }
  const dulieu = new contectmodal(themdulieu);
  dulieu.save();
  res.redirect('/view');
});
module.exports = router;
