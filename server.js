const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('db');
const authRoutes = require('auth');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Database sync error:', err);
  });

app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
