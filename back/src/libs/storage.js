const multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'src/img')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '_' + Date.now() + '.jpg')
    } 
})

var upload = multer({storage});

module.exports = upload;