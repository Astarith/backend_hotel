const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/database");
dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(produkRoutes);
app.use(transaksiRoutes);
app.use(userRoutes);

db.authenticate()
  .then(async () => {
   console.log('Connection success');
   await db.sync({ alter: true });
  })
   .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
