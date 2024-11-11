const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/database");
const routes = require('./routes/router');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const path = require('path');

const fnb = require('./models/historyFnBmodels');
//const User = require('./models/userModels'); // Impor model User
const Reservasi = require('./models/reservasiModels');
const chekOutIn = require("./models/checkInOut");
//const Room = require('./models/roomModels');



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


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', routes);

   db.authenticate()
    .then(async () => {
       console.log('Connection success');
       //await chekOutIn.sync({alter : true});
       })
   .catch(err => console.log('Error: ' + err));


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
