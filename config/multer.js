const multer = require('multer');
const path = require('path');

// Konfigurasi penyimpanan untuk multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Folder penyimpanan gambar
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Nama file unik
    }
});

// Filter file untuk menerima hanya gambar dengan format JPEG atau PNG
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(new Error('File harus berupa gambar dengan format JPEG atau PNG'), false);
//     }
//};

// Konfigurasi multer
const upload = multer({ 
    storage: storage,
    //fileFilter: fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 } // Batas maksimal ukuran file adalah 2MB
});

module.exports = upload;
