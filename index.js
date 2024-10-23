const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/database");
const routes = require('./routes/router');
const cors = require('cors');
const User = require('./models/userModels');

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: true
  })
);
app.use(express.json());
app.use(routes);

// db.authenticate()
//   .then(async () => {
//     console.log('Connection success');
//     await db.sync({ alter: true });
//   })
// .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
