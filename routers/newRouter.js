var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/mydsfsdf', function(req, res) {
  res.send('Path: /mydsfsdf');
};

router.get('/myNewEndpoint', function(req, res) {
  res.send('Path: /myNewEndpoint');
};

router.get('/myNewEndpoint', function(req, res) {
  res.send('Path: /myNewEndpoint');
};

module.exports = router;
