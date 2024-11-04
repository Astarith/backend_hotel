const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/database");
const routes = require('./routes/router');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const User = require('./models/user/userModels');
const Checkin = require('./models/resepsionis/checkinModels');
const Checkout = require('./models/resepsionis/checkoutModels');
const Riwayat = require('./models/resepsionis/riwayatModels');

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: true
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(routes);

  db.authenticate()
    .then(async () => {
      console.log('Connection success');
      await db.sync({ alter: true });
      })
  .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
