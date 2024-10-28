const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/database");
const routes = require('./routes/router');
const cors = require('cors');
const harga = require('./controllers/createHarga');
const transaksi = require('./controllers/transaksi');
const user = require('./controllers/user');

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(routes);

// Menghubungkan ke database
db.authenticate()
  .then(async () => {
    console.log('Koneksi berhasil');
    await db.sync({ alter: true });
  })
  .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
