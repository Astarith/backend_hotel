const express = require("express");
const routes = require('./routes/router');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: true
  })
);
app.use(express.json());
app.use('/api', routes);

// sequelize.authenticate()
//   .then(async () => {
//     console.log('Connection success');
//     // await sequelize.sync();
// })
// .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
