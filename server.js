const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect database
connectDB();

app.get('/', (req, res) => res.send('API running'));

//runs on env var PORT or, if not set, 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
