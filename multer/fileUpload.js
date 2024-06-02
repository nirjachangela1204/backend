const multer = require('multer');

//set storage engine
const storage = multer.diskStorage({
    destination: 'C:/Users/Nirja Patel/Desktop/8-SEM Internship MERN/RaahNGO/backend/images',
    filename: function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname);
    }
});

//Initialize multer middleware
const upload = multer({storage: storage});

module.exports = upload;